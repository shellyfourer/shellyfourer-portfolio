import Link from 'next/link'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex items-center
            px-6 md:pr-24 lg:pl-16 lg:pr-40
            h-[calc(100svh-90px)] md:h-[calc(100svh-122px)] lg:h-[calc(100svh-148px)]"
    >
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 w-full items-center">
        {/* Left — text */}
        <div className="flex flex-col gap-8">
          <p className="font-mono text-sm text-accent/65 tracking-wide select-none">
            <span className="text-accent/30">{'//'} </span>about_me
          </p>
          <div className="flex items-stretch gap-2.5">
            <span className="w-0.5 bg-accent-2 shrink-0" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-1.6px]">
              I build digital experiences where logic meets intuition
            </h2>
          </div>
          <p className="text-lg md:text-xl font-medium text-text/80 leading-relaxed">
            I&#39;m Shelly, a multidisciplinary creative and software engineering student.
            Passionate about building things that speak to both the mind and the heart.
          </p>
          <Link href="/" className="btn-brand self-start">
            Learn more
          </Link>
        </div>

        {/* Right — IDE window with explorer + terminal panel */}
        <div
          className="hidden md:flex flex-col rounded-lg border border-border/30 overflow-hidden bg-surface"
          aria-hidden="true"
        >
          {/* Window chrome */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border/20 bg-surface-raised">
            <span className="w-3 h-3 rounded-full bg-mac-red/70" />
            <span className="w-3 h-3 rounded-full bg-mac-yellow/70" />
            <span className="w-3 h-3 rounded-full bg-mac-green/70" />
            <div className="ml-3 flex items-center gap-1 font-mono text-[10px]">
              <span className="text-text/25">portfolio</span>
              <span className="text-text/20"> › </span>
              <span className="text-text/50">shelly.ts</span>
              <span
                className="w-1.5 h-1.5 rounded-full bg-accent/60 ml-1"
                title="unsaved changes"
              />
            </div>
          </div>

          {/* Split: Explorer + Code */}
          <div className="flex flex-1">
            {/* File Explorer panel */}
            <div className="w-28 shrink-0 border-r border-border/15 py-1 font-mono text-[10px] bg-surface-raised/25 leading-6">
              <div className="px-3 py-0.5 text-[9px] uppercase tracking-widest text-text/20 mb-0.5">
                Explorer
              </div>
              <div className="px-1.5">
                <div className="flex items-center gap-1 px-1 py-0.5 text-text/35">
                  <span className="text-[8px]">▾</span>
                  <span>portfolio</span>
                </div>
                <div className="ml-3 flex flex-col">
                  <div className="flex items-center gap-1 px-1 py-0.5 bg-accent/10 text-accent/80 rounded-sm">
                    <span className="text-[8px] text-accent/50 font-bold leading-none">TS</span>
                    <span>shelly.ts</span>
                    <span className="ml-auto text-accent/60 text-[10px]">●</span>
                  </div>
                  <div className="flex items-center gap-1 px-1 py-0.5 text-text/25">
                    <span className="text-[8px] text-text/20 font-bold leading-none">TS</span>
                    <span>index.ts</span>
                  </div>
                  <div className="flex items-center gap-1 px-1 py-0.5 text-text/25">
                    <span className="text-[8px]">📄</span>
                    <span>resume.pdf</span>
                  </div>
                  <div className="flex items-center gap-1 px-1 py-0.5 text-text/25">
                    <span className="text-[8px]">▸</span>
                    <span>projects/</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Code panel */}
            <div className="p-4 font-mono text-xs leading-7 flex gap-3 flex-1 min-w-0">
              <div className="text-text/20 select-none text-right shrink-0 leading-7">
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <div className="flex-1 min-w-0 overflow-hidden">
                {/* Active line indicator */}
                <div className="relative -mx-1 pl-2.5 border-l-2 border-accent/50 bg-accent/[0.06]">
                  <span className="text-syn-keyword">const </span>
                  <span className="text-text/80">shelly</span>
                  <span className="text-text/40"> = {'{'}</span>
                </div>
                <div className="ml-4">
                  <span className="text-syn-key">role</span>
                  <span className="text-text/35">: </span>
                  <span className="text-syn-string">&quot;developer + artist&quot;</span>
                  <span className="text-text/35">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-syn-key">focus</span>
                  <span className="text-text/35">: </span>
                  <span className="text-syn-string">&quot;web + creativity&quot;</span>
                  <span className="text-text/35">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-syn-key">passion</span>
                  <span className="text-text/35">: </span>
                  <span className="text-syn-string">&quot;things that feel&quot;</span>
                  <span className="text-text/35">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-syn-key">status</span>
                  <span className="text-text/35">: </span>
                  <span className="text-syn-string">&quot;always building&quot;</span>
                </div>
                <div>
                  <span className="text-text/40">{'}'}</span>
                </div>
                <div className="mt-2">
                  <span className="text-syn-keyword/60">export default </span>
                  <span className="text-text/65">shelly</span>
                </div>
                <div className="mt-1">
                  <span className="inline-block w-2 h-[0.85em] bg-accent/50 cursor-blink align-middle" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom terminal panel */}
          <div className="border-t border-border/20 bg-surface-raised/40">
            {/* Panel tab bar */}
            <div className="flex items-center gap-4 px-4 py-1 border-b border-border/10 font-mono text-[10px]">
              <span className="text-accent/75 border-b border-accent/50 pb-0.5 -mb-1">
                Terminal
              </span>
              <span className="text-text/25 hover:text-text/40 transition-colors">Problems</span>
              <span className="text-text/25 hover:text-text/40 transition-colors">Output</span>
              <div className="ml-auto flex items-center gap-1 text-text/20">
                <span className="text-mac-green/55">✓</span>
                <span>0</span>
                <span className="text-mac-yellow/40 ml-1">⚠</span>
                <span>0</span>
              </div>
            </div>
            {/* Terminal output */}
            <div className="px-4 py-2 font-mono text-[10px] leading-5">
              <div className="flex items-center gap-1.5 text-text/45">
                <span className="text-accent/60">shellyfourer</span>
                <span className="text-text/30">~/portfolio</span>
                <span className="text-accent-2/65">%</span>
                <span>npx ts-node shelly.ts</span>
              </div>
              <div className="mt-0.5 text-text/30">
                {`{ role: 'developer + artist', status: 'always building' }`}
              </div>
              <div className="text-mac-green/55 mt-0.5">✓ Process exited with code 0</div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-accent/60">shellyfourer</span>
                <span className="text-text/30">~/portfolio</span>
                <span className="text-accent-2/65">%</span>
                <span className="cursor-blink text-accent/60">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
