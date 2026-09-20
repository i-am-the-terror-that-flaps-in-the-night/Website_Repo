export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  blurb: string;
  stack: string[];
  year: string;
  links: { label: string; href: string }[];
  repo?: string; // GitHub "owner/name" for live metadata
  finding?: string; // mono console block
  tone: "tangerine" | "cyan" | "magenta" | "lime" | "violet";
};

export const projects: Project[] = [
  {
    slug: "upf3b",
    title: "UPF3B.org",
    eyebrow: "rare-disease initiative",
    blurb:
      "A family-founded site connecting patients, clinicians, and researchers around UPF3B-related disorder — audience-specific hubs, a plain-language gene guide, and a path to a faster diagnosis. Built with Next.js and hosted on AWS.",
    stack: ["Next.js", "React", "AWS"],
    year: "2026",
    links: [{ label: "Visit upf3b.org", href: "https://upf3b.org" }],
    tone: "tangerine",
  },
  {
    slug: "stats",
    title: "stats-and-more",
    eyebrow: "descriptive-statistics engine + study",
    blurb:
      "A general-purpose stats engine, a pre-specified ten-step NHANES analysis, and the FastAPI + React service that serves both. Research question: does dietary sugar predict early liver stress in U.S. adolescents?",
    stack: ["Python", "FastAPI", "React 19", "LightGBM", "Render"],
    year: "2026",
    links: [
      { label: "Live app", href: "https://data-analysis-s8hg.onrender.com/" },
      {
        label: "Source",
        href: "https://github.com/i-am-the-terror-that-flaps-in-the-night/stats_stuff",
      },
    ],
    repo: "i-am-the-terror-that-flaps-in-the-night/stats_stuff",
    finding:
      "finding: sugar does not predict ALT independent of body mass.\npredictors: sex, triglyceride/HDL ratio.\ncohort: 699 adolescents · NHANES 2017–18",
    tone: "cyan",
  },
  {
    slug: "dominion",
    title: "Stickman Dominion: Warlords",
    eyebrow: "browser RTS / defense game",
    blurb:
      "A real-time strategy game in the browser with a full design-token CSS layer, holo-panel HUD, tech tree, campaign levels, and data-driven balance. Deployed on Cloudflare Workers.",
    stack: ["JavaScript", "Canvas", "CSS", "Cloudflare Workers"],
    year: "2026",
    links: [
      {
        label: "Source",
        href: "https://github.com/i-am-the-terror-that-flaps-in-the-night/game",
      },
    ],
    repo: "i-am-the-terror-that-flaps-in-the-night/game",
    tone: "magenta",
  },
  {
    slug: "aim",
    title: "Aim Trainer",
    eyebrow: "for the mouse obsession",
    blurb:
      "A reaction and flick trainer built in React + TypeScript on Vite. Built because caring about mice eventually means measuring yourself with one.",
    stack: ["React", "TypeScript", "Vite"],
    year: "2026",
    links: [
      {
        label: "Source",
        href: "https://github.com/i-am-the-terror-that-flaps-in-the-night/aim_trainer",
      },
    ],
    repo: "i-am-the-terror-that-flaps-in-the-night/aim_trainer",
    tone: "lime",
  },
];

export const moreRepos = [
  {
    name: "Science_Fair",
    href: "https://github.com/i-am-the-terror-that-flaps-in-the-night/Science_Fair",
    note: "Python · science-fair analysis", // TODO
  },
  {
    name: "Complete_Python_repo",
    href: "https://github.com/i-am-the-terror-that-flaps-in-the-night/Complete_Python_repo",
    note: "Python · exercises & experiments", // TODO
  },
];
