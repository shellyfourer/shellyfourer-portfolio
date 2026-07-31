import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projects'

const featured = projects.find((p) => p.id === 'trainwithlyon')!
const sideProjects = ['makeyourown', 'tax-manager', 'kristina-fourer'].map(
  (id) => projects.find((p) => p.id === id)!
)

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center gap-8
            px-6 xl:pl-16 xl:pr-40
            min-h-screen-nav py-20 md:py-0 md:h-screen-nav"
    >
      {/* Section heading */}
      <div className="flex flex-col gap-5">
        <p className="font-mono text-sm text-accent/65 tracking-wide select-none">
          <span className="text-accent/30">{'//'} </span>projects
        </p>
        <div className="flex items-stretch gap-2.5">
          <span className="w-0.5 bg-accent-deep shrink-0" />
          <h2 className="text-h2">
            From concept and UX to clean,{' '}
            <span className="font-serif italic text-default-gradient">thoughtful code</span>
          </h2>
        </div>
      </div>

      {/* Cards: single col on mobile/tablet, 2-col on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 w-full items-start">
        {/* Left — featured card + mobile repo cards + button */}
        <div className="flex flex-col gap-5">
          {/* Featured card */}
          <div className="rounded-xl border border-border/25 overflow-hidden bg-surface">
            {/* Chrome */}
            <div className="flex items-center gap-3 px-4 py-2.5 border-b border-border/20 bg-surface-raised">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-danger/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-warning/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-success/70" />
              </div>
              <span className="font-mono text-xs text-foreground/50 truncate">
                {featured.filepath}
              </span>
              <div className="ml-auto flex items-center gap-1.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-success/80" />
                <span className="font-mono text-[10px] text-foreground/50">{featured.status}</span>
              </div>
            </div>

            {/* Screenshot */}
            <Link
              href={featured.href ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {featured.image ? (
                <Image
                  src={featured.image}
                  alt={featured.url ?? 'Project screenshot'}
                  className="w-full h-auto block"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="flex items-center justify-center h-52 bg-[#140826]">
                  <span className="font-mono text-sm text-foreground/35">[ {featured.url} ]</span>
                </div>
              )}
            </Link>

            {/* Footer */}
            <div className="flex items-center gap-3 px-4 py-3 border-t border-border/20">
              <span className="font-mono text-xs text-foreground/50">{featured.url}</span>
              <span className="px-3 py-1 rounded border border-accent/40 bg-accent/[0.08] font-mono text-xs text-accent/85">
                {featured.category}
              </span>
              <span className="ml-auto font-mono text-[10px] text-foreground/35">
                {featured.version}
              </span>
            </div>
          </div>

          {/* Mobile/tablet repo cards — 2 shown, no tech stack line */}
          <div className="lg:hidden flex flex-col gap-3">
            {sideProjects.slice(0, 2).map((project) => {
              const filename = project.filepath.split('/').pop() ?? project.filepath
              return (
                <div
                  key={project.id}
                  className="bg-surface border border-border/30 rounded-lg px-4 py-4 flex flex-col gap-2"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-foreground/95 truncate flex-1">
                      {filename}
                    </span>
                    <span
                      className={`font-mono text-xs px-2.5 py-1 rounded border shrink-0 ${
                        project.status === 'live'
                          ? 'border-success/50 text-success/75'
                          : 'border-warning/50 text-warning/75'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/50 leading-[1.5]">{project.subtitle}</p>
                </div>
              )
            })}
          </div>

          <Link href="/projects" className="btn-brand self-start">
            See all projects
          </Link>
        </div>

        {/* Right — desktop-only repo cards (3, with tech stack) */}
        <div className="hidden lg:flex flex-col gap-4">
          {sideProjects.map((project) => {
            const filename = project.filepath.split('/').pop() ?? project.filepath
            return (
              <div
                key={project.id}
                className="bg-surface border border-border/30 rounded-lg px-4 py-4 flex flex-col gap-2.5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-sm text-foreground/95 truncate">{filename}</span>
                  <span
                    className={`font-mono text-xs px-2.5 py-1 rounded border shrink-0 ${
                      project.status === 'live'
                        ? 'border-success/50 text-success/75'
                        : 'border-warning/50 text-warning/75'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-foreground/50 leading-[1.5]">{project.subtitle}</p>
                <p className="font-mono text-xs text-foreground/40">
                  <span className="text-accent/70">{project.category}</span>
                  {' · '}
                  {project.stack.join(' · ')}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
