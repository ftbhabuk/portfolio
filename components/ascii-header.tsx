"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

/**
 * The pixel-art portrait at the top of a page, the quick command links,
 * and a divider. Navigation stays in the sidebar / mobile menu.
 */
export function AsciiHeader() {
  return (
    <div className="mb-6 sm:mb-8">
      <div className="flex justify-center">
        <Link
          href="/"
          aria-label="Go to homepage"
          className="group block w-full max-w-[200px] transition-opacity hover:opacity-90"
        >
          <Image
            src="/images/ascii-portrait-dark.webp"
            alt="Pixel-art portrait of an anime girl"
            width={1178}
            height={980}
            priority
            unoptimized
            className="block h-auto w-full light:hidden"
          />
          <Image
            src="/images/ascii-portrait-light.webp"
            alt=""
            aria-hidden="true"
            width={1178}
            height={980}
            priority
            unoptimized
            className="hidden h-auto w-full light:block"
          />
        </Link>
      </div>

      <div className="mt-5 w-full border-t border-foreground/10 sm:mt-6" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-xs sm:gap-x-8 sm:text-sm"
      >
        <a
          href="#work"
          className="group flex items-center gap-2 text-foreground-secondary/60 transition-colors hover:text-foreground"
        >
          <span className="text-green-500">$</span>
          <span className="group-hover:underline underline-offset-4">ls projects</span>
        </a>

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
          <span className="group-hover:underline underline-offset-4">curl github →</span>
        </a>
      </motion.div>

      <div className="mt-5 w-full border-t border-foreground/15 sm:mt-6" />
    </div>
  )
}
