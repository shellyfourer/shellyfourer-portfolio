'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import { projects, type Project, type ProjectCategory } from '@/lib/projects'

type Category = 'all' | ProjectCategory

const CATEGORIES: { label: string; value: Category }[] = [
  { label: 'all', value: 'all' },
  { label: 'designed+built', value: 'designed+built' },
  { label: 'e-commerce', value: 'e-commerce' },
  { label: 'the-lab', value: 'the-lab' },
]

function categoryCount(cat: Category) {
  if (cat === 'all') return projects.length
  return projects.filter((p) => p.category === cat).length
}

function WipPlaceholder({ title, size = 'md' }: { title: string; size?: 'sm' | 'md' }) {
  const isSm = size === 'sm'
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(-45deg, #1a0035, #8338ec, #3d0070, #b923ff, #1a0035)',
        backgroundSize: '400% 400%',
        animation: 'wip-gradient 8s ease infinite',
      }}
    >
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative flex flex-col items-center gap-1.5 px-6 text-center">
        <span
          className={`font-sans font-medium tracking-[0.2em] uppercase ${isSm ? 'text-[9px]' : 'text-[11px]'} text-white/55`}
        >
          coming soon
        </span>
        <span
          className={`font-sans font-semibold tracking-tight ${isSm ? 'text-xs' : 'text-base'} text-white/90`}
        >
          {title}
        </span>
      </div>
    </div>
  )
}

function SmallCard({ project }: { project: Project }) {
  return (
    <div className="bg-surface border border-border/30 rounded-card overflow-hidden w-[360px] shrink-0">
      <div className="flex items-center gap-2 px-3 py-2 bg-surface-raised border-b border-border/20">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-danger/70" />
          <span className="w-2 h-2 rounded-full bg-warning/70" />
          <span className="w-2 h-2 rounded-full bg-success/70" />
        </div>
        <span className="font-mono text-[11px] text-foreground/35 truncate">
          {project.filepath}
        </span>
      </div>
      <div className="h-[270px] bg-[#140826] flex items-center justify-center overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <WipPlaceholder title={project.title} size="sm" />
        )}
      </div>
    </div>
  )
}

function FocusedCard({ project }: { project: Project }) {
  const inner = (
    <div className="bg-surface border border-border/30 rounded-card overflow-hidden">
      <div className="flex items-center gap-3 px-3.5 py-2.5 bg-surface-raised border-b border-border/20">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-danger/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-warning/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-success/70" />
        </div>
        <span className="font-mono text-xs text-foreground/50 truncate">{project.filepath}</span>
        <div className="ml-auto flex items-center gap-1.5 shrink-0">
          <span
            className={`w-1.5 h-1.5 rounded-full ${project.status === 'live' ? 'bg-success/80' : 'bg-warning/70'}`}
          />
          <span className="font-mono text-xs text-foreground/50">{project.status}</span>
        </div>
      </div>

      <div className="h-[260px] md:h-[320px] bg-[#140826] flex items-center justify-center overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <WipPlaceholder title={project.title} />
        )}
      </div>

      <div className="border-t border-border/20 flex items-center justify-between px-4 py-2.5">
        <span className="font-mono text-xs text-foreground/50">{project.url || project.title}</span>
        <span className="font-mono text-xs text-foreground/35">{project.version}</span>
      </div>
    </div>
  )

  return project.href ? (
    <a href={project.href} target="_blank" rel="noopener noreferrer" className="block">
      {inner}
    </a>
  ) : (
    inner
  )
}

