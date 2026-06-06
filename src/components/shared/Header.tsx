"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import MenuOverlay from "@/components/shared/MenuOverlay";

const navItems = [
  { label: "about.tsx", href: "/#about", section: "about" },
  { label: "projects.tsx", href: "/#projects", section: "projects" },
  { label: "blog.tsx", href: "/#blog", section: "blog" },
  { label: "contact.tsx", href: "/#contact", section: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { threshold: 0.5 }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-surface-raised border-b border-border/30 text-text select-none">

        {/* ── Title bar ── */}
        <div className="flex items-center gap-3 px-3 h-9 border-b border-border/15">

          <div className="hidden md:flex items-center gap-1.5 pr-3 border-r border-border/15 self-stretch py-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-mac-red/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-mac-yellow/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-mac-green/70" />
          </div>

          <div className="flex items-center gap-1 font-mono text-[11px] text-text/35">
            <Link href="/" className="text-default-gradient font-bold hover:opacity-70 transition-opacity">
              shelly
            </Link>
            <span className="text-text/20">/</span>
            <span>portfolio</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 font-mono text-[10px] text-text/25">
            <span className="w-1.5 h-1.5 rounded-full bg-mac-green/60" />
            <span>main</span>
          </div>

          <div className="flex-1" />

          {/* Hamburger — mobile only */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-8 h-8 text-text hover:opacity-70 transition-opacity"
          >
            <span className="relative w-4 h-4">
              <span className={`absolute inset-0 flex flex-col justify-center gap-1 transition-opacity duration-200 ${menuOpen ? "opacity-0" : "opacity-100"}`}>
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
              </span>
              <span className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${menuOpen ? "opacity-100" : "opacity-0"}`}>
                <span className="absolute block h-px w-4 bg-current rotate-45" />
                <span className="absolute block h-px w-4 bg-current -rotate-45" />
              </span>
            </span>
          </button>
        </div>

        {/* ── Tab bar — desktop only ── */}
        <nav className="hidden md:flex items-stretch h-8 font-mono overflow-x-auto">
          {navItems.map(({ label, href, section }) => {
            const active = activeSection === section;
            return (
              <Link
                key={label}
                href={href}
                className={`group relative flex items-center gap-2 px-4 text-[11px] whitespace-nowrap
                  border-r border-border/15 transition-colors duration-150
                  ${active
                    ? "bg-background/50 text-text/80"
                    : "text-text/30 hover:text-text/60 hover:bg-background/20"
                  }`}
              >
                {active && (
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-accent/75" />
                )}
                <span className={`text-[9px] font-bold px-0.5 py-px rounded-xs leading-none transition-colors duration-150
                  ${active ? "text-accent/70 bg-accent/10" : "text-accent-2/40 bg-accent-2/10"}`}>
                  TS
                </span>
                {label}
                <span className="ml-0.5 text-[10px] opacity-0 group-hover:opacity-35 transition-opacity duration-150">
                  ×
                </span>
              </Link>
            );
          })}
        </nav>

      </header>

      <AnimatePresence>
        {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}