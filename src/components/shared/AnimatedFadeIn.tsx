'use client'
import { motion } from 'motion/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedFadeIn({ children, className, delay = 0 }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
