"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function AboutSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = `Bhabuk Bhattarai`
  
  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen py-20 px-8 md:px-16 lg:px-24 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Terminal prompt */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-foreground-secondary/60 text-sm font-mono mb-12"
        >
          <span className="text-green-500">➜</span>
          <span>~/about</span>
          <span className="text-foreground-secondary/40">$</span>
          <span>cat about.txt</span>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-mono text-sm space-y-10 text-foreground-secondary/70"
        >
          {/* NAME */}
          <div>
            <div className="text-foreground text-lg mb-2">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-2 h-4 bg-green-500 ml-1"
              />
            </div>
            <div className="text-foreground-secondary/60">
              Pokhara, Nepal
            </div>
          </div>

          {/* ABOUT */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-4 leading-relaxed"
          >
            <p>
              I build things on the web. Some of them work, some don't. The ones that do
              usually live somewhere between utility and art.
            </p>
            <p>
              I also write—poetry, stories, novels, the occasional rambling post. Sometimes the
              code and the writing blur together. Interactive fiction, generative experiments,
              things that feel alive.
            </p>
            <p>
            (.-.) kiwi (.-.)
            </p>
          </motion.div>

          {/* TECH STACK */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-green-500 mb-3">
              <span>stack list:</span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-foreground-secondary/80">
              <span>TypeScript</span>
              <span className="text-foreground-secondary/30">•</span>
              <span>Python</span>
              <span className="text-foreground-secondary/30">•</span>
              <span>JavaScript</span>
              <span className="text-foreground-secondary/30">•</span>
              <span>Next.js</span>
              <span className="text-foreground-secondary/30">•</span>
              <span>React</span>
              <span className="text-foreground-secondary/30">•</span>
              <span>Node.js</span>
              <span className="text-foreground-secondary/30">•</span>
              <span>Three.js</span>
              <span className="text-foreground-secondary/30">•</span>
              <span>Framer Motion</span>
              <span className="text-foreground-secondary/30">•</span>
              <span>Tailwind CSS</span>
            </div>
          </motion.div>

          {/* STATUS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <div className="text-green-500 mb-2">
              <span> status:</span>
            </div>
            <div className="text-foreground-secondary/80">
              <span className="text-green-500">◉</span>
              <span className="ml-2">Open to work — looking for opportunities to build cool stuff</span>
            </div>
          </motion.div>

          {/* Back to top */}
          <div className="flex justify-center pt-8">
            <a
              href="#hero"
              className="border border-foreground-secondary/30 px-4 py-2 text-foreground-secondary/50 hover:text-green-500 hover:border-green-500 text-xs font-mono transition-colors"
            >
              ↑ Can I Go Up? Too Lazy To Scroll
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
