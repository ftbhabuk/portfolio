"use client"
import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="flex min-h-screen items-center px-5 py-16 sm:px-8 sm:py-20 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto w-full">
        {/* Terminal prompt */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-foreground-secondary/60 text-sm font-mono mb-12"
        >
          <span className="text-green-500">➜</span>
          <span>~/about_me</span>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-8 font-mono text-sm text-foreground-secondary/70 sm:space-y-10"
        >

          {/* ABOUT */}
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  className="space-y-4 leading-relaxed"
>
  <p>
    I build things on the web — mostly the kind that live somewhere between utility
    and art. Some of it ships, some of it doesn&apos;t, and I&apos;ve made peace with
    that ratio.
  </p>
  <p>
    I also write: poetry, stories, the occasional novel attempt, and blog posts about
    whatever&apos;s living in my head that week — Linux, anime, lately
    into spaceflight. The code and the writing tend to blur together — interactive
    fiction, generative experiments, things that feel a little more alive.
  </p>
  <p>
  Outside a terminal, I&apos;m usually a few chapters into an unfinished book, a
  John Mayer playlist running in the background, and staring at art longer than
  normal.
</p>
  <p className="text-foreground-secondary/40 text-xs pt-2">
    mood: (.-.) kiwi (.-.)
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
            <div className="flex flex-wrap gap-x-3 gap-y-2 text-foreground-secondary/80 sm:gap-x-4">
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
              <span className="ml-2">Open to work - looking for opportunities to build cool stuff</span>
            </div>
          </motion.div>

          {/* Back to top */}
          <div className="flex justify-center pt-8">
            <a
              href="#hero"
            className="border border-foreground-secondary/30 px-4 py-2 text-center text-xs font-mono text-foreground-secondary/50 transition-colors hover:border-green-500 hover:text-green-500"
            >
              ↑ Can I Go Up? Too Lazy To Scroll
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
