"use client";
import { motion } from "motion/react";
import Reveal from "./Reveal";

export default function SectionTitle({
  children,
  color = "bg-pink",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <Reveal className="mb-12">
      <motion.h2
        whileHover={{ rotate: 0, scale: 1.04 }}
        className={`nb-card ${color} inline-block -rotate-2 px-6 py-2 text-4xl font-bold sm:text-5xl`}
      >
        {children}
      </motion.h2>
    </Reveal>
  );
}