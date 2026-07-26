'use client'
import { motion, AnimatePresence } from 'motion/react'
import { ReactNode, useEffect, useState } from 'react'

interface Props {
  intro: ReactNode
  outro: ReactNode
  delay?: number
}

export function AnimatedCyclingHeadline({ intro, outro, delay = 2000 }: Props) {
  const [step, setStep] = useState<'intro' | 'outro'>('intro')

  useEffect(() => {
    const t = setTimeout(() => setStep('outro'), delay)
    return () => clearTimeout(t)
  }, [delay])

  const baseH1 = 'text-display text-center'

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {step === 'intro' ? (
          <motion.h1
            key="intro"
            className={baseH1}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12, filter: 'blur(50px)' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {intro}
          </motion.h1>
        ) : (
          <motion.h1
            key="outro"
            className={baseH1}
            initial={{ opacity: 0, y: 12, filter: 'blur(50px)' }}
            animate={{ opacity: 1, y: 0, filter: 'none' }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {outro}
          </motion.h1>
        )}
      </AnimatePresence>
    </div>
  )
}
