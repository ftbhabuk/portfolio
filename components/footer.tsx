"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Footer() {
  const [uptime, setUptime] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    const interval = setInterval(() => {
      const seconds = Math.floor((Date.now() - startTime) / 1000)
      setUptime(seconds)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatUptime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}m ${secs}s`
  }

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-foreground/10 py-6 mt-20"
    >
      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-foreground-secondary/40">
          {/* Left: Build info */}
          <div className="flex items-center gap-4">
            <span>v2.0.0</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">next.js 15</span>
          </div>

          {/* Center: Uptime */}
          <div className="flex items-center gap-2">
            <span className="text-green-500">◉</span>
            <span>uptime: {formatUptime(uptime)}</span>
          </div>

          {/* Right: Credit */}
          <div>
            <a
              href="https://x.com/FellowTravell20"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors"
            >
              @bhabuk
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}