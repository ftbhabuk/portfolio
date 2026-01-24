"use client"
import { motion } from "framer-motion"
import { useState } from "react"

const projects = [
  {
    id: 0,
    title: "Unwhispered Perhaps",
    category: "Full-Stack CMS",
    year: "2024",
    description:
      "A personal literary sanctuary where I publish my poems and stories. Features author galleries, community submissions, and an elegant reading experience for exploring poetic works.",
    liveLink: "https://poetry-web2.onrender.com",
    githubLink: "https://github.com/ftbhabuk/poetry-web2",
    tech: ["Next.js", "TypeScript", "Payload CMS", "MongoDB", "Express"]
  },
  {
    id: 1,
    title: "Garden of Words",
    category: "AI & Literature",
    year: "2024",
    description:
      "AI-powered poetry generator that transforms prompts into verses across multiple forms (Haiku, Sonnet, Free Verse). Features customizable styles, tones, and intelligent creative outputs through fine-tuned language models.",
    liveLink: "https://garden-of-words-lac.vercel.app",
    githubLink: "https://github.com/ftbhabuk/Garden_of_words",
    tech: ["Next.js", "TypeScript", "Groq API", "OpenAI", "Framer Motion"]
  },
  {
    id: 2,
    title: "Blue Sky",
    category: "Interactive Fiction",
    year: "2024",
    description:
    //  from my unpublsished novel book "uperhaps" 
      "My  digital unpublshed novel exploring longing, loss, and healing through interactive chapters. Featuring dynamic cloud formations that shift with the narrative and scroll-triggered atmospheric audio.",
    liveLink: "https://blue-sky-mu.vercel.app",
    githubLink: "https://github.com/ftbhabuk/Blue-Sky",
    tech: ["Next.js", "TypeScript", "Three.js", "Web Audio API"]
  },
  {
    id: 3,
    title: "AV-Yoink",
    category: "Media Downloader",
    year: "2024",
    description:
      "Lightweight web app for downloading audio and video from YouTube URLs and Spotify playlists. Features smart metadata embedding, bot detection bypass, concurrent batch downloads, and clean playlist management.",
    liveLink: null,
    githubLink: "https://github.com/ftbhabuk/av-yoink",
    tech: ["Node.js", "Express", "yt-dlp", "FFmpeg", "Docker"]
  },
  {
    id: 4,
    title: "Wave Simulation",
    category: "Creative Coding",
    year: "2024",
    description:
      "Interactive canvas-based visual simulation where clicks generate dynamic wave patterns and geometrical shapes. Features customizable wave properties, multiple shape modes (fractals, mandalas, spirals), gravity effects, and color palettes for creating mesmerizing generative art.",
    liveLink: "https://ftbhabuk.github.io/wave_animate/",
    githubLink: "https://github.com/ftbhabuk/wave_animate",
    tech: ["JavaScript", "HTML5 Canvas", "CSS3"]
  },
  {
    id: 5,
    title: "Chrome Extensions",
    category: "Browser Tools",
    year: "2024",
    description:
      "Collection of productivity extensions: website usage tracker with time monitoring and site blocking, plus trackpad swipe navigation for browser back/forward gestures. Built for better browsing experience on Linux.",
    liveLink: null,
    githubLink: "https://github.com/ftbhabuk/trackExtension",
    tech: ["JavaScript", "Chrome Extension API", "HTML", "CSS"]
  },
  {
    id: 6,
    title: "COC Automation",
    category: "Game Automation",
    year: "2024",
    description:
      "Intelligent automation bot for Clash of Clans featuring computer vision-based resource detection, OCR text recognition, and strategic decision-making for farming, collector management, and automated attacks.",
    liveLink: null,
    githubLink: "https://github.com/ftbhabuk/clash_automation",
    tech: ["Python", "OpenCV", "Tesseract OCR", "Image Processing"]
  },
]

export function WorkSection() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  
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
              <div className="group block py-8 border-t border-foreground/10 transition-all duration-500 ease-out">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    className="project-title text-foreground/80 group-hover:text-foreground transition-colors duration-500 ease-out text-left"
                  >
                    {project.title}
                  </button>
                  <div className="meta-text text-foreground-secondary">{project.year}</div>
                </div>

                {/* Content that shows on hover (desktop) or click (mobile) */}
                <div className={`max-h-0 overflow-hidden transition-all duration-500 ease-out ${
                  expandedProject === project.id ? 'max-h-40' : 'group-hover:max-h-40'
                }`}>
                  <p className={`project-description text-foreground-secondary max-w-2xl pt-4 transition-opacity duration-500 delay-100 ease-out ${
                    expandedProject === project.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    {project.description}
                  </p>

                  <div className={`flex items-center gap-6 pt-4 transition-opacity duration-500 delay-150 ease-out ${
                    expandedProject === project.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs text-foreground-secondary/70 bg-foreground/5 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        {/* Demo button - only show if liveLink exists */}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 text-foreground-secondary/70 hover:text-primary transition-all duration-300 p-2"
                            aria-label="View live demo"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M21.71,8.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,8H16.71a11.78,11.78,0,0,0-10.6,6.55,1,1,0,0,0,.44,1.34A.93.93,0,0,0,7,16a1,1,0,0,0,.89-.55A9.81,9.81,0,0,1,16.71,10h1.88l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,8.29Z" style={{ fill: 'rgb(44, 169, 188)' }} />
                              <path d="M20,21H4a2,2,0,0,1-2-2V5A2,2,0,0,1,4,3h8a1,1,0,0,1,0,2H4V19H20V16a1,1,0,0,1,2,0v3A2,2,0,0,1,20,21Z" />
                            </svg>
                          </a>
                        )}
                        
                        {/* GitHub icon */}
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 text-foreground-secondary/70 hover:text-foreground transition-all duration-300 p-2"
                          aria-label="View source code on GitHub"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}