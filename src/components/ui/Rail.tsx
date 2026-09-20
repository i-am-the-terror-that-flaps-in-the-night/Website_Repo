"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { sections } from "./Nav";

/** Right-edge progress rail with section dots + the active label. */
export function Rail() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [active, setActive] = useState("");

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="no-print fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3">
      <div className="relative h-40 w-px bg-rim/10 overflow-hidden rounded-full">
        <motion.div
          className="absolute left-0 top-0 w-full bg-tangerine origin-top"
          style={{ scaleY: progress, height: "100%" }}
        />
      </div>
      <div className="flex flex-col gap-2 mt-1">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-label={s.label}
            className="group relative flex items-center justify-end h-3"
          >
            <span className="mono absolute right-5 text-[10px] uppercase tracking-[0.18em] text-dim opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {s.label}
            </span>
            <span
              className={`h-1.5 w-1.5 rounded-full transition-all ${
                active === s.id ? "bg-tangerine shadow-[0_0_10px_var(--tangerine)] scale-125" : "bg-rim/25"
              }`}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
