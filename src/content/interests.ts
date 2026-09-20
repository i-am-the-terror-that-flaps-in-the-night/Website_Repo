export type Interest = {
  name: string;
  start: string; // YYYY-MM
  end: string | null; // null = ongoing
  note: string;
  hue: "tangerine" | "cyan" | "magenta" | "lime" | "violet";
};

// Timeline spans from the earliest start to "now".
export const interests: Interest[] = [
  { name: "python", start: "2025-01", end: null, note: "The constant. Everything else orbits it.", hue: "tangerine" },
  { name: "javascript", start: "2025-07", end: null, note: "Where the games and the web began.", hue: "lime" },
  { name: "swift", start: "2025-10", end: null, note: "Apple-side curiosity.", hue: "magenta" },
  { name: "html / css", start: "2026-02", end: null, note: "Tokens, motion, layout — this site.", hue: "cyan" },
  { name: "c#", start: "2026-06", end: null, note: "Typed, managed, game-adjacent.", hue: "violet" },
  { name: "c++", start: "2026-06", end: null, note: "Down to the metal.", hue: "cyan" },
];

export const timelineStart = "2025-01"; // TODO: adjust if python started earlier
