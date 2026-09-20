"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { interests, timelineStart } from "@/content/interests";

const NOW = "2026-09";
const toIdx = (ym: string) => {
  const [y, m] = ym.split("-").map(Number);
  return y * 12 + (m - 1);
};
const start = toIdx(timelineStart);
const end = toIdx(NOW);
const span = end - start;
const fmt = (ym: string) => {
  const [y, m] = ym.split("-").map(Number);
  return new Date(y, m - 1, 1).toLocaleString("en", { month: "short", year: "2-digit" }).replace(" ", " ’");
};

// month ticks (every 3 months)
const ticks: string[] = [];
for (let i = start; i <= end; i += 3) {
  ticks.push(`${Math.floor(i / 12)}-${String((i % 12) + 1).padStart(2, "0")}`);
}

const HUE: Record<string, string> = {
  tangerine: "255,106,31",
  cyan: "46,230,255",
  magenta: "255,62,207",
  lime: "184,255,59",
  violet: "139,92,255",
};

export function BandChart() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="relative mt-14">
      {/* ticks */}
      <div className="hidden md:grid mono text-[10px] uppercase tracking-[0.18em] text-faint mb-4 ml-[7.5rem]"
        style={{ gridTemplateColumns: `repeat(${ticks.length}, 1fr)` }}>
        {ticks.map((t) => (
          <span key={t}>{fmt(t)}</span>
        ))}
      </div>

      <ul className="flex flex-col gap-3">
        {interests.map((it, i) => {
          const s = (toIdx(it.start) - start) / span;
          const e = ((it.end ? toIdx(it.end) : end) - start) / span;
          const dim = hover !== null && hover !== i;
          return (
            <li
              key={it.name}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="grid md:grid-cols-[7.5rem_1fr] items-center gap-3 transition-opacity duration-300"
              style={{ opacity: dim ? 0.35 : 1 }}
            >
              <span className="serif-italic text-[clamp(1.4rem,2.4vw,2rem)] leading-none" style={{ color: `rgb(${HUE[it.hue]})` }}>{it.name}</span>
              <div className="relative h-9 rounded-full bg-rim/[0.04] border border-rim/[0.06] overflow-visible">
                <motion.div
                  className="absolute top-0 h-full rounded-full"
                  style={{
                    left: `${s * 100}%`,
                    width: `${(e - s) * 100}%`,
                    background: it.end
                      ? `linear-gradient(90deg, rgba(${HUE[it.hue]},.35), rgba(${HUE[it.hue]},.12))`
                      : `linear-gradient(90deg, rgba(${HUE[it.hue]},.25), rgba(${HUE[it.hue]},.75))`,
                    boxShadow: it.end ? undefined : `0 0 24px rgba(${HUE[it.hue]},.25)`,
                    transformOrigin: "left",
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ duration: 1.2, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  {!it.end && (
                    <span className="breathe absolute -right-1 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full" style={{ background: `rgb(${HUE[it.hue]})`, boxShadow: `0 0 12px rgb(${HUE[it.hue]})` }} />
                  )}
                  <span className={`mono absolute left-3 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.16em] whitespace-nowrap ${it.end ? "text-text/80" : "text-ink font-bold"}`}>
                    {fmt(it.start)} → {it.end ? fmt(it.end) : "now"}
                  </span>
                </motion.div>
                <motion.span
                  className="mono pointer-events-none absolute left-0 -top-7 text-[11px] text-dim whitespace-nowrap"
                  initial={false}
                  animate={{ opacity: hover === i ? 1 : 0, y: hover === i ? 0 : 4 }}
                  transition={{ duration: 0.25 }}
                  style={{ left: `${s * 100}%` }}
                >
                  {it.note}
                </motion.span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
