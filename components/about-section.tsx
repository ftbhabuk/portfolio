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
                I'm a Computer Science student from Nepal with a passion for creative coding and literary exploration. I
                believe technology and storytelling can intersect beautifully.
              </p>
            </div>

            <div>
              <p className="body-text text-foreground-secondary">
                My interests span across full-stack development, AI-driven creative projects, and building tools that
                bridge the gap between code and art. I'm particularly drawn to projects that combine technical
                innovation with narrative depth.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col space-y-6 justify-start">
            <div>
              <p className="body-text text-foreground-secondary">
                Currently exploring integration of traditional systems  with LLMs, creating interactive platforms, and
                experimenting with generative art through code.
              </p>
            </div>

            <div>
              <p className="body-text text-foreground-secondary">
                When I'm not coding, you'll find me reading novels, writing poetry, or experimenting with new creative
                projects. Always open to collaborating on interesting ideas.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
