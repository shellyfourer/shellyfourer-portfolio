import Link from 'next/link'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-10 px-6 lg:px-16
        h-[calc(100svh-90px)] md:h-[calc(100svh-122px)] lg:h-[calc(100svh-148px)]"
    >
      {/* Terminal-style label */}
      <p className="font-mono text-sm text-text/40 tracking-wide select-none" aria-hidden="true">
        <span className="text-accent/60">shellyfourer</span>
        <span className="text-text/30"> ~/portfolio</span>
        <span className="text-accent-2/65"> % </span>
        <span className="text-text/55">./reach_out.sh</span>
      </p>

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1.6px] text-center">
        Are you interested in my work?
      </h2>

      {/* Terminal window */}
      <div
        className="w-full max-w-lg rounded-lg border border-border/30 overflow-hidden bg-surface"
        aria-hidden="true"
      >
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border/20 bg-surface-raised">
          <span className="w-3 h-3 rounded-full bg-mac-red/70" />
          <span className="w-3 h-3 rounded-full bg-mac-yellow/70" />
          <span className="w-3 h-3 rounded-full bg-mac-green/70" />
          <span className="ml-4 font-mono text-xs text-text/30">Terminal</span>
          <span className="ml-auto font-mono text-[10px] text-text/20">1: Local</span>
        </div>

        {/* Terminal body */}
        <div className="p-5 font-mono text-xs leading-6">
          {/* --list command */}
          <div className="flex items-center gap-1.5 text-text/50">
            <span className="text-accent/60">shellyfourer</span>
            <span className="text-text/30">~/portfolio</span>
            <span className="text-accent-2/70">%</span>
            <span>./reach_out.sh --list</span>
          </div>
          <div className="mt-1.5 flex flex-col gap-1 text-text/45 ml-1">
            <div className="flex gap-3">
              <span className="text-syn-key w-16 shrink-0">email</span>
              <span className="text-syn-string/80">shellyfourer@gmail.com</span>
            </div>
            <div className="flex gap-3">
              <span className="text-syn-key w-16 shrink-0">github</span>
              <span className="text-syn-function/75">github.com/shellyfourer</span>
            </div>
            <div className="flex gap-3">
              <span className="text-syn-key w-16 shrink-0">linkedin</span>
              <span className="text-syn-function/75">linkedin.com/in/shellyfourer</span>
            </div>
          </div>

          {/* --send command */}
          <div className="flex items-center gap-1.5 mt-4 text-text/50">
            <span className="text-accent/60">shellyfourer</span>
            <span className="text-text/30">~/portfolio</span>
            <span className="text-accent-2/70">%</span>
            <span>./reach_out.sh --send</span>
          </div>
          <div className="mt-1 text-text/30">Launching email client...</div>
          <div className="text-mac-green/55 mt-0.5">✓ Ready. Waiting for your message.</div>

          {/* Active prompt */}
          <div className="flex items-center gap-1.5 mt-3 text-text/50">
            <span className="text-accent/60">shellyfourer</span>
            <span className="text-text/30">~/portfolio</span>
            <span className="text-accent-2/70">%</span>
            <span className="cursor-blink text-accent/65">_</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <Link href="mailto:shellyfourer@gmail.com" className="btn-brand">
        send_message
      </Link>
    </section>
  )
}
