"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { WorkSection } from "@/components/work-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

type View = "hero" | "projects" | "writings" | "contact"

export default function Home() {
  const [currentView, setCurrentView] = useState<View>("hero")

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Terminal tab bar */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-background border-b border-foreground/10">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24 flex gap-2 font-mono text-xs">
          {[
            { id: "hero" as View, label: "~/" },
            { id: "projects" as View, label: "projects/" },
            { id: "writings" as View, label: "writings/" },
            { id: "contact" as View, label: "contact/" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setCurrentView(tab.id)}
              className={`px-4 py-2 border-b-2 transition-colors ${
                currentView === tab.id
                  ? "border-green-500 text-foreground"
                  : "border-transparent text-foreground-secondary/50 hover:text-foreground-secondary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content area - instant switch, no smooth fade */}
      <div className="pt-32">
        <AnimatePresence mode="wait">
          {currentView === "hero" && (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <HeroSection />
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
        </AnimatePresence>
      </div>

      <Footer />
    </main>
  )
}