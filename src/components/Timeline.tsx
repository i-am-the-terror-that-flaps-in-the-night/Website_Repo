"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { Watermark } from "@/components/ui/Watermark";

const kindLabel = { work: "work", edu: "education", project: "project" } as const;
const kindAccent = { work: "accent-tangerine", edu: "accent-cyan", project: "accent-magenta" } as const;

export function Timeline() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const h = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="timeline" className="section overflow-hidden accent-cyan">
      <Watermark n="05" />
      <div className="wrap">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">05 — timeline</p>
              <h2 className="display mt-4 text-[clamp(3rem,9vw,8.5rem)] uppercase">
                Path<span className="text-tangerine">.</span>
              </h2>
            </div>
            <Magnetic>
              <a
                href={profile.resumePdf}
                className="beam mono text-[11px] uppercase tracking-[0.16em] rounded-full border border-rim/20 px-5 py-3 hover:border-tangerine hover:text-tangerine transition-colors"
              >
                download résumé ↓
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <ol ref={ref} className="relative mt-16 pl-8 md:pl-0">
          {/* rail */}
          <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-px bg-rim/10">
            <motion.div className="absolute top-0 w-full origin-top" style={{ scaleY: h, height: "100%", background: "linear-gradient(180deg, var(--tangerine), var(--magenta), var(--violet), var(--cyan))", boxShadow: "0 0 14px var(--tangerine-dim)" }} />
          </div>

          {experience.map((e, i) => {
            const left = i % 2 === 0;
            return (
              <li key={i} className={`relative md:grid md:grid-cols-2 md:gap-16 py-8 ${kindAccent[e.kind]}`}>
                <span className="absolute -left-[1.55rem] md:left-1/2 md:-translate-x-1/2 top-10 h-2.5 w-2.5 rounded-full bg-ink border border-accent glow-accent" />
                <Reveal
                  className={`${left ? "md:col-start-1 md:text-right md:pr-4" : "md:col-start-2 md:pl-4"}`}
                  delay={0.05}
                  y={36}
                >
                  <div className="mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    {e.when} · {kindLabel[e.kind]}
                  </div>
                  <h3 className="display mt-3 text-[clamp(1.5rem,3vw,2.4rem)]">{e.title}</h3>
                  <div className="serif-italic mt-1 text-xl text-dim">{e.org}</div>
                  <p className="mt-3 text-dim max-w-md md:ml-auto">{e.detail}</p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
