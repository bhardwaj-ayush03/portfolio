"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const filters = ["All", "Agents", "RAG", "MLOps", "Automation"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const shown = projects.filter((p) => active === "All" || p.cats.includes(active));

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle color="bg-lilac">Projects</SectionTitle>

      <Reveal className="mb-10 flex flex-wrap gap-3">
        {filters.map((f) => (
          <motion.button
            key={f}
            onClick={() => setActive(f)}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.92 }}
            className={`font-mono cursor-pointer rounded-full border-[3px] border-ink px-5 py-2 text-sm font-bold shadow-[4px_4px_0_#111] ${
              active === f ? "bg-ink text-yellow" : "bg-paper"
            }`}
          >
            {f}
          </motion.button>
        ))}
      </Reveal>

      <motion.div layout className="grid gap-8 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <motion.article
              key={p.n}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -8, rotate: i % 2 ? 1.2 : -1.2 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="nb-card flex flex-col overflow-hidden"
            >
              <div className={`${p.color} flex items-center justify-between border-b-[3px] border-ink px-5 py-3`}>
                <span className="font-mono text-lg font-bold">{p.n}</span>
                <span className="font-mono text-sm">{p.cats.join(" · ")}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-bold leading-tight">{p.title}</h3>
                <p className="font-serif mt-1 text-xl italic">{p.subtitle}</p>
                <p className="mt-4 flex-1 font-medium">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="font-mono border-2 border-ink bg-paper px-2 py-0.5 text-xs">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={p.github} target="_blank" rel="noreferrer" className="nb-btn mt-6 self-start">
                  <Code size={18} />
                  View code
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-paper">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}