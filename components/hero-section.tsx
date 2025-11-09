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
        staggerChildren: 0.2,
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
    <section className="min-h-screen flex items-center">
      <div className="container-xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h1 className="hero-title text-foreground/95 whitespace-normal opacity-[1] shadow-none">BHABUK BHATTARAI</h1>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-2xl">
            <p className="hero-subtitle text-foreground-secondary text-secondary text-2xl">
              {/* CS Student exploring creative coding, literature and art.   */}
              CS student  enclosed within my bubble :-:
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
