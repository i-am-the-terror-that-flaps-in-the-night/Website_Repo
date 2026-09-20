"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { profile } from "@/content/profile";
import { Magnetic } from "./Magnetic";

export const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "signal", label: "Languages" },
  { id: "stack", label: "Stack" },
  { id: "timeline", label: "Timeline" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [shown, setShown] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setShown(v > window.innerHeight * 0.6));

  return (
    <motion.header
      className="no-print fixed top-0 inset-x-0 z-50 pointer-events-none"
      initial={false}
      animate={{ y: shown ? 0 : -80, opacity: shown ? 1 : 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="wrap mt-3">
        <div className="glass pointer-events-auto flex items-center justify-between px-4 py-2.5 !rounded-full relative overflow-hidden">
          <span className="rgb-bar absolute inset-x-6 bottom-0 opacity-70" aria-hidden />
          <a href="#top" className="flex items-center gap-3">
            <span className="pulse-dot" />
            <span className="display text-[15px] tracking-tight">{profile.name}</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="link-slide mono text-[11px] uppercase tracking-[0.16em] text-dim hover:text-text transition-colors">
                {s.label}
              </a>
            ))}
          </nav>
          <Magnetic>
            <a
              href={`mailto:${profile.email}`}
              className="mono text-[11px] uppercase tracking-[0.16em] rounded-full border border-tangerine/40 px-3 py-1.5 text-tangerine hover:bg-tangerine hover:text-ink transition-colors"
            >
              say hi
            </a>
          </Magnetic>
        </div>
      </div>
    </motion.header>
  );
}
