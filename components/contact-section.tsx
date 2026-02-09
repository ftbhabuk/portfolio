"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("ftraveller23@gmail.com")
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <section id="contact" className="min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Terminal header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 text-foreground-secondary/60 text-sm font-mono mb-2">
            <span className="text-green-500">➜</span>
            <span>~/contact</span>
          </div>
          <h2 
            className="text-2xl md:text-3xl tracking-wider uppercase"
            style={{ fontFamily: 'var(--font-geist-pixel-square), monospace' }}
          >
            WHOIS Query
          </h2>
        </motion.div>

        {/* ASCII border top */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-xs text-foreground-secondary/30 mb-6 origin-left"
        >
          ┌{'─'.repeat(60)}┐
        </motion.div>

        {/* WHOIS output */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-mono text-sm space-y-4 mb-6"
        >
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-start gap-4"
          >
            <span className="text-foreground-secondary/50 w-32 flex-shrink-0">email:</span>
            <div className="flex items-center gap-2 flex-1">
              <a
                href="mailto:ftraveller23@gmail.com"
                className="text-green-500 hover:underline"
              >
                ftraveller23@gmail.com
              </a>
              <button
                onClick={copyEmail}
                className="text-foreground-secondary/40 hover:text-foreground-secondary transition-colors text-xs"
                aria-label="Copy email"
              >
                [{emailCopied ? 'copied' : 'copy'}]
              </button>
            </div>
          </motion.div>

          {/* GitHub */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex items-start gap-4"
          >
            <span className="text-foreground-secondary/50 w-32 flex-shrink-0">github:</span>
            <a
              href="https://github.com/ftbhabuk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-secondary hover:text-green-500 transition-colors"
            >
              github.com/ftbhabuk →
            </a>
          </motion.div>

          {/* Twitter */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="flex items-start gap-4"
          >
            <span className="text-foreground-secondary/50 w-32 flex-shrink-0">twitter:</span>
            <a
              href="https://x.com/FellowTravell20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-secondary hover:text-green-500 transition-colors"
            >
              @FellowTravell20 →
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex items-start gap-4"
          >
            <span className="text-foreground-secondary/50 w-32 flex-shrink-0">location:</span>
            <span className="text-foreground-secondary">Kathmandu, Nepal</span>
          </motion.div>

          {/* Status */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="flex items-start gap-4"
          >
            <span className="text-foreground-secondary/50 w-32 flex-shrink-0">status:</span>
            <span className="text-green-500">◉ Open to collaboration</span>
          </motion.div>

          {/* Timezone */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0 }}
            className="flex items-start gap-4"
          >
            <span className="text-foreground-secondary/50 w-32 flex-shrink-0">timezone:</span>
            <span className="text-foreground-secondary/60">UTC+5:45</span>
          </motion.div>
        </motion.div>

        {/* ASCII border bottom */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="font-mono text-xs text-foreground-secondary/30 origin-left"
        >
          └{'─'.repeat(60)}┘
        </motion.div>

        {/* Pixel decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3 }}
          className="mt-12 flex gap-1 opacity-20"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.1,
                ease: "easeInOut" 
              }}
              className="w-1 h-1 bg-green-500"
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}