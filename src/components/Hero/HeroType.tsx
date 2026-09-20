"use client";

import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/content/profile";

const EASE = [0.16, 1, 0.3, 1] as const;

export function HeroType() {
  const reduce = useReducedMotion();
  const words = profile.name.split(" ");
  let idx = 0;

  return (
    <div className="relative">
      <h1 className="display text-[clamp(3.4rem,12.5vw,13rem)] leading-[0.86] uppercase" aria-label={profile.name}>
        {words.map((word, wi) => (
          <span key={wi} className="inline-block whitespace-nowrap mr-[0.22em] last:mr-0">
            {word.split("").map((ch) => {
              const i = idx++;
              return (
                <motion.span
                  key={i}
                  aria-hidden
                  className="inline-block"
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: "0.25em", filter: "blur(18px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1.1, delay: 0.95 + i * 0.03, ease: EASE }}
                >
                  {ch}
                </motion.span>
              );
            })}
          </span>
        ))}
      </h1>
      <motion.p
        className="mt-6 text-[clamp(1.35rem,3.2vw,2.6rem)] leading-tight text-dim max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.6, ease: EASE }}
      >
        {profile.tagline[0]}{" "}
        <span className="serif-italic rgb-text text-[1.15em]">{profile.tagline[1]}</span>{" "}
        {profile.tagline[2]}.
      </motion.p>
    </div>
  );
}
