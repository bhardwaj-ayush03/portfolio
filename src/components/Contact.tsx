"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Briefcase, Terminal, ArrowUpRight, Copy, Check, ArrowUp } from "lucide-react";
import { site } from "@/data/site";
import { useCanDrag } from "@/lib/useCanDrag";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const fine = useCanDrag();

  const rows = [
    { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: Mail, bg: "bg-pink" },
    { label: "Phone", value: site.phone, href: `tel:+91${site.phone}`, Icon: Phone, bg: "bg-green" },
    { label: "LinkedIn", value: "linkedin.com/in/ayushbhardwaj03", href: site.linkedin, Icon: Briefcase, bg: "bg-blue" },
    { label: "GitHub", value: "github.com/bhardwaj-ayush03", href: site.github, Icon: Terminal, bg: "bg-lilac" },
  ];

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pt-24 pb-10">
      <SectionTitle color="bg-pink">Contact</SectionTitle>

      <Reveal>
        <div className="nb-card p-6 sm:p-10">
          <h3 className="text-4xl font-bold leading-tight sm:text-6xl">
            Let&apos;s build{" "}
            <span className="font-serif bg-yellow px-2 italic">something</span> together.
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-4">
            {rows.map(({ label, value, href, Icon, bg }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                whileHover={fine ? { x: 12, boxShadow: "8px 8px 0 #111" } : undefined}
                whileTap={{ scale: 0.97 }}
                className={`${bg} flex min-w-0 items-center gap-3 border-[3px] border-ink px-4 py-4 shadow-[4px_4px_0_#111] sm:gap-4 sm:px-5`}
              >
                <Icon className="shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-xs uppercase">{label}</div>
                  <div className="break-all text-base font-bold sm:text-lg">{value}</div>
                </div>
                <ArrowUpRight className="shrink-0" />
              </motion.a>
            ))}
          </div>

          <button onClick={copyEmail} className="nb-btn mt-8 bg-yellow">
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? "Copied!" : "Copy email"}
          </button>
        </div>
      </Reveal>

      <footer className="font-mono mt-16 flex flex-wrap items-center justify-between gap-4 border-t-4 border-ink pt-6 text-sm">
        <span>© 2026 Ayush Bhardwaj · built with Next.js + Motion</span>
        <motion.a
          href="#top"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 0.85 }}
          className="grid h-11 w-11 place-items-center rounded-full border-[3px] border-ink bg-green shadow-[3px_3px_0_#111]"
          aria-label="Back to top"
        >
          <ArrowUp />
        </motion.a>
      </footer>
    </section>
  );
}