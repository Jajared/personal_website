import { type FormEvent, useId, useRef, useState } from "react";
import { ArrowUpRightIcon, CheckIcon, SpinnerIcon } from "@/components/icons/UiIcons";
import { siteConfig } from "@/lib/siteConfig";

type Status = "idle" | "sending" | "sent" | "handoff" | "error";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
/** Anything submitted faster than this is almost certainly a bot, not a human typing. */
const MIN_FILL_MS = 2500;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const cardClass = "rounded-2xl border border-line bg-surface p-6 shadow-soft sm:p-8";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const emailId = useId();
  const messageId = useId();
  const errorId = useId();
  const honeypotId = useId();

  // Spam defenses: a hidden field bots tend to fill, plus the moment the form appeared.
  const honeypotRef = useRef<HTMLInputElement>(null);
  const shownAt = useRef(performance.now());

  const isSending = status === "sending";

  function reset() {
    setEmail("");
    setMessage("");
    setError(null);
    setStatus("idle");
    shownAt.current = performance.now();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    // Silently accept bots so they don't learn what tripped them — nothing is sent.
    const trippedHoneypot = Boolean(honeypotRef.current?.value);
    const tooFast = performance.now() - shownAt.current < MIN_FILL_MS;
    if (trippedHoneypot || tooFast) {
      setStatus("sent");
      return;
    }

    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    if (!EMAIL_RE.test(trimmedEmail)) {
      setError("Enter a valid email so I can reply.");
      return;
    }
    if (trimmedMessage.length < 10) {
      setError("Add a little more detail so I can help.");
      return;
    }

    // No key configured yet → hand off to the visitor's mail client.
    if (!siteConfig.contactFormKey) {
      const subject = encodeURIComponent(`Website enquiry from ${trimmedEmail}`);
      const body = encodeURIComponent(trimmedMessage);
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      setStatus("handoff");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: siteConfig.contactFormKey,
          subject: `New message via ${siteConfig.name}'s site`,
          from_name: trimmedEmail,
          replyto: trimmedEmail,
          email: trimmedEmail,
          message: trimmedMessage,
          botcheck: false,
        }),
      });
      const data: { success?: boolean } = await res.json();
      if (res.ok && data.success) {
        setStatus("sent");
      } else {
        throw new Error("submission rejected");
      }
    } catch {
      setStatus("error");
      setError("That didn't go through. Try again, or reach me on the email above.");
    }
  }

  if (status === "sent" || status === "handoff") {
    const handoff = status === "handoff";
    return (
      <div className={`${cardClass} flex flex-col items-start gap-4`}>
        <span className="grid h-11 w-11 place-items-center rounded-full bg-accent-soft text-accent">
          <CheckIcon size={20} />
        </span>
        <div className="flex flex-col gap-1.5">
          <p className="font-display text-lg text-ink">
            {handoff ? "Your mail app is ready" : "Message sent"}
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            {handoff
              ? "I've opened your email app with everything filled in — just hit send and it's on its way."
              : "Thanks for reaching out. I read every message and usually reply within a day or two."}
          </p>
        </div>
        <button
          type="button"
          onClick={reset}
          className="link-underline font-mono text-xs uppercase tracking-[0.18em] text-muted"
        >
          Send another
        </button>
      </div>
    );
  }

  const describedBy = error ? errorId : undefined;

  return (
    <form onSubmit={handleSubmit} noValidate className={`${cardClass} flex flex-col gap-5`}>
      {/* Honeypot: kept out of the tab order and off-screen; only bots fill it in. */}
      <div
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor={honeypotId}>Company</label>
        <input
          ref={honeypotRef}
          id={honeypotId}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor={emailId}
          className="font-mono text-xs uppercase tracking-[0.18em] text-muted"
        >
          Your email
        </label>
        <input
          id={emailId}
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby={describedBy}
          placeholder="you@company.com"
          className="w-full rounded-lg border border-line bg-bg px-4 py-3 text-ink transition-colors placeholder:text-faint hover:border-line-strong focus:border-accent"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor={messageId}
          className="font-mono text-xs uppercase tracking-[0.18em] text-muted"
        >
          Message
        </label>
        <textarea
          id={messageId}
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-describedby={describedBy}
          placeholder="What are you working on?"
          className="w-full resize-y rounded-lg border border-line bg-bg px-4 py-3 text-ink transition-colors placeholder:text-faint hover:border-line-strong focus:border-accent"
        />
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <button
          type="submit"
          disabled={isSending}
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast transition-transform duration-200 hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-70"
        >
          {isSending ? (
            <>
              <SpinnerIcon size={16} className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <ArrowUpRightIcon
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </>
          )}
        </button>

        <p id={errorId} aria-live="polite" className="font-mono text-xs text-accent empty:hidden">
          {error}
        </p>
      </div>
    </form>
  );
}
