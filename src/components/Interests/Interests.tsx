import { Reveal } from "@/components/ui/Reveal";
import { BandChart } from "./BandChart";
import { Watermark } from "@/components/ui/Watermark";
import { interests } from "@/content/interests";

export function Interests() {
  return (
    <section id="signal" className="section overflow-hidden accent-violet">
      <Watermark n="03" />
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">03 — languages over time</p>
          <h2 className="display mt-4 text-[clamp(3rem,9vw,8.5rem)] uppercase">
            Obsessions<span className="text-tangerine">.</span>
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_18rem] items-start">
          <Reveal delay={0.05}>
            <p className="max-w-xl text-dim text-lg">
              Which languages I picked up, and when. None have been put down{" "}
              <span className="serif-italic text-text text-[1.15em]">yet</span>.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="hud px-4 py-3 mono text-[10px] uppercase tracking-[0.18em] text-faint grid grid-cols-2 gap-x-4 gap-y-2">
              <span>tracked</span><span className="text-text text-right">{interests.length}</span>
              <span>ongoing</span><span className="text-tangerine text-right">{interests.filter((i) => !i.end).length}</span>
              <span>retired</span><span className="text-text text-right">{interests.filter((i) => i.end).length}</span>
              <span>window</span><span className="text-text text-right">jan ’25 → now</span>
              <span className="col-span-2 mt-1 flex items-center gap-2"><span className="h-1.5 w-4 rounded-full" style={{ background: "var(--rgb)" }} /> ongoing · one hue each</span>
              <span className="col-span-2 flex items-center gap-2"><span className="h-1.5 w-4 rounded-full bg-rim/30" /> ended</span>
            </div>
          </Reveal>
        </div>
        <BandChart />
        <Reveal delay={0.2}>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map((it) => (
              <li key={it.name} className={`beam underglow brushed chamfer px-4 py-3 flex items-baseline justify-between gap-4 accent-${it.hue}`}>
                <span className="serif-italic text-xl text-accent">{it.name}</span>
                <span className="mono text-[10px] text-faint text-right">{it.note}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
