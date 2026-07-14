import type { ReactNode } from "react";
import { ContributionHeatmap } from "@/components/ui/ContributionHeatmap";
import { experienceData } from "@/data/experienceData";
import { projectData } from "@/data/projectData";
import { skillsData } from "@/data/skillsData";
import { fetchContributions } from "@/lib/github";
import { siteConfig, socialLinks } from "@/lib/siteConfig";
import { SkillTypes } from "@/lib/types";

export interface CommandContext {
  /** Tokens typed after the command name. */
  args: string[];
  /** Append a line of output to the terminal. */
  print: (node: ReactNode) => void;
  /** Wipe the screen. */
  clear: () => void;
  /** Present only in dev mode — switches the hero back to the overview. */
  exit?: () => void;
}

export interface Command {
  /** Aliases; the first is the canonical name shown in `help`. */
  names: string[];
  summary: string;
  /** Hidden commands work but don't show up in `help`. */
  hidden?: boolean;
  run: (ctx: CommandContext) => void | Promise<void>;
}

const githubUrl = socialLinks.find((s) => s.key === "github")?.href ?? "https://github.com";
const githubUsername = githubUrl.replace(/\/+$/, "").split("/").pop() ?? "Jajared";

// A geometric "JW" monogram for neofetch. String.raw keeps the backslashes intact.
const LOGO = String.raw`     _        __        __
    | |       \ \      / /
 _  | |        \ \ /\ / /
| |_| |         \ V  V /
 \___/           \_/\_/`;

function OutLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="link-underline text-accent">
      {children}
    </a>
  );
}

