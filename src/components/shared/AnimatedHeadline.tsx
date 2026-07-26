'use client'
import { motion } from 'motion/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedHeadline({ children, className, delay = 0.1 }: Props) {
  return (
    <motion.h1
      className={className}
      initial={{ opacity: 0, y: 12, filter: 'blur(40px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.h1>
  )
}
