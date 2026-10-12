"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { site } from "@/data/site";

const tiles = [
  { ch: "s", bg: "bg-pink", r: -6 },
  { ch: "h", bg: "bg-blue", r: 4 },
  { ch: "i", bg: "bg-paper", r: -3 },
  { ch: "p", bg: "bg-green", r: 5 },
  { ch: "s", bg: "bg-lilac", r: -5 },
  { ch: ".", bg: "bg-orange", r: 3 },
];

const chips = ["LangGraph", "RAG", "MCP", "MLOps", "AI Agents"];
const marquee = ["GENERATIVE AI", "LLM AGENTS", "RAG", "MCP", "LANGGRAPH", "MLOPS", "FASTAPI", "DOCKER", "AWS"];

function Polaroid() {
  const [ok, setOk] = useState(true);
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto w-72 sm:w-80"
    >
      <motion.div
        drag
        dragSnapToOrigin
        initial={{ rotate: 4, opacity: 0, y: 60 }}
        animate={{ rotate: 4, opacity: 1, y: 0 }}
        whileHover={{ rotate: 0, scale: 1.04 }}
        whileDrag={{ scale: 1.08, rotate: -3 }}
        className="nb-card relative cursor-grab p-4 pb-14 active:cursor-grabbing"
      >
        <div className="absolute -top-4 left-1/2 h-8 w-28 -translate-x-1/2 -rotate-3 border-2 border-ink bg-pink/80" />
        {ok ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/me.jpg"
            alt="Ayush"
            onError={() => setOk(false)}
            draggable={false}
            className="aspect-[4/5] w-full border-[3px] border-ink object-cover"
          />
        ) : (
          <div className="grid aspect-[4/5] w-full place-items-center border-[3px] border-ink bg-lilac text-7xl font-bold">
            AB
          </div>
        )}
        <p className="font-hand absolute bottom-3 left-5 text-3xl">that&apos;s me ✌</p>
      </motion.div>

      <motion.a
        href="#contact"
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 8 }}
        transition={{ delay: 0.8, type: "spring" }}
        whileHover={{ scale: 1.1, rotate: -4 }}
        whileTap={{ scale: 0.9 }}
        className="nb-card font-mono absolute -right-4 top-10 bg-green px-4 py-2 text-sm font-bold"
        style={{ borderRadius: 10, boxShadow: "4px 4px 0 #111" }}
      >
        SAY HI 👋
      </motion.a>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute -left-6 bottom-20 grid h-16 w-16 place-items-center rounded-full border-[3px] border-ink bg-lilac shadow-[4px_4px_0_#111]"
      >
        <Sparkles />
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 md:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-hand text-3xl"
          >
            hey, I&apos;m Ayush 👋
          </motion.p>

          <h1 className="mt-2 text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl">
            I build AI
            <br />
            that actually
            <br />
            <motion.span
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
              className="mt-3 inline-flex"
            >
              {tiles.map((t, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { y: 50, opacity: 0, rotate: -15 },
                    show: { y: 0, opacity: 1, rotate: t.r },
                  }}
                  whileHover={{ y: -12, rotate: t.r * -2, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 12 }}
                  className={`${t.bg} font-serif -mx-0.5 inline-block cursor-default border-[3px] border-ink px-3 italic shadow-[4px_4px_0_#111]`}
                >
                  {t.ch}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          <p className="mt-8 max-w-xl text-lg font-medium">
            AI/ML undergrad building LLM agents, RAG systems and production MLOps pipelines, the
            kind that survive contact with real users.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {chips.map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08 }}
                whileHover={{ y: -5, rotate: i % 2 ? 3 : -3 }}
                className="font-mono cursor-default border-[3px] border-ink bg-paper px-4 py-1.5 text-sm shadow-[4px_4px_0_#111]"
              >
                {c}
              </motion.span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="nb-btn">
              See my work
              <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-paper">
                <ArrowRight size={16} />
              </span>
            </a>
            <a href={site.resume} download className="nb-btn bg-paper">
              Resume
              <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-paper">
                <Download size={14} />
              </span>
            </a>
          </div>
        </div>

        <Polaroid />
      </div>

      <div className="overflow-hidden border-y-4 border-ink bg-ink py-3">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="font-mono flex w-max gap-10 whitespace-nowrap text-xl font-bold text-yellow"
        >
          {[...marquee, ...marquee, ...marquee, ...marquee].map((m, i) => (
            <span key={i}>{m} ✦</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}