"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { profile } from "@/content/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { Watermark } from "@/components/ui/Watermark";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <section id="contact" className="section min-h-[80vh] flex items-center overflow-hidden accent-magenta">
      <Watermark n="06" />
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_20rem] items-end">
       <div>
        <Reveal>
          <p className="eyebrow">06 — contact</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="serif-italic mt-6 text-[clamp(4rem,16vw,15rem)] leading-[0.85] text-text">
            say <span className="rgb-text">hi</span><span className="text-tangerine not-italic">.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href={`mailto:${profile.email}`}
                className="beam mono text-[12px] uppercase tracking-[0.16em] rounded-full bg-tangerine text-ink px-6 py-3.5 hover:bg-tangerine-hot transition-colors"
              >
                email ↗
              </a>
            </Magnetic>
            <Magnetic>
              <button
                onClick={copy}
                className="beam accent-cyan mono relative text-[12px] uppercase tracking-[0.16em] rounded-full border border-rim/20 px-6 py-3.5 hover:border-cyan hover:text-cyan transition-colors min-w-[13rem]"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? "y" : "n"}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="block"
                  >
                    {copied ? "✓ copied" : "copy address"}
                  </motion.span>
                </AnimatePresence>
              </button>
            </Magnetic>
            <Magnetic>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="beam accent-magenta mono text-[12px] uppercase tracking-[0.16em] rounded-full border border-rim/20 px-6 py-3.5 hover:border-magenta hover:text-magenta transition-colors"
              >
                github ↗
              </a>
            </Magnetic>
            {profile.linkedin && (
              <Magnetic>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="beam mono text-[12px] uppercase tracking-[0.16em] rounded-full border border-rim/20 px-6 py-3.5 hover:border-tangerine transition-colors">
                  linkedin ↗
                </a>
              </Magnetic>
            )}
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mono mt-8 text-[11px] text-faint">{profile.email}</p>
        </Reveal>
       </div>

        <Reveal delay={0.2} y={40}>
          <div className="glass p-5 mono text-[11px]">
            <p className="rule text-[10px] uppercase tracking-[0.2em]">channels</p>
            <ul className="mt-4 flex flex-col gap-2">
              <li className="flex justify-between border-b border-rim/[0.07] pb-2"><span className="text-faint">email</span><a className="link-slide text-text" href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li className="flex justify-between border-b border-rim/[0.07] pb-2"><span className="text-faint">github</span><a className="link-slide text-text" href={profile.github} target="_blank" rel="noreferrer">@{profile.githubUser.slice(0, 14)}…</a></li>
              <li className="flex justify-between border-b border-rim/[0.07] pb-2"><span className="text-faint">linkedin</span><span className="text-faint">TODO</span></li>
              <li className="flex justify-between border-b border-rim/[0.07] pb-2"><span className="text-faint">based</span><span className="text-text">{profile.location}</span></li>
              <li className="flex justify-between border-b border-rim/[0.07] pb-2"><span className="text-faint">timezone</span><span className="text-text">UTC−6 · CT</span></li>
              <li className="flex justify-between"><span className="text-faint">response</span><span className="text-lime">usually &lt; 24h</span></li>
            </ul>
            <p className="rule mt-5 text-[10px] uppercase tracking-[0.2em]">open to</p>
            <p className="mt-3 text-dim leading-relaxed">TODO — internships · freelance web/data work · collaborations</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
