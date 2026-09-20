import { machines } from "@/content/hardware";
import { Reveal } from "@/components/ui/Reveal";

/** Small "runs on" strip — the hardware is a footnote, not a feature. */
export function Desk() {
  return (
    <div className="wrap pb-12">
      <Reveal>
        <p className="rule mono text-[10px] uppercase tracking-[0.2em]">runs on</p>
      </Reveal>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {machines.map((m, i) => {
          const incoming = m.status === "incoming";
          return (
            <Reveal key={m.id} delay={i * 0.08}>
              <div className={`beam underglow brushed chamfer relative px-5 py-4 ${incoming ? "accent-cyan" : "accent-tangerine"}`}>
                <span className="absolute left-0 top-0 h-full w-px bg-accent glow-accent" aria-hidden />
                <div className="flex items-baseline justify-between gap-4">
                  <span className="display text-xl">{m.name}</span>
                  <span className="mono text-[10px] uppercase tracking-[0.18em] text-accent">{m.status}</span>
                </div>
                <p className="mono mt-2 text-[11px] text-dim">
                  {m.specs.map((s) => s.value).join(" · ")}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
