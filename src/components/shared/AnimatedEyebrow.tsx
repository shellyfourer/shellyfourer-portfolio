'use client'
import { motion } from 'motion/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export function AnimatedEyebrow({ children, className }: Props) {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.p>
  )
}
