import { useMemo } from "react";
import type { ContributionYear } from "@/lib/github";

const CELL = 11;
const GAP = 3;
const DAY_LABEL_WIDTH = 26;

/** Empty → most: a single-hue sequential scale built from the site accent. */
const LEVEL_BG: Record<number, string> = {
  0: "var(--line)",
  1: "color-mix(in oklab, var(--accent) 26%, transparent)",
  2: "color-mix(in oklab, var(--accent) 50%, transparent)",
  3: "color-mix(in oklab, var(--accent) 74%, transparent)",
  4: "var(--accent)",
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Sun–Sat rows; only alternate weekdays are labelled, GitHub-style.
const DAY_ROWS = [
  { key: "sun", label: "" },
  { key: "mon", label: "Mon" },
  { key: "tue", label: "" },
  { key: "wed", label: "Wed" },
  { key: "thu", label: "" },
  { key: "fri", label: "Fri" },
  { key: "sat", label: "" },
];

interface Cell {
  date: string;
  count: number;
  level: number;
  pad: boolean;
}

interface WeekColumn {
  id: string;
  cells: Cell[];
}

function toDate(iso: string): Date {
  return new Date(`${iso}T00:00:00`);
}

function formatDate(iso: string): string {
  return toDate(iso).toLocaleDateString("en-SG", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function ContributionHeatmap({
  data,
  username,
  profileUrl,
}: {
  data: ContributionYear;
  username: string;
  profileUrl: string;
}) {
  const weeks = useMemo<WeekColumn[]>(() => {
    const { days } = data;
    const result: WeekColumn[] = [];
    if (days.length === 0) return result;

    let padId = 0;
    let cells: Cell[] = [];
    const leading = toDate(days[0].date).getDay();
    for (let i = 0; i < leading; i++) {
      cells.push({ date: `pad-a-${padId++}`, count: 0, level: 0, pad: true });
    }
    for (const day of days) {
      cells.push({ date: day.date, count: day.count, level: day.level, pad: false });
      if (cells.length === 7) {
        result.push({ id: cells[0].date, cells });
        cells = [];
      }
    }
    if (cells.length > 0) {
      while (cells.length < 7) {
        cells.push({ date: `pad-b-${padId++}`, count: 0, level: 0, pad: true });
      }
      result.push({ id: cells[0].date, cells });
    }
    return result;
  }, [data]);

  // One month label per column, shown the first week a new month begins.
  const labelById = useMemo(() => {
    const map = new Map<string, string>();
    let prev = -1;
    for (const week of weeks) {
      const real = week.cells.find((cell) => !cell.pad);
      if (!real) {
        map.set(week.id, "");
        continue;
      }
      const month = toDate(real.date).getMonth();
      map.set(week.id, month === prev ? "" : MONTHS[month]);
      prev = month;
    }
    return map;
  }, [weeks]);

  return (
    <div className="flex flex-col gap-3">
      <div className="overflow-x-auto pb-1">
        <div className="inline-flex flex-col gap-1">
          <div
            className="flex text-[10px] leading-none text-faint"
            style={{ paddingLeft: DAY_LABEL_WIDTH, gap: GAP }}
          >
            {weeks.map((week) => (
              <div
                key={week.id}
                className="shrink-0 overflow-visible whitespace-nowrap"
                style={{ width: CELL }}
              >
                {labelById.get(week.id)}
              </div>
            ))}
          </div>

          <div className="flex" style={{ gap: GAP }}>
            <div
              className="grid text-[10px] leading-none text-faint"
              style={{
                width: DAY_LABEL_WIDTH - GAP,
                gridTemplateRows: `repeat(7, ${CELL}px)`,
                gap: GAP,
              }}
            >
              {DAY_ROWS.map((row) => (
                <div key={row.key} className="flex items-center">
                  {row.label}
                </div>
              ))}
            </div>

            {weeks.map((week) => (
              <div
                key={week.id}
                className="grid"
                style={{ gridTemplateRows: `repeat(7, ${CELL}px)`, gap: GAP }}
              >
                {week.cells.map((cell) =>
                  cell.pad ? (
                    <div key={cell.date} style={{ width: CELL, height: CELL }} />
                  ) : (
                    <div
                      key={cell.date}
                      title={`${cell.count} contribution${cell.count === 1 ? "" : "s"} on ${formatDate(cell.date)}`}
                      className="rounded-[2px]"
                      style={{ width: CELL, height: CELL, backgroundColor: LEVEL_BG[cell.level] }}
                    />
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <a
          href={profileUrl}
          target="_blank"
          rel="noreferrer"
          className="link-underline text-xs text-muted hover:text-ink"
        >
          {data.total.toLocaleString()} contributions in the last year — @{username}
        </a>
        <div className="flex items-center gap-1.5 text-[10px] text-faint">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <span
              key={level}
              className="inline-block rounded-[2px]"
              style={{ width: CELL, height: CELL, backgroundColor: LEVEL_BG[level] }}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
