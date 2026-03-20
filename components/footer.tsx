"use client"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-foreground/10 py-4 mt-20"
    >
      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-mono text-xs">
          <span className="text-green-500">GitHub:</span>
          <a
            href="https://github.com/ftbhabuk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-secondary hover:underline"
          >
            ftbhabuk
          </a>
          <span className="text-foreground-secondary/30">·</span>
          <span className="text-green-500">X:</span>
          <a
            href="https://x.com/FellowTravell20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-secondary hover:underline"
          >
            @FellowTravell20
          </a>
          <span className="text-foreground-secondary/30">·</span>
          <span className="text-green-500">Email:</span>
          <a
            href="mailto:ftraveller23@proton.me"
            className="text-foreground-secondary hover:underline"
          >
            ftraveller23[at]proton(dot)me
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
