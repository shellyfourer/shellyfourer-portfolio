import * as React from 'react'

export function WelcomeEmail() {
  return (
    <div style={{ fontFamily: 'sans-serif', color: '#111', maxWidth: 600, lineHeight: 1.6 }}>
      <p>Hi,</p>

      <p>
        I&apos;m Shelly, a 21 year old software engineering student that already works in the
        industry.
      </p>

      <p>
        I don&apos;t only write about reverse engineering, but also about the things nobody explains
        in tutorials: the &quot;who owns this?&quot; bugs, why your UI is lying to you, how to
        think about systems, and what it actually looks like to be young and building a career in
        this industry at the same time.
      </p>

      <p>
        I also make videos on YouTube and Instagram where I teach programming, ecommerce
        development, and share the journey.
      </p>

      <p>Find me here:</p>
      <ul>
        <li>
          <a href="https://instagram.com/byshellyfourer" style={{ color: '#111' }}>
            Instagram: instagram.com/byshellyfourer
          </a>
        </li>
        <li>
          <a href="https://youtube.com/@byshellyfourer" style={{ color: '#111' }}>
            YouTube: youtube.com/@byshellyfourer
          </a>
        </li>
        <li>
          <a href="https://tiktok.com/@byshellyfourer" style={{ color: '#111' }}>
            TikTok: tiktok.com/@byshellyfourer
          </a>
        </li>
        <li>
          <a href="https://github.com/shellyfourer" style={{ color: '#111' }}>
            GitHub: github.com/shellyfourer
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/shellyfourer" style={{ color: '#111' }}>
            LinkedIn: linkedin.com/in/shellyfourer
          </a>
        </li>
      </ul>

      <p>
        See you in the next one,
        <br />
        Shelly
      </p>
    </div>
  )
}