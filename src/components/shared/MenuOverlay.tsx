"use client";
import Link from "next/link";
import { motion } from "motion/react";

type MenuOverlayProps = {
  onClose: () => void;
};

export default function MenuOverlay({ onClose }: MenuOverlayProps) {
  return (
    <motion.div
      id="mobile-menu"
      className="fixed left-0 right-0 bottom-0 top-22 z-40 bg-background/95 backdrop-blur-md flex justify-center items-center text-center"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      initial={{ opacity: 0, y: -16, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Backdrop – tap outside to close */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0"
      />
      <div className="relative">
        <nav className="flex flex-col gap-5 uppercase font-medium text-lg text-text">
          <Link href="/public" onClick={onClose} className="hover:text-accent-2 transition-colors">Home</Link>
          <Link href="/public" onClick={onClose} className="hover:text-accent-2 transition-colors">About</Link>
          <Link href="/public" onClick={onClose} className="hover:text-accent-2 transition-colors">Projects</Link>
          <Link href="/public" onClick={onClose} className="hover:text-accent-2 transition-colors">Blog</Link>
          <Link href="/public" onClick={onClose} className="hover:text-accent-2 transition-colors">Contact</Link>
        </nav>
      </div>
    </motion.div>
  );
}