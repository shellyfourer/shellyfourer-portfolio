import Link from 'next/link'

export default function Philosophy() {
  return (
    <section className="px-6 py-10 flex flex-col items-center justify-center text-center min-h-screen-nav">
      <p className="font-mono text-sm text-accent/50 mb-6">{'// '}philosophy</p>

      <h2 className="text-h2 max-w-3xl mb-6 text-foreground/95">
        I don&apos;t separate{' '}
        <span className="font-serif italic bg-linear-to-r from-accent-deep to-accent-vivid bg-clip-text text-transparent">
          engineering
        </span>{' '}
        from{' '}
        <span className="font-serif italic bg-linear-to-r from-accent-deep to-accent-vivid bg-clip-text text-transparent">
          creativity
        </span>
        .
      </h2>

      <p className="text-base text-foreground/55 leading-relaxed max-w-lg mb-3">
        Some people see software as code. Some see it as business. I see it as another creative
        medium — one where the constraints are different, but the thinking is the same.
      </p>
      <p className="text-base text-foreground/55 leading-relaxed max-w-lg mb-10">
        Engineering and creativity aren&apos;t opposites. One is constrained by physics. The other
        by imagination. The best work happens when you stop pretending there&apos;s a difference.
      </p>

      <Link href="/#projects" className="btn-brand">
        See my work
      </Link>
    </section>
  )
}
