"use client"

import { motion } from "framer-motion"

export function ContactSection() {
  return (
    <section id="contact" className="min-h-[50vh] py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl mb-4">Let&apos;s connect</h2>
          <p className="text-foreground-secondary/60 text-sm">
            Find me at the bottom or just scroll up ✌️
          </p>
        </motion.div>
      </div>
    </section>
  )
}
