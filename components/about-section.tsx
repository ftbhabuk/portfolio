"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  return (
    <section id="about" className="section-spacing">
      <div className="container-xl">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="section-title mb-24"
        >
          About
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24"
        >
          <motion.div variants={itemVariants} className="flex flex-col space-y-16">
  <div>
    <p className="body-text text-foreground-secondary">
      I'm a Computer Science student from Nepal who spends way too much time playing with AI models and turning code into something creative.
    </p>
  </div>
  <div>
    <p className="body-text text-foreground-secondary">
      I love building weird interactive things — generative art, literature tools, strange web experiments — basically anything where tech meets imagination.
    </p>
  </div>
</motion.div>

<motion.div variants={itemVariants} className="flex flex-col space-y-6 justify-start">
  <div>
    <p className="body-text text-foreground-secondary">
      Outside coding, I'm usually lost in novels, writing poems or short stories, messing around with music, or sketching random ideas.
    </p>
  </div>
  <div>
    <p className="body-text text-foreground-secondary">
      Always down to chat about wild project ideas, creativity, literature, or just share playlists. Hit me up if something sounds fun.
    </p>
  </div>
</motion.div>
        </motion.div>
      </div>
    </section>
  )
}
