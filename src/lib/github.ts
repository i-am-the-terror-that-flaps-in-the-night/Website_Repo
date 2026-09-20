export type RepoMeta = {
  stars: number;
  language: string | null;
  pushedAt: string | null;
};

const fallback: Record<string, RepoMeta> = {
  "i-am-the-terror-that-flaps-in-the-night/stats_stuff": { stars: 1, language: "Python", pushedAt: "2026-09-20" },
  "i-am-the-terror-that-flaps-in-the-night/game": { stars: 0, language: "JavaScript", pushedAt: "2026-08-03" },
  "i-am-the-terror-that-flaps-in-the-night/aim_trainer": { stars: 0, language: "TypeScript", pushedAt: "2026-06-14" },
};

export async function getRepoMeta(repo: string): Promise<RepoMeta> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) throw new Error(String(res.status));
    const j = await res.json();
    return {
      stars: j.stargazers_count ?? 0,
      language: j.language ?? null,
      pushedAt: j.pushed_at ? String(j.pushed_at).slice(0, 10) : null,
    };
  } catch {
    return fallback[repo] ?? { stars: 0, language: null, pushedAt: null };
  }
}
