import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/profile";
import { experience } from "@/content/experience";
import { skills } from "@/content/skills";
import { projects } from "@/content/projects";

export const metadata: Metadata = { title: `Résumé — ${profile.name}` };

export default function Resume() {
  return (
    <main className="relative z-10 wrap py-16 max-w-3xl print:max-w-none">
      <Link href="/" className="no-print mono text-[11px] uppercase tracking-[0.18em] text-dim link-slide">← back</Link>
      <header className="mt-8 flex flex-wrap items-end justify-between gap-4 border-b border-rim/10 print:border-black/20 pb-6">
        <div>
          <h1 className="display text-5xl">{profile.name}</h1>
          <p className="serif-italic mt-2 text-xl text-dim">{profile.tagline.join(" ")}</p>
        </div>
        <div className="mono text-[11px] text-dim text-right leading-5">
          <div>{profile.email}</div>
          <div>{profile.github.replace("https://", "")}</div>
          <div>{profile.location}</div>
        </div>
      </header>

      <Section title="experience">
        {experience.map((e, i) => (
          <div key={i} className="grid grid-cols-[7rem_1fr] gap-4 py-3">
            <div className="mono text-[11px] text-dim pt-1">{e.when}</div>
            <div>
              <div className="font-semibold">{e.title} <span className="text-dim font-normal">· {e.org}</span></div>
              <div className="text-dim text-sm mt-1">{e.detail}</div>
            </div>
          </div>
        ))}
      </Section>

      <Section title="projects">
        {projects.map((p) => (
          <div key={p.slug} className="grid grid-cols-[7rem_1fr] gap-4 py-3">
            <div className="mono text-[11px] text-dim pt-1">{p.year}</div>
            <div>
              <div className="font-semibold">{p.title} <span className="text-dim font-normal">· {p.stack.join(", ")}</span></div>
              <div className="text-dim text-sm mt-1">{p.blurb}</div>
              <div className="mono text-[11px] mt-1">{p.links.map((l) => l.href).join(" · ")}</div>
            </div>
          </div>
        ))}
      </Section>

      <Section title="skills">
        {skills.map((g) => (
          <div key={g.group} className="grid grid-cols-[7rem_1fr] gap-4 py-2">
            <div className="mono text-[11px] text-dim pt-1">{g.group}</div>
            <div className="text-sm">{g.items.map((s) => s.name).join(" · ")}</div>
          </div>
        ))}
      </Section>

      <p className="no-print mono mt-12 text-[10px] uppercase tracking-[0.18em] text-faint">
        ⌘P / ctrl+P prints this as a clean black-on-white résumé.
      </p>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="eyebrow">{title}</h2>
      <div className="mt-3 divide-y divide-rim/10 print:divide-black/10">{children}</div>
    </section>
  );
}
