import Link from 'next/link'
import Image from 'next/image'

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center gap-8
            px-6 md:pr-24 lg:pl-16 lg:pr-40
            h-screen-nav"
    >
      {/* Heading */}
      <div className="flex flex-col gap-5">
        <p className="font-mono text-sm text-accent/65 tracking-wide select-none">
          <span className="text-accent/30">{'//'} </span>projects
        </p>
        <div className="flex items-stretch gap-2.5">
          <span className="w-0.5 bg-accent-deep shrink-0" />
          <h2 className="text-h2">
            From concept and UX to clean, thoughtful code
          </h2>
        </div>
      </div>

      {/* Project card */}
      <div className="rounded-xl border border-border/25 overflow-hidden max-w-3xl bg-surface">
        {/* Card header */}
        <div className="flex items-center gap-3 px-4 py-2.5 border-b border-border/20 bg-surface-raised">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-danger/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-warning/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-success/70" />
          </div>
          <span className="font-mono text-xs text-foreground/30">~/projects/kristina-fourer.tsx</span>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-success/80" />
            <span className="font-mono text-[10px] text-foreground/30">live</span>
          </div>
        </div>

        {/* Screenshot */}
        <Link
          href="https://kristinafourer.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Image
            src="/project1.png"
            alt="Kristina Fourer Blog"
            width={832}
            height={423}
            className="w-full sm:grayscale-0 lg:grayscale hover:grayscale-0 transition duration-300"
          />
        </Link>

        {/* Card footer */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-border/20">
          <span className="font-mono text-xs text-foreground/35">kristinafourer.com</span>
          <span className="font-mono text-[10px] text-foreground/25">v1.0.0</span>
        </div>
      </div>

      <Link href="/projects" className="btn-brand self-start">
        See more
      </Link>
    </section>
  )
}
