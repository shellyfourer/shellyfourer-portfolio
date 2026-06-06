"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

export function SectionReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}