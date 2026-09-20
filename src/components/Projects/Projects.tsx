import { moreRepos, projects } from "@/content/projects";
import { getRepoMeta, type RepoMeta } from "@/lib/github";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectDeck } from "./ProjectDeck";
import { Watermark } from "@/components/ui/Watermark";

export async function Projects() {
  const repos = projects.map((p) => p.repo).filter(Boolean) as string[];
  const metas: Record<string, RepoMeta | undefined> = {};
  await Promise.all(repos.map(async (r) => (metas[r] = await getRepoMeta(r))));

  return (
    <section id="projects" className="section overflow-hidden accent-cyan">
      <Watermark n="02" />
      <div className="wrap">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <p className="eyebrow">02 — projects</p>
              <h2 className="display mt-4 text-[clamp(3rem,9vw,8.5rem)] uppercase">
                Shipped<span className="text-tangerine">.</span>
              </h2>
            </div>
            <dl className="hud grid grid-cols-3 gap-6 px-5 py-4 mono text-[10px] uppercase tracking-[0.18em] text-faint">
              <div><dt>featured</dt><dd className="display text-3xl text-cyan mt-1 tracking-tight">{projects.length}</dd></div>
              <div><dt>live</dt><dd className="display text-3xl text-magenta mt-1 tracking-tight">{projects.filter((p) => p.links.some((l) => !l.href.includes("github.com"))).length}</dd></div>
              <div><dt>stars</dt><dd className="display text-3xl text-tangerine mt-1 tracking-tight">{Object.values(metas).reduce((a, m) => a + (m?.stars ?? 0), 0)}</dd></div>
            </dl>
          </div>
        </Reveal>
        <div className="mt-14">
          <ProjectDeck projects={projects} metas={metas} />
        </div>

        <Reveal className="mt-8">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mono text-[11px] uppercase tracking-[0.16em] text-dim">
            <span className="text-faint">more on github —</span>
            {moreRepos.map((r) => (
              <a key={r.name} href={r.href} target="_blank" rel="noreferrer" className="link-slide hover:text-text">
                {r.name} <span className="text-faint normal-case tracking-normal">· {r.note}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
