"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

/** Power-on: a tangerine line draws across, then the veil lifts. ~900ms. */
export function Loader() {
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const booted = sessionStorage.getItem("booted");
    const t = setTimeout(() => {
      setDone(true);
      sessionStorage.setItem("booted", "1");
    }, booted ? 0 : reduce ? 50 : 950);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-ink flex items-center justify-center"
          exit={{ opacity: 0, filter: "brightness(2)" }}
          transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
          aria-hidden
        >
          <div className="relative w-[min(60vw,420px)] h-px bg-rim/10 overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-tangerine shadow-[0_0_18px_var(--tangerine)]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <span className="mono absolute bottom-8 text-[10px] uppercase tracking-[0.2em] text-faint">
            power on
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
