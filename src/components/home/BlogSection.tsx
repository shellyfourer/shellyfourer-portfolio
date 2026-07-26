import Link from 'next/link'

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="flex items-center
            px-6 md:pr-24 lg:pl-16 lg:pr-40
            h-screen-nav"
    >
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 w-full items-center">
        {/* Left — text */}
        <div className="flex flex-col gap-8">
          <p className="font-mono text-sm text-accent/65 tracking-wide select-none">
            <span className="text-accent/30">{'//'} </span>blog
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-stretch gap-2.5">
              <span className="w-0.5 bg-accent-deep shrink-0" />
              <h2 className="text-h2">
                Coming soon
              </h2>
            </div>
            <p className="text-lead font-medium text-foreground/70 leading-relaxed">
              A space where I reflect on learning, building, and growing as a developer and
              creative.
            </p>
          </div>
          <Link href="/" className="btn-brand self-start">
            Read
          </Link>
        </div>

        {/* Right — terminal window */}
        <div
          className="hidden md:flex flex-col rounded-lg border border-border/30 overflow-hidden bg-surface"
          aria-hidden="true"
        >
          {/* Window chrome */}
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/20 bg-surface-raised">
            <span className="w-3 h-3 rounded-full bg-danger/70" />
            <span className="w-3 h-3 rounded-full bg-warning/70" />
            <span className="w-3 h-3 rounded-full bg-success/70" />
            <span className="ml-4 font-mono text-xs text-foreground/30">Terminal</span>
            <div className="ml-auto font-mono text-[10px] text-foreground/20">1: Local</div>
          </div>

          {/* Terminal body */}
          <div className="p-5 font-mono text-xs leading-6">
            {/* ls posts/ */}
            <div className="flex items-center gap-1.5 text-foreground/50">
              <span className="text-accent/60">shellyfourer</span>
              <span className="text-foreground/30">~/portfolio/blog</span>
              <span className="text-accent-deep/70">%</span>
              <span>ls -la posts/</span>
            </div>
            <div className="mt-0.5 text-foreground/20">total 0</div>
            <div className="text-foreground/20">No posts yet.</div>

            {/* git log */}
            <div className="flex items-center gap-1.5 mt-3 text-foreground/50">
              <span className="text-accent/60">shellyfourer</span>
              <span className="text-foreground/30">~/portfolio/blog</span>
              <span className="text-accent-deep/70">%</span>
              <span>git log --oneline posts/</span>
            </div>
            <div className="mt-0.5 flex flex-col gap-0.5">
              <div className="text-foreground/35">
                <span className="text-syntax-function/70">a3f92c1</span>
                <span className="text-warning/45 ml-2">feat:</span>
                <span className="text-foreground/30 ml-1">scaffold blog structure</span>
              </div>
              <div className="text-foreground/30">
                <span className="text-syntax-function/50">b71e449</span>
                <span className="text-foreground/25 ml-2">plan first post topics</span>
              </div>
              <div className="text-foreground/30">
                <span className="text-syntax-function/50">c58d220</span>
                <span className="text-success/40 ml-2">init:</span>
                <span className="text-foreground/25 ml-1">blog module</span>
              </div>
            </div>

            {/* cat status.md */}
            <div className="flex items-center gap-1.5 mt-3 text-foreground/50">
              <span className="text-accent/60">shellyfourer</span>
              <span className="text-foreground/30">~/portfolio/blog</span>
              <span className="text-accent-deep/70">%</span>
              <span>cat status.md</span>
            </div>
            <div className="mt-0.5 border-l border-accent/20 pl-2 flex flex-col gap-0 text-[10px]">
              <div className="text-syntax-string/60"># Blog Status</div>
              <div className="text-foreground/25">
                <span className="text-syntax-key/60">status</span>
                <span className="text-foreground/20">: </span>
                <span className="text-syntax-string/50">&quot;coming soon&quot;</span>
              </div>
              <div className="text-foreground/25">
                <span className="text-syntax-key/60">eta</span>
                <span className="text-foreground/20">: </span>
                <span className="text-syntax-string/50">&quot;when it&apos;s ready&quot;</span>
              </div>
            </div>

            {/* Active prompt */}
            <div className="flex items-center gap-1.5 mt-3 text-foreground/50">
              <span className="text-accent/60">shellyfourer</span>
              <span className="text-foreground/30">~/portfolio/blog</span>
              <span className="text-accent-deep/70">%</span>
              <span className="cursor-blink text-accent/65">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
