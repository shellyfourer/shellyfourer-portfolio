export default function Footer() {
  return (
    <footer
      className="font-mono text-[11px] select-none"
      style={{
        background: '#1A0035',
        borderTop: '1px solid rgba(108,85,135,0.3)',
        color: '#C4A8E4',
      }}
    >
      <div className="flex items-center h-6 px-0 gap-0">
        {/* ── Left group ── */}
        <div className="flex items-center flex-1 h-full">
          {/* Branch — accent-filled pill */}
          <div className="flex items-center gap-1.5 px-2.5 h-full bg-accent/20 hover:bg-accent/30 transition-colors">
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="6" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <path d="M6 9v6" />
              <circle cx="18" cy="9" r="3" />
              <path d="M6 6h5a7 7 0 0 1 7 7v3" />
            </svg>
            <span>main</span>
          </div>

          {/* Errors / warnings */}
          <div className="flex items-center gap-2.5 px-3 h-full hover:bg-white/5 transition-colors opacity-60">
            <span className="flex items-center gap-1">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              0
            </span>
            <span className="flex items-center gap-1">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              0
            </span>
          </div>
        </div>

        {/* ── Right group ── */}
        <div className="flex items-center h-full">
          {/* Social links */}
          <a
            href="https://github.com/shellyfourer"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 h-full flex items-center opacity-50 hover:opacity-90 hover:bg-white/5 transition-all"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shellyfourer"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 h-full flex items-center opacity-50 hover:opacity-90 hover:bg-white/5 transition-all"
          >
            LinkedIn
          </a>
          <a
            href="mailto:shellyfourer@gmail.com"
            className="px-2.5 h-full flex items-center opacity-50 hover:opacity-90 hover:bg-white/5 transition-all"
          >
            Email
          </a>

          <span className="h-3.5 w-px bg-white/10 mx-0.5" />

          {/* IDE info chips */}
          <span className="hidden lg:flex px-2.5 h-full items-center opacity-40 hover:opacity-70 hover:bg-white/5 transition-all">
            Ln 247, Col 1
          </span>
          <span className="hidden lg:flex px-2.5 h-full items-center opacity-40 hover:opacity-70 hover:bg-white/5 transition-all">
            Spaces: 2
          </span>
          <span className="px-2.5 h-full flex items-center opacity-40 hover:opacity-70 hover:bg-white/5 transition-all">
            UTF-8
          </span>
          <span className="px-2.5 h-full flex items-center opacity-55 hover:opacity-80 hover:bg-white/5 transition-all">
            TypeScript React
          </span>
          <span className="hidden lg:flex px-2.5 h-full items-center opacity-25 text-[10px]">
            © {new Date().getFullYear()} Shelly Fourer
          </span>
        </div>
      </div>
    </footer>
  )
}
