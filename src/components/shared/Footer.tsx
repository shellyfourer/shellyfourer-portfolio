export default function Footer() {
  return (
    <footer className="bg-surface-raised border-t border-border/30 font-mono text-text">
      <div className="flex items-center h-7 px-3 text-[11px] text-text/35">

        {/* Left — git branch + copyright */}
        <div className="flex items-center gap-3 flex-1">
          <div className="flex items-center gap-1.5 pr-3 border-r border-border/15">
            <span className="w-1.5 h-1.5 rounded-full bg-mac-green/60" />
            <span>main</span>
          </div>
          <span className="text-text/20">© {new Date().getFullYear()} Shelly Fourer</span>
        </div>

        {/* Right — social links + IDE info chips */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/shellyfourer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text/70 transition-colors duration-150"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shellyfourer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text/70 transition-colors duration-150"
          >
            LinkedIn
          </a>
          <a
            href="mailto:shellyfourer@gmail.com"
            className="hover:text-text/70 transition-colors duration-150"
          >
            Email
          </a>
          <span className="text-border/40 pl-0.5">|</span>
          <span className="text-text/15">UTF-8</span>
          <span className="text-text/15">TypeScript</span>
        </div>

      </div>
    </footer>
  );
}