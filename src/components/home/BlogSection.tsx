import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { NewsletterForm } from '@/components/blog/NewsletterForm'

function DraftCard({ className, title, meta }: { className: string; title: string; meta: string }) {
  return (
    <div className={className} aria-hidden="true">
      <div className="bg-surface/92 border border-accent/40 rounded-lg w-[270px] flex flex-col gap-3 px-5 py-4">
        <p className="text-sm font-medium text-foreground/95 leading-[1.35]">{title}</p>
        <p className="font-mono text-xs text-accent/55">{meta}</p>
      </div>
    </div>
  )
}

export default function BlogSection() {
  const latest = getAllPosts()[0]

  return (
    <section
      id="blog"
      className="flex items-center
           px-6 xl:pl-16 xl:pr-40
            min-h-screen-nav py-20 md:py-0 md:h-screen-nav"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full items-center">
        {/* Left — text + button */}
        <div className="flex flex-col gap-8">
          <p className="font-mono text-sm text-accent/65 tracking-wide select-none">
            <span className="text-accent/30">{'//'} </span>blog
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-stretch gap-2.5">
              <span className="w-0.5 bg-accent-deep shrink-0" />
              <h2 className="text-h2">{latest ? 'From the blog' : 'Coming soon'}</h2>
            </div>
            <p className="text-base text-foreground/55">
              A space where I reflect on learning, building, and growing as a developer and
              creative.
            </p>
          </div>
          {latest && (
            <Link href="/blog" className="btn-brand self-start">
              read the blog
            </Link>
          )}
        </div>

        {/* Right — floating cards + newsletter */}
        <div className="flex flex-col gap-10">
          <div className="relative h-72">
          {/* Pill — tail command */}
          <div className="-rotate-[1.5deg] absolute top-0 left-0" aria-hidden="true">
            <div className="bg-surface-raised/90 border border-border/30 rounded-xl px-5 py-3.5 font-mono text-sm text-foreground/60 whitespace-nowrap">
              <span className="text-accent-deep/70">~ %</span>
              {' tail -f thoughts.log '}
              <span className="text-accent-deep/70">█</span>
            </div>
          </div>

          {/* Pointer nudging toward the latest post */}
          {latest && (
            <div
              className="hidden lg:flex items-center gap-3 absolute -bottom-6 left-[-70px] text-accent/70"
              aria-hidden="true"
            >
              <span className="font-serif italic text-lg text-accent/70 whitespace-nowrap">
                read this one
              </span>
              <svg
                width="110"
                height="90"
                viewBox="0 0 110 90"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 rotate-[70deg]"
              >
                <path d="M70 84 C 72 48, 48 26, 22 18" />
                <path d="M38 12 L 18 16 L 26 36" />
              </svg>
            </div>
          )}

          {/* Card 1 — latest real post */}
          {latest ? (
            <Link href={`/blog/${latest.slug}`} className="rotate-2 absolute top-20 left-0 block">
              <div className="group bg-surface/92 border border-accent/40 rounded-lg w-[270px] flex flex-col gap-3 px-5 py-4 transition-[border-color,box-shadow] duration-200 hover:border-accent/70 hover:shadow-glow-sm">
                <p className="text-sm font-medium text-foreground/95 leading-[1.35]">
                  {latest.frontmatter.title}
                </p>
                <p className="font-mono text-xs text-accent/55">{latest.readingTime}</p>
              </div>
            </Link>
          ) : (
            <DraftCard
              className="rotate-2 absolute top-20 left-0"
              title="why terminals feel human"
              meta="draft · thoughts/01.md"
            />
          )}

          {/* Card 2 — more coming soon */}
          <DraftCard
            className="-rotate-[2.5deg] absolute top-44 right-0"
            title="next one's in the works"
            meta="wip · thoughts/02.mdx"
          />

          </div>
          <div className="lg:rotate-[1.5deg] lg:self-start lg:ml-40 w-full lg:w-[340px]">
            <NewsletterForm compact />
          </div>
        </div>
      </div>
    </section>
  )
}
