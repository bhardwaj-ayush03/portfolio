"use client";
import { motion } from "motion/react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const skills = [
  { title: "Agentic AI / LLMs", bg: "bg-pink", items: ["LangGraph", "LangChain", "RAG Pipelines", "Tool Calling", "MCP", "Groq", "Ollama", "n8n", "Prompt Engineering"] },
  { title: "MLOps & Deployment", bg: "bg-blue", items: ["MLflow", "DagsHub", "DVC", "Docker", "GitHub Actions", "AWS (S3, EC2, ECR)", "FastAPI"] },
  { title: "ML / Deep Learning", bg: "bg-lilac", items: ["Supervised Learning", "Neural Networks", "CNNs", "LSTMs", "Transfer Learning", "Generative AI"] },
  { title: "Languages & Data", bg: "bg-green", items: ["Python", "C++", "SQL", "DSA", "FAISS", "ChromaDB", "MongoDB", "SQLite"] },
];

const stats = [
  { v: "8.89", l: "GPA" },
  { v: "6", l: "Projects" },
  { v: "2028", l: "Graduating" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle color="bg-yellow">About me</SectionTitle>

      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <div className="nb-card h-full p-8">
            <p className="text-lg font-medium leading-relaxed">
              I&apos;m a 3rd-year B.Tech student (AI-ML) at the University School of Automation and
              Robotics, GGSIPU. I like turning emerging AI tech into practical, reliable systems:
              LLM agents, RAG pipelines, MCP integrations and the MLOps plumbing that keeps them
              running.
            </p>
            <p className="mt-4 text-lg font-medium leading-relaxed">
              Driven by curiosity and a builder mindset. I care about architecture, observability
              and failure modes, not just demos.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.l}
                  whileHover={{ y: -6, rotate: i % 2 ? 3 : -3 }}
                  className="border-[3px] border-ink bg-yellow p-4 text-center shadow-[4px_4px_0_#111]"
                >
                  <div className="text-3xl font-bold">{s.v}</div>
                  <div className="font-mono text-xs uppercase">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="grid place-items-center">
          <motion.div
            drag
            dragSnapToOrigin
            whileHover={{ rotate: 0, scale: 1.05 }}
            whileDrag={{ scale: 1.1 }}
            initial={{ rotate: -4 }}
            animate={{ rotate: -4 }}
            className="relative w-full max-w-sm cursor-grab bg-green p-8 pt-12 shadow-[6px_6px_0_#111] active:cursor-grabbing"
            style={{ border: "3px solid #111" }}
          >
            <div className="absolute -top-4 left-1/2 h-8 w-28 -translate-x-1/2 rotate-2 border-2 border-ink bg-pink/80" />
            <p className="font-hand text-4xl leading-tight">
              any stack · any problem · ship it ✦
            </p>
            <p className="font-mono mt-4 text-xs">(psst, you can drag me)</p>
          </motion.div>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {skills.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.08}>
            <div className="nb-card h-full overflow-hidden">
              <div className={`${g.bg} border-b-[3px] border-ink px-5 py-3 font-bold`}>
                {g.title}
              </div>
              <div className="flex flex-wrap gap-2 p-5">
                {g.items.map((it) => (
                  <motion.span
                    key={it}
                    whileHover={{ y: -4, rotate: 2, backgroundColor: "#ffe066" }}
                    className="font-mono cursor-default border-2 border-ink bg-paper px-3 py-1 text-sm"
                  >
                    {it}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}