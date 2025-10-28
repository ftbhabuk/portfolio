"use client"

import { motion } from "framer-motion"

const projects = [
  {
    id: 0,
    title: "poetry-web2",
    category: "Web Development",
    year: "2024",
    description:
      "A digital sanctuary for poetry and literary exploration. Built with TypeScript and Payload CMS as a headless backend, creating a platform for discovering and sharing poetic works.",
    link: "https://github.com/ftbhabuk/poetry-web2",
  },
  {
    id: 1,
    title: "Garden of Words",
    category: "AI & Literature",
    year: "2024",
    description:
      "An LLM modified for literature generation. Explores the intersection of artificial intelligence and creative writing, generating novel literary content.",
    link: "https://github.com/ftbhabuk/Garden_of_words",
  },
  {
    id: 2,
    title: "wave_animate",
    category: "Creative Coding",
    year: "2024",
    description:
      "2D vector embeddings for generating geometrical patterns in responsive canvas. Visualizes complex mathematical concepts through interactive animations.",
    link: "https://github.com/ftbhabuk/wave_animate",
  },
  {
    id: 3,
    title: "clash_automation",
    category: "Game Development",
    year: "2024",
    description:
      "Automation gameplay bot for resource farming with dynamic OCR and image preprocessing. Built with Python for intelligent game interaction.",
    link: "https://github.com/ftbhabuk/clash_automation",
  },
]

export function WorkSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="work" className="section-spacing">
      <div className="container-xl">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="section-title mb-24"
        >
          Selected Work
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-8 border-t border-foreground/10 transition-all duration-500 ease-out"
              >
                <div className="flex items-center justify-between">
                  <h3 className="project-title text-foreground/80 group-hover:text-foreground transition-colors duration-500 ease-out">
                    {project.title}
                  </h3>
                  <div className="meta-text text-foreground-secondary">{project.year}</div>
                </div>

                {/* Project description that appears on hover */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-out">
                  <p className="project-description text-foreground-secondary max-w-2xl pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 ease-out">
                    {project.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
