"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { MouseEvent } from "react";
import type { Project } from "@/content/projects";
import type { RepoMeta } from "@/lib/github";
import { Magnetic } from "@/components/ui/Magnetic";

export function ProjectCard({ p, meta, index }: { p: Project; meta?: RepoMeta; index: number }) {
  // 3D tilt
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [5, -5]), { stiffness: 150, damping: 20 });
  const ry = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 150, damping: 20 });
  const leakX = useTransform(mx, [0, 1], ["0%", "100%"]);
  const leakY = useTransform(my, [0, 1], ["0%", "100%"]);
  const leakColor = {
    tangerine: "rgba(255,106,31,.18)",
    cyan: "rgba(46,230,255,.14)",
    magenta: "rgba(255,62,207,.14)",
    lime: "rgba(184,255,59,.12)",
    violet: "rgba(139,92,255,.16)",
  }[p.tone];
  const leak = useTransform(
    [leakX, leakY],
    ([x, y]) => `radial-gradient(600px 400px at ${x} ${y}, ${leakColor}, transparent 60%)`,
  );

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.article
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1400 }}
      className={`glass group relative overflow-hidden p-7 md:p-10 min-h-[60vh] flex flex-col accent-${p.tone}`}
      data-solid
    >
      {/* light leak follows cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: leak }}
      />

      {/* accent light bar along the top edge */}
      <span className="absolute inset-x-0 top-0 h-px bg-accent opacity-70 glow-accent" aria-hidden />
      <header className="flex items-start justify-between gap-6">
        <div>
          <p className="eyebrow"><span className="text-accent">{String(index + 1).padStart(2, "0")}</span> — {p.eyebrow}</p>
          <h3 className="display mt-4 text-[clamp(2rem,5.5vw,4.6rem)]">{p.title}<span className="text-accent">.</span></h3>
        </div>
        <div className="mono text-[10px] uppercase tracking-[0.18em] text-dim text-right shrink-0 leading-5">
          <div>{p.year}</div>
          {meta?.language && <div>{meta.language}</div>}
          {meta && meta.stars > 0 && <div>★ {meta.stars}</div>}
          {meta?.pushedAt && <div className="text-faint">pushed {meta.pushedAt}</div>}
        </div>
      </header>

      <p className="mt-8 max-w-2xl text-[clamp(1.05rem,1.6vw,1.3rem)] leading-relaxed text-dim">{p.blurb}</p>

      {p.finding && (
        <pre className="mono mt-8 max-w-xl whitespace-pre-wrap rounded-[var(--radius-sm)] border border-rim/10 bg-ink/60 p-4 text-[12px] leading-relaxed text-text/85">
          <span className="text-accent">$ </span>
          {p.finding}
        </pre>
      )}

      <footer className="mt-auto pt-10 flex flex-wrap items-end justify-between gap-6">
        <ul className="flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <li key={s} className="mono text-[10px] uppercase tracking-[0.16em] rounded-full border border-rim/15 px-3 py-1 text-dim">
              {s}
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          {p.links.map((l, i) => (
            <Magnetic key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className={`beam mono text-[11px] uppercase tracking-[0.16em] rounded-full px-4 py-2 transition-colors ${
                  i === 0
                    ? "bg-accent text-ink hover:brightness-110"
                    : "border border-rim/20 text-text hover:border-accent hover:text-accent"
                }`}
              >
                {l.label} ↗
              </a>
            </Magnetic>
          ))}
        </div>
      </footer>
    </motion.article>
  );
}
