import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'
import type { MDXRemoteProps } from 'next-mdx-remote/rsc'

function Anchor({ href = '', ...props }: ComponentPropsWithoutRef<'a'>) {
  const isInternal = href.startsWith('/') || href.startsWith('#')
  const className =
    'text-accent/80 underline underline-offset-2 decoration-accent/30 hover:text-accent hover:decoration-accent/70 transition-colors'

  if (isInternal) {
    return <Link href={href} className={className} {...props} />
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props} />
  )
}

export const mdxComponents: MDXRemoteProps['components'] = {
  h2: (props) => (
    <h2 className="text-h2 text-foreground/95 font-medium mt-14 mb-4" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-h3 text-foreground/90 font-medium mt-10 mb-3" {...props} />
  ),
  p: (props) => <p className="text-base text-foreground/80 leading-relaxed mb-5" {...props} />,
  ul: (props) => (
    <ul className="list-disc pl-6 mb-5 space-y-1.5 text-foreground/80" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal pl-6 mb-5 space-y-1.5 text-foreground/80" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-accent/50 pl-5 my-6 text-foreground/60 italic"
      {...props}
    />
  ),
  a: Anchor,
  strong: (props) => <strong className="text-foreground/95 font-semibold" {...props} />,
  em: (props) => <em className="font-serif italic text-foreground/85" {...props} />,
  hr: (props) => <hr className="border-border/30 my-10" {...props} />,
  // Fenced code block — rehype-pretty-code emits a styled <pre data-language=...>
  pre: (props) => (
    <pre
      className="my-6 lg:-mx-12 rounded-window border border-border/30 bg-surface p-5 overflow-x-auto text-sm font-mono leading-relaxed text-foreground/80"
      {...props}
    />
  ),
  // Block code (inside <pre>) carries an inline `style` from rehype-pretty-code;
  // inline code does not. Style only the inline case; let block code pass through
  // so Shiki's tokens render untouched.
  code: (props: ComponentPropsWithoutRef<'code'>) =>
    props.style !== undefined ? (
      <code {...props} />
    ) : (
      <code
        className="font-mono text-sm text-syntax-key bg-surface-raised px-1.5 py-0.5 rounded"
        {...props}
      />
    ),
}
