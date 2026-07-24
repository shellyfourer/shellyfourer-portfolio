const commits = [
  {
    hash: 'a1b2c3d',
    type: 'init:',
    message: 'born curious',
    desc: "asking 'how' and 'why' since day one",
    head: false,
  },
  {
    hash: '4e5f6a7',
    type: 'feat(art):',
    message: 'arts, music, film',
    desc: 'stories are what move people',
    head: false,
  },
  {
    hash: '8b9c0d1',
    type: 'feat(logic):',
    message: 'math & science',
    desc: 'beauty in structure and proof',
    head: false,
  },
  {
    hash: '2e3f4a5',
    type: 'feat(code):',
    message: 'the first line',
    desc: 'a canvas that computes — hooked',
    head: false,
  },
  {
    hash: 'c9d0e1f',
    type: 'feat(agency):',
    message: 'web developer @ roket',
    desc: 'real clients, production code, every week',
    head: false,
  },
  {
    hash: 'f2a3b4c',
    type: 'feat(freelance):',
    message: 'full-stack, own clients',
    desc: 'concept to deployment, end-to-end ownership',
    head: false,
  },
  {
    hash: 'd6e7f89',
    type: 'merge:',
    message: 'art × engineering',
    desc: 'creative developer — always building',
    head: true,
  },
]

export default function GitTimeline() {
  return (
    <section className="px-6 md:pl-16 md:pr-24 lg:pl-24 lg:pr-40 py-10 flex flex-col justify-center min-h-screen-nav">
      <p className="font-mono text-sm text-accent/50 mb-4">~ % git log --reverse</p>

      <div className="flex items-stretch gap-2.5 mb-10">
        <span className="w-0.5 bg-accent-deep shrink-0 rounded-sm" />
        <h2 className="text-h2">
          The{' '}
          <span className="font-serif italic bg-linear-to-r from-accent-deep to-accent-vivid bg-clip-text text-transparent">
            story
          </span>{' '}
          so far
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {commits.map((commit) => (
          <div key={commit.hash} className="flex gap-3 items-stretch">
            <div
              className={`w-0.5 shrink-0 rounded-full ${
                commit.head
                  ? 'bg-linear-to-b from-accent-deep to-accent-vivid'
                  : 'bg-accent-deep/40'
              }`}
            />
            <div className="flex flex-col gap-0.5 pb-1">
              <p className="font-mono text-sm text-foreground/95">
                <span className="text-syntax-function/80">{commit.hash}</span>
                {'  '}
                <span className="text-warning/70">{commit.type}</span>
                {'  '}
                {commit.message}
              </p>
              <p className="text-sm text-foreground/50">{commit.desc}</p>
              {commit.head && (
                <span className="mt-1 inline-block w-fit font-mono text-[11px] text-success/80 border border-success/45 bg-success/[0.08] rounded px-2 py-0.5">
                  HEAD → main
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
