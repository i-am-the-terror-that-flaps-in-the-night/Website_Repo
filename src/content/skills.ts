export const skills: { group: string; items: { name: string; note: string }[] }[] = [
  {
    group: "data",
    items: [
      { name: "Python", note: "pandas · numpy · statsmodels" },
      { name: "LightGBM", note: "modelling + model cards" },
      { name: "Statistics", note: "weighted regression · mediation" },
      { name: "SQL / SQLite", note: "run logs · inventories" },
    ],
  },
  {
    group: "web",
    items: [
      { name: "TypeScript", note: "strict mode, always" },
      { name: "React 19", note: "SPA + server components" },
      { name: "Next.js", note: "app router" },
      { name: "CSS", note: "tokens · motion · layout" },
      { name: "FastAPI", note: "JSON APIs + static serving" },
    ],
  },
  {
    group: "infra",
    items: [
      { name: "AWS", note: "hosting upf3b.org" },
      { name: "Render", note: "FastAPI deploys" },
      { name: "Cloudflare Workers", note: "static + edge" },
      { name: "Git / GitHub", note: "" },
    ],
  },
  {
    group: "game",
    items: [
      { name: "Canvas 2D", note: "RTS rendering loop" },
      { name: "Game design", note: "balance · tech trees · waves" },
    ],
  },
];
