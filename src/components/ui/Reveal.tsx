"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Slide-up + un-blur once in view. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, filter: "blur(10px)" }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-12% 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Word-by-word opacity reveal for paragraphs. */
export function Words({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <p className={className}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.12 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 0.6, delay: i * 0.018, ease: EASE }}
          style={{ display: "inline" }}
        >
          {w}{" "}
        </motion.span>
      ))}
    </p>
  );
}
