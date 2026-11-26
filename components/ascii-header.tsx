"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { ThemeToggle } from "@/components/theme-toggle"

/**
 * Quick terminal-style commands shown under the ASCII sky / page title.
 * This is the only navigation now — no sidebar or mobile menu.
 */
export function AsciiHeader() {
  return (
    <div className="mb-6 sm:mb-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-xs sm:gap-x-6 sm:text-sm"
      >
        <Link
          href="/#work"
          className="group flex items-center gap-2 text-foreground-secondary/60 transition-colors hover:text-foreground"
        >
          <span className="text-green-500">$</span>
          <span className="group-hover:underline underline-offset-4">ls projects</span>
        </Link>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-foreground-secondary/60 transition-colors hover:text-foreground"
        >
          <span className="text-green-500">$</span>
          <span className="group-hover:underline underline-offset-4">cat resume.pdf</span>
        </a>

        <a
          href="https://github.com/ftbhabuk"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-foreground-secondary/60 transition-colors hover:text-foreground"
        >
          <span className="text-green-500">$</span>
          <span className="group-hover:underline underline-offset-4">curl github</span>
        </a>

        <ThemeToggle />
      </motion.div>

      <div className="mt-5 w-full border-t border-foreground/15 sm:mt-6" />
    </div>
  )
}
