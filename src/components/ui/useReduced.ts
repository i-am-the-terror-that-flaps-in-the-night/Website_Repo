"use client";

import { useSyncExternalStore } from "react";

const q = "(prefers-reduced-motion: reduce)";
const subscribe = (cb: () => void) => {
  const m = window.matchMedia(q);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
};

/** Hydration-safe prefers-reduced-motion: false during SSR/hydration, then real value. */
export function useReduced() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(q).matches, () => false);
}
