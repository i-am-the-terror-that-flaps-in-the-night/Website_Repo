export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="marquee no-print" aria-hidden>
      <div className="marquee-track mono text-[11px] uppercase tracking-[0.22em] text-dim">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t}
            <span className="h-1 w-1 rounded-full" style={{ background: ["var(--tangerine)", "var(--cyan)", "var(--magenta)", "var(--lime)", "var(--violet)"][i % 5], boxShadow: `0 0 8px ${["var(--tangerine)", "var(--cyan)", "var(--magenta)", "var(--lime)", "var(--violet)"][i % 5]}` }} />
          </span>
        ))}
      </div>
    </div>
  );
}
