'use client'
import { motion } from 'motion/react'

const letterVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
}

const staggerConfig = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } },
}

export default function ExploreRail() {
  const letters = 'EXPLORE'.split('')

  return (
    <>
      {/* Mobile — horizontal letters centered, line extends to bottom of hero */}
      <div
        className="md:hidden pointer-events-none absolute left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        style={{ top: '58svh', height: 'calc(42svh - 90px)' }}
      >
        <motion.div
          className="flex items-center gap-3 shrink-0"
          variants={staggerConfig}
          initial="hidden"
          animate="show"
        >
          {letters.map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="font-sans text-[10px] font-medium leading-4 text-accent"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-accent/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{
            opacity: { delay: 0.8, duration: 0.4 },
            y: { delay: 0.8, repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
          }}
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </div>

      {/* Desktop — vertical right rail */}
      <div className="hidden md:block pointer-events-none absolute top-[calc(50vh-120px)] bottom-0 right-6 lg:right-16 z-10">
        <div className="flex items-start gap-6 h-full">
          <motion.div
            className="sticky top-50 flex flex-col items-center gap-4"
            variants={staggerConfig}
            initial="hidden"
            animate="show"
          >
            {letters.map((char, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="font-sans text-[10px] lg:text-[12px] font-medium leading-4 text-accent"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            className="w-px bg-accent"
            style={{ height: '100%', transformOrigin: 'top' }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
          />
        </div>
      </div>
    </>
  )
}
