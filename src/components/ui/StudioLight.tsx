"use client";

import { useEffect } from "react";

/** A warm radial light that drifts with scroll and leans toward the cursor. */
export function StudioLight() {
  useEffect(() => {
    const root = document.documentElement;
    let mx = 0.5;
    let my = 0.2;
    let tx = 0.5;
    let ty = 0.2;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX / window.innerWidth;
      ty = e.clientY / window.innerHeight;
    };
    const tick = () => {
      const scroll = window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight);
      mx += (tx - mx) * 0.04;
      my += (ty - my) * 0.04;
      const x = 30 + mx * 40; // 30–70%
      const y = 10 + my * 30 + scroll * 40; // drifts down the page
      root.style.setProperty("--light-x", `${x.toFixed(2)}%`);
      root.style.setProperty("--light-y", `${y.toFixed(2)}%`);
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="studio-light" aria-hidden />;
}
