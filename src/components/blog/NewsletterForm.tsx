'use client'

import { useState } from 'react'

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, firstName, lastName }),
    })

    if (res.ok) {
      setStatus('success')
      setFirstName('')
      setLastName('')
      setEmail('')
    } else {
      setStatus('error')
    }
  }

  const inputClass = `flex-1 min-w-0 bg-foreground/5 border border-foreground/10 rounded-lg px-3 ${compact ? 'py-1.5 text-xs' : 'py-2 text-sm'} outline-none focus:border-accent transition-colors placeholder:text-foreground/30`

  return (
    <div className={`border border-foreground/10 rounded-xl ${compact ? 'p-4' : 'p-6 md:p-8'} flex flex-col gap-3`}>
      <div className="flex flex-col gap-0.5">
        <p className={`font-mono ${compact ? 'text-xs' : 'text-sm'} text-accent`}>// newsletter</p>
        <h3 className={`${compact ? 'text-base' : 'text-xl'} font-semibold`}>Get new posts in your inbox</h3>
        <p className={`${compact ? 'text-xs' : 'text-sm'} text-foreground/55`}>No spam. Unsubscribe any time.</p>
      </div>

      {status === 'success' ? (
        <p className={`${compact ? 'text-xs' : 'text-sm'} text-accent`}>You&apos;re in, check your inbox for a welcome email.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-1.5">
          <div className="flex gap-1.5">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              required
              className={inputClass}
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              className={inputClass}
            />
          </div>
          <div className="flex gap-1.5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className={inputClass}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`bg-accent text-background font-mono ${compact ? 'text-xs px-3 py-1.5' : 'text-sm px-5 py-2'} rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 whitespace-nowrap cursor-pointer`}
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
        </form>
      )}

      {status === 'error' && (
        <p className={`${compact ? 'text-xs' : 'text-sm'} text-red-400`}>Something went wrong, try again.</p>
      )}
    </div>
  )
}