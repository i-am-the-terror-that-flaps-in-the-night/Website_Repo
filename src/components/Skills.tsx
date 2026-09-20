import { skills } from "@/content/skills";
import { Reveal } from "@/components/ui/Reveal";
import { Watermark } from "@/components/ui/Watermark";

export function Skills() {
  return (
    <section id="stack" className="section overflow-hidden accent-lime">
      <Watermark n="04" />
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">04 — spec sheet</p>
          <h2 className="display mt-4 text-[clamp(3rem,9vw,8.5rem)] uppercase">
            Stack<span className="text-tangerine">.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px bg-rim/[0.07] md:grid-cols-2 lg:grid-cols-4 rounded-[var(--radius)] overflow-hidden border border-rim/[0.07]">
          {skills.map((g, gi) => (
            <div key={g.group} className={`bg-ink/80 p-6 relative ${["accent-tangerine", "accent-cyan", "accent-magenta", "accent-lime"][gi]}`}>
              <span className="absolute inset-x-0 top-0 h-px bg-accent glow-accent opacity-80" aria-hidden />
              <Reveal delay={gi * 0.06}>
                <div className="flex items-baseline justify-between">
                  <span className="serif-italic text-2xl text-accent">{g.group}</span>
                  <span className="mono text-[10px] text-faint">0{gi + 1}</span>
                </div>
                <ul className="mt-6 flex flex-col">
                  {g.items.map((s) => (
                    <li
                      key={s.name}
                      className="group grid grid-cols-[1fr_auto] items-baseline gap-4 border-t border-rim/[0.07] py-3 transition-colors hover:bg-rim/[0.03]"
                    >
                      <span className="text-text group-hover:text-accent transition-colors">{s.name}</span>
                      <span className="mono text-[10px] text-faint text-right">{s.note}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
