"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { Project } from "@/content/projects";
import type { RepoMeta } from "@/lib/github";
import { ProjectCard } from "./ProjectCard";

/**
 * Sticky deck: each card sticks to the top; as the next one slides over,
 * the previous scales down and dims.
 */
function DeckItem({ p, meta, index, total }: { p: Project; meta?: RepoMeta; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // Track the (non-sticky) outer wrapper: progress runs while the next card slides over.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const isLast = index === total - 1;
  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.35]);
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", isLast ? "blur(0px)" : "blur(6px)"]);

  return (
    <div ref={ref} style={{ marginBottom: isLast ? 0 : "14vh" }}>
      <div className="sticky" style={{ top: `calc(var(--nav-h) + ${index * 14}px + 24px)` }}>
        <motion.div style={reduce ? undefined : { scale, opacity, filter: blur, transformOrigin: "top center" }}>
          <ProjectCard p={p} meta={meta} index={index} />
        </motion.div>
      </div>
    </div>
  );
}

export function ProjectDeck({ projects, metas }: { projects: Project[]; metas: Record<string, RepoMeta | undefined> }) {
  return (
    <div className="relative">
      {projects.map((p, i) => (
        <DeckItem key={p.slug} p={p} meta={p.repo ? metas[p.repo] : undefined} index={i} total={projects.length} />
      ))}
    </div>
  );
}
