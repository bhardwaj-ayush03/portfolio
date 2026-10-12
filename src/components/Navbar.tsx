"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      whileHover={{ rotate: -3, scale: 1.05 }}
      className="font-mono hidden items-center gap-2 border-[3px] border-ink bg-yellow px-3 py-1.5 text-sm font-bold shadow-[3px_3px_0_#111] lg:flex"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full border border-ink bg-green" />
      </span>
      IST {time || "--:--:--"}
    </motion.div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[60] h-2 origin-left border-b-2 border-ink bg-pink"
      />

      <motion.header
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        className="fixed left-0 right-0 top-5 z-50 px-4"
      >
        <nav className="nb-card mx-auto max-w-5xl px-4 py-3" style={{ borderRadius: 28 }}>
          <div className="flex items-center justify-between gap-4">
            <motion.a
              href="#top"
              whileHover={{ rotate: -3, scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              className="flex min-w-0 items-center gap-3"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-[3px] border-ink bg-green font-bold">
                AB
              </span>
              <span className="block min-w-0 leading-tight">
                <span className="block truncate font-bold">Ayush Bhardwaj</span>
                <span className="font-serif block text-sm italic">AI/ML Engineer</span>
              </span>
            </motion.a>

            <Clock />

            <div className="hidden items-center gap-2 md:flex">
              {links.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  whileHover={{ y: -3, rotate: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className="rounded-full border-2 border-transparent px-4 py-2 font-bold transition-colors hover:border-ink hover:bg-yellow"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.06, rotate: 2 }}
                whileTap={{ scale: 0.92 }}
                className="ml-2 flex items-center gap-2 rounded-full border-[3px] border-ink bg-green px-4 py-2 font-bold shadow-[4px_4px_0_#111]"
              >
                Hire me
                <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-paper">
                  <ArrowUpRight size={14} />
                </span>
              </motion.a>
            </div>

            <motion.button
              whileTap={{ scale: 0.85, rotate: 90 }}
              onClick={() => setOpen(!open)}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-[3px] border-ink bg-yellow md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </motion.button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden md:hidden"
              >
                <div className="flex flex-col gap-2 pt-4">
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl border-2 border-ink bg-paper px-4 py-3 font-bold active:bg-pink"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
}