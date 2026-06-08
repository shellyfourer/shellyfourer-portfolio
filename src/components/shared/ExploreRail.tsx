'use client'
import { motion } from 'motion/react'

const letterVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
}

export default function ExploreRail() {
  const letters = 'EXPLORE'.split('')

  return (
    <div className="hidden md:block pointer-events-none absolute top-[calc(50vh-120px)] bottom-0 right-6 lg:right-16 z-10">
      <div className="flex items-start gap-6 h-full">
        {/* Letters — stagger in on load */}
        <motion.div
          className="sticky top-50 flex flex-col items-center gap-4"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } },
          }}
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

        {/* Line — draws in from top */}
        <motion.div
          className="w-px bg-accent"
          style={{ height: '100%', transformOrigin: 'top' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
        />
      </div>
    </div>
  )
}
