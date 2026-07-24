function CardChrome({
  badge,
  badgeClass,
  filename,
}: {
  badge: string
  badgeClass: string
  filename: string
}) {
  return (
    <div className="bg-surface-raised border-b border-border/20 flex items-center gap-2 px-4 py-2.5 shrink-0">
      <span
        className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center shrink-0 ${badgeClass}`}
      >
        <span className="font-mono text-[7px] font-bold leading-none">{badge}</span>
      </span>
      <span className="font-mono text-xs text-foreground/55">{filename}</span>
    </div>
  )
}

function CardFooter({ message, className }: { message: string[]; className: string }) {
  return (
    <div className={`px-4 py-2.5 border-t border-border/20 font-mono text-xs ${className}`}>
      {message.join('  ')}
    </div>
  )
}

export default function TechStack() {
  return (
    <section className="px-6 md:pl-16 md:pr-24 lg:pl-24 lg:pr-40 py-10 flex flex-col justify-center min-h-screen-nav">
      <p className="font-mono text-sm text-accent/50 mb-5">{'// '}tech_stack</p>

      <div className="flex items-stretch gap-2.5 mb-4">
        <span className="w-0.5 bg-accent-deep shrink-0 rounded-sm" />
        <h2 className="text-h2">
          Three ecosystems,{' '}
          <span className="font-serif italic bg-linear-to-r from-accent-deep to-accent-vivid bg-clip-text text-transparent">
            different problems
          </span>
        </h2>
      </div>

      <p className="text-base text-foreground/55 leading-relaxed mb-10 max-w-xl">
        Different problems deserve different tools. Each stack serves a distinct purpose — the
        choice depends on what&apos;s being built, not habit.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* ── Card 1: TypeScript / Next.js ──────────── */}
        <div className="flex flex-col rounded-window border border-border/30 overflow-hidden bg-surface">
          <CardChrome
            badge="TS"
            badgeClass="bg-warning/10 text-warning/70"
            filename="package.json"
          />
          <div className="p-4 font-mono text-[12.5px] leading-[22px] text-foreground/45 flex-1">
            <p className="italic text-syntax-comment">
              {'// This is where most of my agency work'}
            </p>
            <p className="italic text-syntax-comment">
              {'// lives. Roket client sites, MVPs, SaaS —'}
            </p>
            <p className="italic text-syntax-comment mb-2">
              {'// anything that needs to move fast.'}
            </p>
            <p>{'{'}</p>
            <p>
              {'  '}
              <span className="text-syntax-key">&quot;runtime&quot;</span>
              {':  '}
              <span className="text-syntax-string">&quot;Next.js + React&quot;</span>,
            </p>
            <p>
              {'  '}
              <span className="text-syntax-key">&quot;language&quot;</span>
              {': '}
              <span className="text-syntax-string">&quot;TypeScript&quot;</span>,
            </p>
            <p>
              {'  '}
              <span className="text-syntax-key">&quot;styling&quot;</span>
              {'  '}
              {': '}
              <span className="text-syntax-string">&quot;Tailwind CSS&quot;</span>,
            </p>
            <p>
              {'  '}
              <span className="text-syntax-key">&quot;database&quot;</span>
              {': '}
              <span className="text-syntax-string">&quot;Supabase + Postgres&quot;</span>,
            </p>
            <p>
              {'  '}
              <span className="text-syntax-key">&quot;deploy&quot;</span>
              {'   '}
              {': '}
              <span className="text-syntax-string">&quot;Vercel&quot;</span>,
            </p>
            <p>
              {'  '}
              <span className="text-syntax-key">&quot;extras&quot;</span>
              {'   '}
              {': ['}
              <span className="text-syntax-string">&quot;Stripe&quot;</span>
              {', '}
              <span className="text-syntax-string">&quot;Resend&quot;</span>
              {', '}
              <span className="text-syntax-string">&quot;Zod&quot;</span>
              {']'}
            </p>
            <p>{'}'}</p>
          </div>
          <CardFooter
            message={['Fast to build.', 'Easy to iterate.']}
            className="text-accent/60 bg-accent-deep/[0.06]"
          />
        </div>

        {/* ── Card 2: Java / Spring Boot ────────────── */}
        <div className="flex flex-col rounded-window border border-border/30 overflow-hidden bg-surface">
          <CardChrome
            badge="JV"
            badgeClass="bg-syntax-number/10 text-syntax-number/70"
            filename="Application.java"
          />
          <div className="p-4 font-mono text-[12.5px] leading-[22px] text-foreground/45 flex-1">
            <p className="italic text-syntax-comment">{'// Not what I ship commercially — what'}</p>
            <p className="italic text-syntax-comment">
              {'// I study. Larger systems, architecture,'}
            </p>
            <p className="italic text-syntax-comment mb-2">
              {'// APIs built to outlast the team.'}
            </p>
            <p>
              <span className="text-warning/60">@SpringBootApplication</span>
            </p>
            <p>
              <span className="text-syntax-keyword">public class </span>
              <span className="text-foreground/75">Backend</span>
              {' {'}
            </p>
            <p>
              {'  '}
              <span className="text-syntax-key">core</span>
              {' = ['}
              <span className="text-syntax-string">&quot;Java&quot;</span>
              {', '}
              <span className="text-syntax-string">&quot;Spring Boot&quot;</span>
              {'];'}
            </p>
            <p>
              {'  '}
              <span className="text-syntax-key">infra</span>
              {' = ['}
              <span className="text-syntax-string">&quot;PostgreSQL&quot;</span>
              {', '}
              <span className="text-syntax-string">&quot;Docker&quot;</span>
              {'];'}
            </p>
            <p>
              {'  '}
              <span className="text-syntax-key">auth</span>
              {'  = ['}
              <span className="text-syntax-string">&quot;JWT&quot;</span>
              {', '}
              <span className="text-syntax-string">&quot;Spring Security&quot;</span>
              {'];'}
            </p>
            <p>
              {'  '}
              <span className="text-syntax-key">test</span>
              {'  = ['}
              <span className="text-syntax-string">&quot;JUnit&quot;</span>
              {', '}
              <span className="text-syntax-string">&quot;Testcontainers&quot;</span>
              {'];'}
            </p>
            <p>{'}'}</p>
          </div>
          <CardFooter
            message={['Built to scale.', 'Built to last.']}
            className="text-success/60 bg-success/[0.05]"
          />
        </div>

        {/* ── Card 3: C++ / Systems ─────────────────── */}
        <div className="flex flex-col rounded-window border border-border/30 overflow-hidden bg-surface">
          <CardChrome
            badge="C+"
            badgeClass="bg-syntax-function/10 text-syntax-function/70"
            filename="main.cpp"
          />
          <div className="p-4 font-mono text-[12.5px] leading-[22px] text-foreground/45 flex-1">
            <p className="italic text-syntax-comment">{'// Not for web. Not for clients.'}</p>
            <p className="italic text-syntax-comment">
              {'// For understanding how things actually'}
            </p>
            <p className="italic text-syntax-comment mb-2">
              {'// work: the memory model, the machine.'}
            </p>
            <p>
              <span className="text-syntax-number/80">#include </span>
              <span className="text-syntax-string">&lt;iostream&gt;</span>
            </p>
            <p>
              <span className="text-syntax-number/80">#include </span>
              <span className="text-syntax-string">&lt;SFML/Graphics.hpp&gt;</span>
            </p>
            <p>&nbsp;</p>
            <p className="italic text-syntax-comment">{'// C++ · STL · CMake · SFML'}</p>
            <p className="italic text-syntax-comment">{'// algorithms · data structures'}</p>
            <p className="italic text-syntax-comment">{'// understanding the machine'}</p>
            <p>&nbsp;</p>
            <p>
              <span className="text-syntax-keyword">int </span>
              <span className="text-syntax-function">main</span>
              {'() { '}
              <span className="text-syntax-keyword">return </span>
              <span className="text-syntax-number">0</span>
              {'; }'}
            </p>
          </div>
          <CardFooter
            message={['Performance.', 'Fundamentals.']}
            className="text-syntax-function/60 bg-syntax-function/[0.05]"
          />
        </div>
      </div>
    </section>
  )
}
