const ArtistPane = () => (
  <div className="p-6 font-mono text-[13px] leading-[27px] text-foreground/55">
    <p className="text-accent/85"># artist.md</p>
    <p>&nbsp;</p>
    <p className="text-accent/55">## background</p>
    <p>
      <span className="text-foreground/30">- </span>fine arts — color &amp; composition
    </p>
    <p>
      <span className="text-foreground/30">- </span>music — rhythm &amp; feeling
    </p>
    <p>
      <span className="text-foreground/30">- </span>theater / film — storytelling &amp; light
    </p>
    <p>&nbsp;</p>
    <p className="italic text-syntax-string/60">{`> technology is not just a tool —`}</p>
    <p className="italic text-syntax-string/60">{`> it is a medium for expression,`}</p>
    <p className="italic text-syntax-string/60">{`> storytelling, and connection.`}</p>
  </div>
)

const EngineerPane = () => (
  <div className="p-6 font-mono text-[13px] leading-[27px] text-foreground/40">
    <p className="text-foreground/55">engineer.log</p>
    <p>&nbsp;</p>
    <p>
      <span className="text-syntax-function/70">[STUDYING] </span>
      software engineering
    </p>
    <p>
      <span className="text-success/65">[AGENCY] </span>
      web dev @ roket.lt
    </p>
    <p>
      <span className="text-foreground/25">{'            '}</span>
      <span className="text-foreground/45">shopify · wordpress · custom sites</span>
    </p>
    <p>
      <span className="text-success/65">[FREELANCE] </span>
      full-stack, concept → deploy
    </p>
    <p>&nbsp;</p>
    <p>
      <span className="text-accent/50">[APPROACH] </span>
      clarity over cleverness
    </p>
    <p>
      <span className="text-accent/50">[STATUS] </span>
      always shipping, always learning
    </p>
  </div>
)

export default function TwoProcesses() {
  return (
    <section className="px-6 md:pl-16 md:pr-24 lg:pl-24 lg:pr-40 py-10 flex flex-col justify-center min-h-screen-nav">
      <p className="font-mono text-sm text-accent/50 mb-5">{'// '}two_processes</p>

      <div className="flex items-stretch gap-2.5 mb-8 md:mb-12">
        <span className="w-0.5 bg-accent-deep shrink-0 rounded-sm" />
        <h2 className="text-h2">
          Two processes,{' '}
          <span className="font-serif italic bg-linear-to-r from-accent-deep to-accent-vivid bg-clip-text text-transparent">
            one person
          </span>
        </h2>
      </div>

      {/* Mobile — two stacked cards */}
      <div className="flex flex-col gap-4 md:hidden">
        <div className="rounded-window border border-border/30 overflow-hidden bg-surface">
          <div className="bg-surface-raised px-4 py-2 border-b border-border/20">
            <span className="font-mono text-xs text-accent/70">0:artist — artist.md</span>
          </div>
          <ArtistPane />
        </div>
        <div className="rounded-window border border-border/30 overflow-hidden bg-surface">
          <div className="bg-surface-raised px-4 py-2 border-b border-border/20">
            <span className="font-mono text-xs text-accent/70">1:engineer — engineer.log</span>
          </div>
          <EngineerPane />
        </div>
      </div>

      {/* Desktop — tmux split window */}
      <div className="hidden md:flex flex-col rounded-window border border-border/30 overflow-hidden bg-surface">
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border/20 bg-surface-raised">
          <span className="w-3 h-3 rounded-full bg-danger/70" />
          <span className="w-3 h-3 rounded-full bg-warning/70" />
          <span className="w-3 h-3 rounded-full bg-success/70" />
          <span className="ml-2 font-mono text-[11px] text-foreground/35">
            tmux — shelly@studio
          </span>
        </div>
        <div className="grid grid-cols-2 divide-x divide-border/25">
          <ArtistPane />
          <EngineerPane />
        </div>
        <div className="bg-surface-accent px-3 py-1.5 font-mono text-[11px] flex justify-between border-t border-border/20">
          <span className="text-success/75">[studio] 0:artist.md* &nbsp; 1:engineer.log-</span>
          <span className="text-foreground/45">shelly@studio — 2 panes, 1 session</span>
        </div>
      </div>
    </section>
  )
}
