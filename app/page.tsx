"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { WorkSection } from "@/components/work-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { AboutSection } from "@/components/about-section"

type View = "hero" | "projects" | "writings" | "contact" | "about"

export default function Home() {
  const [currentView, setCurrentView] = useState<View>("hero")

  return (
    <main className="min-h-screen bg-background">
      {/* Single terminal tab bar - this IS the navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/10">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24 py-3 flex items-center justify-between">
          {/* Tabs */}
          <div className="flex gap-1 font-mono text-xs">
            {[
              { id: "hero" as View, label: "~/" },
              { id: "projects" as View, label: "projects/" },
              { id: "writings" as View, label: "writings/" },
              { id: "about" as View, label: "about/" },
              { id: "contact" as View, label: "contact/" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCurrentView(tab.id)}
                className={`px-3 py-1.5 transition-colors ${
                  currentView === tab.id
                    ? "bg-foreground/5 text-green-500"
                    : "text-foreground-secondary/50 hover:text-foreground-secondary hover:bg-foreground/[0.02]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          <ThemeToggle />
        </div>
      </div>

      {/* Content - starts below tab bar */}
      <div className="pt-14">
        <AnimatePresence mode="wait">
          {currentView === "hero" && (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <HeroSection onNavigate={setCurrentView} />
            </motion.div>
          )}
          
          {currentView === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <WorkSection />
            </motion.div>
          )}

          {currentView === "writings" && (
            <motion.div
              key="writings"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <BlogSection />
            </motion.div>
          )}

          {currentView === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <ContactSection />
            </motion.div>
          )}

          {currentView === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <AboutSection />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </main>
  )
}