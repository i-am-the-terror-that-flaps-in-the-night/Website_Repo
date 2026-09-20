"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { profile } from "@/content/profile";
import { HeroType } from "./HeroType";

const Slab = dynamic(() => import("./Slab").then((m) => m.Slab), { ssr: false });

/**
 * Hero pins for ~1.3 viewports. As you scroll, the type scales down and drifts
 * up toward the nav position while the 3D object recedes — the "handoff" to About.
 */
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.62]);
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-26vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, 0]);
  const slabY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const slabOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const blur = useTransform(scrollYProgress, [0.5, 1], ["blur(0px)", "blur(12px)"]);

  return (
    <section id="top" ref={ref} className="relative h-[160vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={reduce ? undefined : { y: slabY, opacity: slabOpacity }} className="absolute inset-0">
          <Slab />
        </motion.div>

        {/* HUD readouts */}
        <motion.div
          className="absolute top-8 inset-x-0 wrap flex items-start justify-between mono text-[10px] uppercase tracking-[0.2em] text-faint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <div className="hud px-3 py-2 leading-5">
            <div className="rgb-bar mb-2 w-24" />
            <div><span className="text-tangerine">sys</span> anodized v1.0</div>
            <div><span className="text-tangerine">env</span> next 16 · react 19 · r3f</div>
            <div><span className="text-tangerine">gpu</span> apple m4 · 8c</div>
          </div>
          <div className="hud px-3 py-2 leading-5 text-right hidden sm:block">
            <div>29.42° N · 98.49° W</div>
            <div>rev A · 2026</div>
            <div><span className="text-magenta">◉</span> rec · <span className="text-cyan">rgb</span> on</div>
          </div>
        </motion.div>

        <div className="wrap relative h-full flex flex-col justify-end pb-[12vh]">
          <motion.div
            style={reduce ? undefined : { scale, y, opacity, filter: blur, transformOrigin: "left bottom" }}
          >
            <HeroType />
          </motion.div>
        </div>

        {/* status line */}
        <motion.div
          className="absolute left-0 right-0 bottom-6 wrap flex items-center justify-between mono text-[11px] uppercase tracking-[0.18em] text-dim"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="flex items-center gap-3">
            <span className="pulse-dot" /> {profile.status} · {profile.location} · 2026
          </span>
          <span className="hidden sm:flex items-center gap-3">
            scroll
            <span className="mouse" aria-hidden>
              <span className="mouse-wheel" />
            </span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
