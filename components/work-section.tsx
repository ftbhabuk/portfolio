"use client"
import { motion } from "framer-motion"
import { useState } from "react"

const projects = [
  {
    id: 0,
    title: "termread",
    category: "CLI Tool",
    year: "2026",
    description:
      "CLI article reader that fetches any URL, strips ads and noise, and renders clean content in the terminal using Firefox's Readability algorithm and a custom ANSI renderer. Built a vim-style interactive pager with full-text search, pipe-friendly --raw mode, and Catppuccin-themed output.",
    liveLink: null,
    githubLink: "https://github.com/ftbhabuk/termread",
    tech: ["TypeScript", "Bun", "Readability", "ANSI"],
    status: "CLI"
  },
  {
    id: 1,
    title: "SX-Tracker",
    category: "Data Dashboard",
    year: "2026",
    description:
      "Live dashboard tracking 7,000+ Starlink satellites, Falcon 9/Heavy boosters, landing records, and aggregate SpaceX mission stats with daily auto-updates. Built a REST API with search, filtering, and per-satellite altitude history; automated data ingestion from CelesTrak & Space-Track via GitHub Actions cron jobs.",
    liveLink: "https://spacex-tracker-sx.pages.dev/",
    githubLink: "https://github.com/ftbhabuk/sx-tracker",
    tech: ["React", "FastAPI", "PostgreSQL", "GitHub Actions"],
    status: "LIVE"
  },
  {
    id: 2,
    title: "Spam Filter",
    category: "ML / NLP",
    year: "2025",
    description:
      "Naive Bayes email spam classifier built from scratch in Go, trained on the Enron dataset with a bag-of-words model and Laplace smoothing. Outputs accuracy metrics, confusion matrix, and ASCII bar charts; achieved strong classification performance on the held-out test set.",
    liveLink: null,
    githubLink: "https://github.com/ftbhabuk/spam-filter",
    tech: ["Go", "Naive Bayes", "NLP", "Enron Dataset"],
    status: "CLI"
  },
  {
    id: 3,
    title: "Unwhispered Perhaps",
    category: "Full-Stack CMS",
    year: "2024",
    description:
      "A personal literary sanctuary where I publish poems and stories. Features author galleries, community submissions, and an elegant reading experience. Full-stack publishing platform with a headless CMS enabling writers to manage and publish long-form work.",
    liveLink: "https://poetry-web2.onrender.com",
    githubLink: "https://github.com/ftbhabuk/poetry-web2",
    tech: ["Next.js", "TypeScript", "Payload CMS", "MongoDB", "Express"],
    status: "LIVE"
  },
  {
    id: 4,
    title: "Garden of Words",
    category: "AI & Literature",
    year: "2024",
    description:
      "AI poetry generation platform supporting multiple forms (haiku, sonnet, free verse) with user-controlled tone, mood, and style. Powered by Groq and OpenAI via custom prompt engineering for dynamic, content-aware creative outputs.",
    liveLink: "https://garden-of-words-lac.vercel.app",
    githubLink: "https://github.com/ftbhabuk/Garden_of_words",
    tech: ["Next.js", "TypeScript", "Groq API", "OpenAI", "Framer Motion"],
    status: "LIVE"
  },
  {
    id: 5,
    title: "Blue Sky",
    category: "Interactive Fiction",
    year: "2024",
    description:
      "My digital unpublished novel exploring longing, loss, and healing through immersive chapters. Combining original prose and poetry with cinematic scroll-driven UI, dynamic cloud formations that shift with the narrative, and atmospheric design.",
    liveLink: "https://blue-sky-mu.vercel.app",
    githubLink: "https://github.com/ftbhabuk/Blue-Sky",
    tech: ["Next.js", "TypeScript", "Three.js", "Web Audio API"],
    status: "LIVE"
  },
  {
    id: 6,
    title: "AV-Yoink",
    category: "Media Downloader",
    year: "2024",
    description:
      "Lightweight web app for downloading audio and video from YouTube URLs and Spotify playlists. Features smart metadata embedding, bot detection bypass, concurrent batch downloads, and clean playlist management.",
    liveLink: null,
    githubLink: "https://github.com/ftbhabuk/av-yoink",
    tech: ["Node.js", "Express", "yt-dlp", "FFmpeg", "Docker"],
    status: "ARCHIVED"
  },
  {
    id: 7,
    title: "Wave Simulation",
    category: "Creative Coding",
    year: "2024",
    description:
      "Interactive canvas-based visual simulation where clicks generate dynamic wave patterns and geometrical shapes. Features customizable wave properties, multiple shape modes (fractals, mandalas, spirals), gravity effects, and color palettes for creating generative art.",
    liveLink: "https://ftbhabuk.github.io/wave_animate/",
    githubLink: "https://github.com/ftbhabuk/wave_animate",
    tech: ["JavaScript", "HTML5 Canvas", "CSS3"],
    status: "LIVE"
  },
  {
    id: 8,
    title: "Chrome Extensions",
    category: "Browser Tools",
    year: "2024",
    description:
      "Collection of productivity extensions: website usage tracker with time monitoring and site blocking, plus trackpad swipe navigation for browser back/forward gestures. Built for better browsing experience on Linux.",
    liveLink: null,
    githubLink: "https://github.com/ftbhabuk/trackExtension",
    tech: ["JavaScript", "Chrome Extension API", "HTML", "CSS"],
    status: "ARCHIVED"
  },
  {
    id: 9,
    title: "COC Automation",
    category: "Game Automation",
    year: "2024",
    description:
      "Intelligent automation bot for Clash of Clans featuring computer vision-based resource detection, OCR text recognition, and strategic decision-making for farming, collector management, and automated attacks.",
    liveLink: null,
    githubLink: "https://github.com/ftbhabuk/clash_automation",
    tech: ["Python", "OpenCV", "Tesseract OCR", "Image Processing"],
    status: "ARCHIVED"
  },
]

