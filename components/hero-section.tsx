"use client"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export function HeroSection() {
  const isMobile = useMobile()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  const itemVariants = {
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

  return (
    <section className="min-h-screen flex items-center">
      <div className="container-xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl"
        >
          <motion.div variants={itemVariants} className="mb-10">
            <h1 className="text-5xl md:text-6xl font-light text-foreground/95 mb-8 tracking-tight">
              BHABUK BHATTARAI
            </h1>
            <p className="hero-subtitle text-foreground-secondary text-secondary text-2xl">
              {/* CS Student exploring creative coding, literature and art.   */}
              CS student  enclosed within my bubble :-:
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-5 text-base md:text-lg text-foreground-secondary/85 leading-relaxed max-w-2xl"
          >
            <p>
              I build projects blending code with creativity; generative art, interactive narratives, and AI models.
            </p>
            <p>
              When not coding, I read novels, write poetry, sketch ideas, and stay terminally online chasing new tech, tools.
            </p>
            <p>
              From Nepal !
               {/* always open to chatting about projects, books, music, or whatever's on your mind. */}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}