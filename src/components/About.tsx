import { profile } from "@/content/profile";
import { Reveal, Words } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { Watermark } from "@/components/ui/Watermark";
import { Marquee } from "@/components/ui/Marquee";
import { interests } from "@/content/interests";
import { machines } from "@/content/hardware";

export function About() {
  return (
    <section id="about" className="section !pb-0 overflow-hidden accent-tangerine">
      <Watermark n="01" />
      <div className="wrap grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 items-start">
        <div>
          <Reveal>
            <p className="eyebrow">01 — about</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Words
              text={profile.bio}
              className="mt-6 text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.18] tracking-[-0.02em] text-text"
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { n: 4, s: "", l: "shipped projects", c: "text-tangerine" },
              { n: 3, s: "", l: "live deployments", c: "text-cyan" },
              { n: interests.length, s: "", l: "languages, active", c: "text-magenta" },
            ].map((c, i) => (
              <Reveal key={c.l} delay={0.15 + i * 0.08}>
                <div>
                  <div className={`display text-[clamp(2.4rem,5vw,4rem)] ${c.c}`}>
                    <Counter to={c.n} suffix={c.s} />
                  </div>
                  <div className="mono text-[10px] uppercase tracking-[0.18em] text-dim mt-1">{c.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* spec plates */}
        <div className="flex flex-col gap-3 lg:pt-10">
          {profile.plates.map((p, i) => (
            <Reveal key={p.label} delay={0.2 + i * 0.1} y={40}>
              <div className={`brushed chamfer underglow relative px-5 py-4 flex items-baseline gap-5 border-t border-rim/10 ${["accent-tangerine", "accent-cyan", "accent-magenta"][i]}`}>
                <span className="mono text-[10px] tracking-[0.22em] text-accent w-14 shrink-0">{p.label}</span>
                <span className="mono text-sm text-text">{p.value}</span>
                <span className="absolute right-3 top-2 mono text-[9px] text-faint">0{i + 1}</span>
              </div>
            </Reveal>
          ))}

          {/* live readouts */}
          <Reveal delay={0.5} y={40}>
            <div className="glass mt-3 p-5">
              <p className="rule mono text-[10px] uppercase tracking-[0.2em]">live</p>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 mono text-[11px]">
                <li className="flex justify-between border-b border-rim/[0.07] pb-2">
                  <span className="text-faint">obsessions</span>
                  <span className="text-text">{interests.filter((i) => !i.end).length} active</span>
                </li>
                <li className="flex justify-between border-b border-rim/[0.07] pb-2">
                  <span className="text-faint">machine</span>
                  <span className="text-text">{machines[0].name}</span>
                </li>
                <li className="flex justify-between border-b border-rim/[0.07] pb-2">
                  <span className="text-faint">first</span>
                  <span className="text-text">python</span>
                </li>
                <li className="flex justify-between border-b border-rim/[0.07] pb-2">
                  <span className="text-faint">editor</span>
                  <span className="text-text">TODO</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-faint">languages</span>
                  <span className="text-text">{interests.length}, all active</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-faint">status</span>
                  <span className="text-tangerine">● {profile.status}</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-16">
        <Marquee
          items={[
            "python", "typescript", "react 19", "next.js", "fastapi", "lightgbm", "css", "three.js",
            "aws", "render", "cloudflare", "javascript", "html / css", "swift", "c#", "c++",
          ]}
        />
      </div>
    </section>
  );
}