export default function ProjectsCarousel() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [indexByCategory, setIndexByCategory] = useState<Partial<Record<Category, number>>>({})
  const [direction, setDirection] = useState(0)

  const filtered =
    activeCategory === 'all' ? projects : projects.filter((p) => p.category === activeCategory)
  const total = filtered.length
  const currentIndex = Math.min(indexByCategory[activeCategory] ?? 0, total - 1)
  const current = filtered[currentIndex] ?? filtered[0]
  const prevProject = filtered[(currentIndex - 1 + total) % total]
  const nextProject = filtered[(currentIndex + 1) % total]

  const setCurrentIndex = useCallback(
    (updater: number | ((i: number) => number)) => {
      setIndexByCategory((prev) => {
        const next = typeof updater === 'function' ? updater(prev[activeCategory] ?? 0) : updater
        return { ...prev, [activeCategory]: next }
      })
    },
    [activeCategory]
  )

  const goNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((i) => (i + 1) % total)
  }, [total, setCurrentIndex])

  const goPrev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((i) => (i - 1 + total) % total)
  }, [total, setCurrentIndex])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext()
      else if (e.key === 'ArrowLeft') goPrev()
      else if (e.key === 'Enter' && current?.href) {
        window.open(current.href, '_blank', 'noopener noreferrer')
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [goNext, goPrev, current])

  return (
    <section className="relative flex flex-col flex-1 overflow-hidden">
      {/* Eyebrow */}
      <div className="flex items-center justify-between px-6 md:px-16 pt-8 md:pt-10">
        <p className="font-mono text-sm text-foreground/45">
          <span className="text-accent/60">shellyfourer</span>
          {' ~/projects '}
          <span className="text-accent-deep/80">%</span>
          {' ls --group=category'}
        </p>
        <p className="hidden md:block font-mono text-xs text-foreground/50">
          {'[←][→] browse   ·   [enter] open'}
        </p>
      </div>

      {/* Category tabs */}
      <div className="flex items-center gap-2.5 flex-wrap px-6 md:px-16 mt-4">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.value
          return (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`font-mono text-xs px-4 py-2.5 rounded border transition-colors ${
                isActive
                  ? 'bg-accent/12 border-accent/80 text-accent/95'
                  : 'border-border/30 text-foreground/35 hover:border-border/50 hover:text-foreground/55'
              }`}
            >
              {cat.label} ({categoryCount(cat.value)})
            </button>
          )
        })}
      </div>

      {/* Carousel */}
      <div className="flex-1 flex items-center justify-center px-6 overflow-hidden">
        <div className="relative w-full max-w-[720px]">
          {/* Offset shadow card */}
          <div className="absolute inset-0 translate-x-4 translate-y-4 border border-accent-deep/30 rounded-card pointer-events-none" />

          {/* Prev peek */}
          {total > 1 && (
            <div className="hidden xl:block absolute top-1/2 -translate-y-1/2 right-full translate-x-32 opacity-45 pointer-events-none z-0">
              <SmallCard project={prevProject} />
            </div>
          )}

          {/* Focused card */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.id}
              className="relative z-10"
              initial={{ opacity: 0, x: direction * 48, filter: 'blur(8px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: direction * -48, filter: 'blur(8px)' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <FocusedCard project={current} />
            </motion.div>
          </AnimatePresence>

          {/* Next peek */}
          {total > 1 && (
            <div className="hidden xl:block absolute top-1/2 -translate-y-1/2 left-full -translate-x-32 opacity-45 pointer-events-none z-0">
              <SmallCard project={nextProject} />
            </div>
          )}
        </div>
      </div>

      {/* Project info + nav */}
      <div className="flex flex-col items-center gap-3 pb-8 md:pb-10 px-6 text-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.id + '-info'}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-2"
          >
            <h2 className="text-h2 text-foreground/95">{current.title}</h2>
            <p className="font-serif italic text-base text-foreground/70">{current.subtitle}</p>
            <p className="font-mono text-sm text-foreground/40">
              <span className="text-syntax-key/90">role:</span>{' '}
              <span className="text-syntax-string/80">&quot;{current.role}&quot;</span>
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {current.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs text-foreground/70 border border-border/30 rounded px-3 py-1"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav controls */}
        <div className="flex items-center gap-5 mt-1">
          <button
            onClick={goPrev}
            aria-label="Previous project"
            className="font-mono text-sm text-accent/80 border border-accent/40 rounded-full px-3.5 py-1.5 hover:border-accent hover:text-accent transition-colors"
          >
            ←
          </button>

          <div className="flex items-center gap-2">
            {filtered.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to project ${i + 1}`}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1)
                  setCurrentIndex(i)
                }}
                className={`h-[3px] rounded-sm transition-all duration-300 ${
                  i === currentIndex
                    ? 'w-7 bg-linear-to-r from-accent-deep to-accent-vivid'
                    : 'w-5 bg-border/35 hover:bg-border/55'
                }`}
              />
            ))}
          </div>

          <span className="font-mono text-xs text-foreground/50">
            {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>

          <button
            onClick={goNext}
            aria-label="Next project"
            className="font-mono text-sm text-accent/80 border border-accent/40 rounded-full px-3.5 py-1.5 hover:border-accent hover:text-accent transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
