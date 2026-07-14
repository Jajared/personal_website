export interface ContributionDay {
  date: string;
  count: number;
  /** GitHub intensity bucket, 0 (none) through 4 (most). */
  level: number;
}

export interface ContributionYear {
  total: number;
  days: ContributionDay[];
}

interface ApiResponse {
  total: { lastYear: number };
  contributions: { date: string; count: number; level: number }[];
}

const ENDPOINT = "https://github-contributions-api.jogruber.de/v4";

let cache: ContributionYear | null = null;

/**
 * Fetches a user's public GitHub contribution calendar for the trailing year.
 * Uses a keyless, CORS-enabled community API (no token needed) and memoises the
 * result so re-running the command in a session doesn't re-hit the network.
 */
export async function fetchContributions(username: string): Promise<ContributionYear> {
  if (cache) return cache;

  const res = await fetch(`${ENDPOINT}/${encodeURIComponent(username)}?y=last`);
  if (!res.ok) {
    throw new Error(`GitHub API responded with ${res.status}`);
  }

  const data = (await res.json()) as ApiResponse;
  const days = data.contributions.map((day) => ({
    date: day.date,
    count: day.count,
    level: Math.max(0, Math.min(4, day.level)),
  }));

  cache = { total: data.total.lastYear, days };
  return cache;
}