export function WorkSection() {
  const [selectedProcess, setSelectedProcess] = useState<number | null>(null)

  const statusStyle = (status: string) => {
    switch (status) {
      case 'LIVE':
        return 'bg-green-500/10 text-green-500'
      case 'CLI':
        return 'bg-blue-500/10 text-blue-400'
      case 'ARCHIVED':
      default:
        return 'bg-foreground/5 text-foreground-secondary/50'
    }
  }

  return (
    <section id="work" className="min-h-screen px-5 py-16 sm:px-8 sm:py-20 md:px-16 lg:px-24">
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
            <span>~/projects</span>
          </div>
          <h2
            className="text-2xl md:text-3xl tracking-wider uppercase mb-2"
            style={{ fontFamily: 'var(--font-geist-pixel-square), monospace' }}
          >
            Process List
          </h2>
            <p className="font-mono text-xs text-foreground-secondary/50">
              Some of my recent works
            </p>
        </motion.div>

        {/* ASCII table header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-4 hidden border-b border-foreground/10 pb-2 font-mono text-xs text-foreground-secondary/40 md:block"
        >
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-1">PID</div>
            <div className="col-span-4">NAME</div>
            <div className="col-span-3">CATEGORY</div>
            <div className="col-span-2">YEAR</div>
            <div className="col-span-2">STATUS</div>
          </div>
        </motion.div>

        {/* Process list */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className="group border-b border-foreground/5 hover:bg-foreground/[0.02] transition-colors">
                <button
                  onClick={() => setSelectedProcess(selectedProcess === project.id ? null : project.id)}
                  className="w-full py-4 text-left"
                >
                  <div className="flex flex-col gap-3 font-mono md:grid md:grid-cols-12 md:items-center md:gap-2 md:text-sm">
                    <div className="text-xs text-foreground-secondary/60 md:col-span-1 md:text-sm">
                      {String(project.id).padStart(4, '0')}
                    </div>
                    <div className="md:col-span-4">
                      <div className="text-base text-foreground transition-colors group-hover:text-green-500 md:text-sm">
                        {project.title}
                      </div>
                      <div className="mt-1 text-xs text-foreground-secondary/60 md:hidden">
                        {project.category}
                      </div>
                    </div>
                    <div className="hidden text-xs text-foreground-secondary/60 md:col-span-3 md:block">
                      {project.category}
                    </div>
                    <div className="flex items-center justify-between gap-3 md:col-span-4 md:grid md:grid-cols-4 md:items-center">
                      <div className="text-xs text-foreground-secondary/50 md:col-span-2">
                        {project.year}
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded ${statusStyle(project.status)} md:justify-self-start`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Expanded details */}
                  {selectedProcess === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 border-l-2 border-green-500/30 pl-4 sm:pl-6"
                    >
                      <div className="space-y-3 font-mono text-xs">
                        <p className="text-foreground-secondary/70 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="text-foreground-secondary/60 bg-foreground/5 px-2 py-0.5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-4 pt-2">
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-green-500 hover:underline flex items-center gap-1"
                              onClick={(e) => e.stopPropagation()}
                            >
                              $ open demo →
                            </a>
                          )}
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground-secondary/60 hover:text-foreground hover:underline flex items-center gap-1"
                            onClick={(e) => e.stopPropagation()}
                          >
                            $ view source →
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 pt-4 border-t border-foreground/10 font-mono text-xs text-foreground-secondary/40"
        >
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>{projects.filter(p => p.status === 'LIVE').length} live</span>
            <span>{projects.filter(p => p.status === 'CLI').length} cli</span>
            <span>{projects.filter(p => p.status === 'ARCHIVED').length} archived</span>
            <span>{projects.length} total</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}