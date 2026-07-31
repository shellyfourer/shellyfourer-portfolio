'use client'
import { motion } from 'motion/react'

interface Props {
  delay?: number
}

export function HeroScrollIndicator({ delay = 1 }: Props) {
  return (
    <motion.div
      className="flex absolute bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 1 }}
    >
      <span className="text-[10px] tracking-[0.2em] uppercase text-accent">Scroll</span>
      <motion.svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-accent/40"
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      >
        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>
    </motion.div>
  )
}
