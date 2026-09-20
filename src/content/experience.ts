export type Entry = {
  when: string;
  title: string;
  org: string;
  detail: string;
  kind: "work" | "edu" | "project";
};

// TODO: replace with real entries.
export const experience: Entry[] = [
  {
    when: "2026 —",
    title: "TODO — current role or study",
    org: "TODO — org / school",
    detail: "TODO — one or two lines on what you do and what it produced.",
    kind: "work",
  },
  {
    when: "2026",
    title: "Built UPF3B.org",
    org: "Independent",
    detail: "Family-founded rare-disease initiative site on Next.js + AWS.",
    kind: "project",
  },
  {
    when: "2025 — 2026",
    title: "TODO — education",
    org: "TODO — school",
    detail: "TODO — program, focus, notable coursework or results.",
    kind: "edu",
  },
];
