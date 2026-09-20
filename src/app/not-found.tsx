import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative z-10 min-h-screen flex items-center">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1 className="display mt-4 text-[clamp(3rem,12vw,11rem)] uppercase leading-[0.86]">
          No<br />signal<span className="text-tangerine">.</span>
        </h1>
        <p className="mt-6 text-dim max-w-md">The requested page does not exist or may have been moved.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/" className="beam mono text-[12px] uppercase tracking-[0.16em] rounded-full bg-tangerine text-ink px-6 py-3.5">
            return home
          </Link>
          <a href="mailto:anirudh.gupta.sa@gmail.com" className="beam mono text-[12px] uppercase tracking-[0.16em] rounded-full border border-rim/20 px-6 py-3.5 hover:border-tangerine transition-colors">
            report it
          </a>
        </div>
      </div>
    </main>
  );
}