export const commands: Command[] = [
  {
    names: ["help"],
    summary: "List everything you can do here",
    run: ({ print }) => {
      print(
        <div className="flex flex-col gap-2">
          <p className="text-muted">Available commands:</p>
          <ul className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
            {commands
              .filter((command) => !command.hidden)
              .map((command) => (
                <li key={command.names[0]} className="flex gap-3">
                  <span className="w-24 shrink-0 text-accent">{command.names[0]}</span>
                  <span className="text-muted">{command.summary}</span>
                </li>
              ))}
          </ul>
          <p className="text-faint">Tip: ↑/↓ recall history · Tab or → accepts the suggestion.</p>
        </div>,
      );
    },
  },
  {
    names: ["about", "whoami"],
    summary: "A one-paragraph introduction",
    run: ({ print }) => {
      print(
        <div className="flex flex-col gap-2 text-muted">
          <p>
            <span className="text-ink">{siteConfig.name}</span> — {siteConfig.role} based in{" "}
            {siteConfig.location}.
          </p>
          <p>
            Final-year Computer Science student at NUS. I build web + AI products end to end: the
            data model, the API, and the last pixel of the interface. Currently a Software Engineer
            at Fortifai.
          </p>
        </div>,
      );
    },
  },
  {
    names: ["skills"],
    summary: "Tech I work with (try: skills backend)",
    run: ({ print, args }) => {
      const query = args[0]?.toLowerCase().replace("/", "");
      const categories = SkillTypes.filter(
        (type) => !query || type.toLowerCase().replace("/", "").startsWith(query),
      );
      if (categories.length === 0) {
        print(
          <p className="text-muted">
            No category "{args[0]}". Try one of: {SkillTypes.join(", ")}.
          </p>,
        );
        return;
      }
      print(
        <div className="flex flex-col gap-2">
          {categories.map((type) => (
            <div key={type} className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
              <span className="w-24 shrink-0 text-accent">{type}</span>
              <span className="text-muted">
                {skillsData
                  .filter((skill) => skill.type === type)
                  .map((skill) => skill.name)
                  .join(" · ")}
              </span>
            </div>
          ))}
        </div>,
      );
    },
  },
  {
    names: ["experience", "work"],
    summary: "Where I've worked",
    run: ({ print }) => {
      print(
        <div className="flex flex-col gap-3">
          {experienceData.map((job) => (
            <div key={`${job.company}-${job.startDate}`} className="flex flex-col">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <span className="text-ink">
                  {job.role} · <span className="text-accent">{job.company}</span>
                </span>
                <span className="text-xs text-faint">
                  {job.startDate} — {job.endDate}
                </span>
              </div>
              <span className="text-muted">{job.description}</span>
            </div>
          ))}
        </div>,
      );
    },
  },
  {
    names: ["projects"],
    summary: "A few things I've built",
    run: ({ print }) => {
      print(
        <div className="flex flex-col gap-3">
          {projectData.map((project) => (
            <div key={project.title} className="flex flex-col">
              <span className="text-ink">
                {project.title} <span className="text-xs text-faint">({project.year})</span>
              </span>
              <span className="text-muted">{project.description.split("\n")[0]}</span>
              {project.projectLink && (
                <OutLink href={project.projectLink}>
                  {project.projectLink.replace(/^https?:\/\//, "")}
                </OutLink>
              )}
            </div>
          ))}
        </div>,
      );
    },
  },
  {
    names: ["gh", "github"],
    summary: "My GitHub contribution graph (live)",
    run: async ({ print }) => {
      print(<p className="text-muted">Fetching contributions for @{githubUsername}…</p>);
      try {
        const data = await fetchContributions(githubUsername);
        print(<ContributionHeatmap data={data} username={githubUsername} profileUrl={githubUrl} />);
      } catch {
        print(
          <p className="text-muted">
            Couldn't reach the GitHub API right now — see the graph on{" "}
            <OutLink href={githubUrl}>github.com/{githubUsername}</OutLink> instead.
          </p>,
        );
      }
    },
  },
  {
    names: ["contact", "social"],
    summary: "How to reach me",
    run: ({ print }) => {
      print(
        <ul className="flex flex-col gap-1">
          {socialLinks.map((social) => (
            <li key={social.key} className="flex gap-3">
              <span className="w-24 shrink-0 text-accent">{social.label}</span>
              <OutLink href={social.href}>
                {social.href.replace(/^mailto:/, "").replace(/^https?:\/\//, "")}
              </OutLink>
            </li>
          ))}
        </ul>,
      );
    },
  },
  {
    names: ["resume", "cv"],
    summary: "Open my résumé (PDF)",
    run: ({ print }) => {
      window.open(siteConfig.resume, "_blank", "noopener,noreferrer");
      print(<p className="text-muted">Opening résumé in a new tab…</p>);
    },
  },
  {
    names: ["neofetch"],
    summary: "System info, portfolio edition",
    run: ({ print }) => {
      const info: [string, string][] = [
        ["OS", "Web · React 19 + Vite"],
        ["Host", "jared.sh"],
        ["Role", siteConfig.role],
        ["Location", siteConfig.location],
        ["Focus", "TypeScript · Python · LLMs"],
        ["Uptime", "shipping since 2021"],
      ];
      print(
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <pre className="text-[10px] leading-tight text-accent sm:text-xs" aria-hidden="true">
            {LOGO}
          </pre>
          <div className="flex flex-col gap-0.5">
            <p>
              <span className="text-accent">jared</span>
              <span className="text-muted">@</span>
              <span className="text-accent">portfolio</span>
            </p>
            <p className="text-faint">—————————————</p>
            {info.map(([key, value]) => (
              <p key={key}>
                <span className="text-accent">{key}</span>
                <span className="text-muted">: {value}</span>
              </p>
            ))}
          </div>
        </div>,
      );
    },
  },
  {
    names: ["echo"],
    summary: "Print text back",
    run: ({ print, args }) => {
      print(<p className="text-muted">{args.join(" ")}</p>);
    },
  },
  {
    names: ["date"],
    summary: "Current date & time (SGT)",
    run: ({ print }) => {
      print(
        <p className="text-muted">
          {new Date().toLocaleString("en-SG", {
            timeZone: siteConfig.timezone,
            dateStyle: "full",
            timeStyle: "short",
          })}
        </p>,
      );
    },
  },
  {
    names: ["clear", "cls"],
    summary: "Clear the screen",
    run: ({ clear }) => clear(),
  },
  {
    names: ["exit", "portfolio"],
    summary: "Back to the overview",
    run: ({ print, exit }) => {
      if (!exit) {
        print(<p className="text-muted">Already in the overview.</p>);
        return;
      }
      print(<p className="text-muted">Leaving dev mode…</p>);
      exit();
    },
  },
  {
    names: ["sudo"],
    summary: "",
    hidden: true,
    run: ({ print }) => {
      print(
        <p className="text-muted">
          <span className="text-accent">[sudo]</span> nice try — this incident will be reported. 🚨
        </p>,
      );
    },
  },
];

export const commandNames = commands.filter((command) => !command.hidden).map((c) => c.names[0]);

export function findCommand(name: string): Command | undefined {
  return commands.find((command) => command.names.includes(name));
}

// ── Inline suggestions ──────────────────────────────────────────────────────
// Powers the fish-style ghost text in the console. It isn't real AI — just a
// ranked prefix search over known commands, your recent history, and a few
// handy argument completions — but it reads like the terminal is anticipating
// what you're about to type.

/** A few argument completions so hints feel like intent, not just word-complete. */
const argumentSuggestions: string[] = [
  ...SkillTypes.map((type) => `skills ${type.toLowerCase()}`),
  "echo hello world",
];

/** Static pool, ordered by declaration (roughly "most useful first"). */
const suggestionCorpus: string[] = [...commandNames, ...argumentSuggestions];

/**
 * Best full-line completion for `input`, or `null`. The result always starts
 * with `input` (case-insensitively) and is strictly longer, so the caller can
 * render `result.slice(input.length)` as inline ghost text. Recently-run
 * commands rank first, which makes the hints feel personalised.
 */
export function suggestCommand(input: string, history: readonly string[] = []): string | null {
  const needle = input.toLowerCase();
  if (!needle || /^\s/.test(input)) return null;

  const pool: string[] = [];
  const seen = new Set<string>();
  const push = (entry: string) => {
    if (entry && !seen.has(entry)) {
      seen.add(entry);
      pool.push(entry);
    }
  };

  // Most-recent, real (non-typo) history entries first…
  for (let i = history.length - 1; i >= 0; i--) {
    const entry = history[i].trim();
    const name = entry.split(/\s+/)[0]?.toLowerCase() ?? "";
    if (findCommand(name)) push(entry);
  }
  // …then the static corpus, in priority order.
  for (const entry of suggestionCorpus) push(entry);

  return (
    pool.find(
      (candidate) => candidate.length > input.length && candidate.toLowerCase().startsWith(needle),
    ) ?? null
  );
}
