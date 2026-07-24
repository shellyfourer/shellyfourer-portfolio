'use client'
import { motion } from 'motion/react'

export default function AboutHeroText() {
  return (
    <motion.h1
      className="text-h1 text-center"
      initial={{ opacity: 0, y: 12, filter: 'blur(40px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
    >
      half{' '}
      <span className="font-serif italic bg-linear-to-r from-accent-deep to-accent-vivid bg-clip-text text-transparent">
        artist
      </span>
      , half{' '}
      <span className="font-serif italic bg-linear-to-r from-accent-deep to-accent-vivid bg-clip-text text-transparent">
        engineer
      </span>
      .
    </motion.h1>
  )
}
