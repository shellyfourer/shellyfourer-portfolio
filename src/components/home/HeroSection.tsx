'use client'
import HeroText from '@/components/home/HeroText'
import { motion } from 'motion/react'

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden
            h-[calc(100svh-90px)] md:h-[calc(100svh-122px)] lg:h-[calc(100svh-148px)]
            px-6 md:px-16 gap-6 snap-none"
    >
      {/* Center content */}
      <div className="flex flex-col items-center gap-4 md:gap-5">
        {/* Code tag with blinking cursor */}
        <motion.p
          className="font-mono text-sm md:text-base text-accent/50 tracking-wide select-none"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="text-accent/30">&lt;</span>
          creative_dev
          <span className="text-accent/30"> /&gt;</span>
          <span className="cursor-blink text-accent/50 ml-0.5">_</span>
        </motion.p>

        <HeroText />

        <p className="text-lg md:text-xl lg:text-2xl tracking-[-1.2px] text-center text-text p-2.5">
          I&#39;m a Web Developer and Artist <br /> that thinks in code and feels in color
        </p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-accent/40">Scroll</span>
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

      {/* Socials — bottom left */}
      <div className="flex md:flex-col items-start justify-center px-6 lg:px-16 gap-5 absolute bottom-0 pb-5 lg:pb-10 left-0">
        <div className="flex md:flex-col items-center gap-5 text-accent/40">
          <a
            href="https://github.com/shellyfourer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid place-items-center w-8 h-8 md:w-10 md:h-10 hover:text-accent transition-colors"
          >
            <svg
              viewBox="0 0 98 96"
              className="w-8 h-8 md:w-10 md:h-10"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
              />
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/shellyfourer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid place-items-center w-8 h-8 md:w-10 md:h-10 hover:text-accent transition-colors"
          >
            <svg
              viewBox="0 0 16 16"
              className="w-8 h-8 md:w-10 md:h-10"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
              />
            </svg>
          </a>

          <a
            href="mailto:shellyfourer@gmail.com"
            aria-label="Email"
            className="grid place-items-center w-8 h-8 md:w-10 md:h-10 hover:text-accent transition-colors"
          >
            <svg
              viewBox="0 0 1920 1920"
              className="w-8 h-8 md:w-10 md:h-10"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
