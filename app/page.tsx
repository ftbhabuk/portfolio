"use client"
import { useState, useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { WorkSection } from "@/components/work-section"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { AboutSection } from "@/components/about-section"

const sections = [
  { id: "hero", label: "home" },
  { id: "projects", label: "work" },
  { id: "writings", label: "blog" },
  { id: "about", label: "about" },
] as const

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-background">
      {/* Fixed sidebar - terminal style */}
      <div className="fixed left-0 top-0 bottom-0 w-16 md:w-20 z-50 bg-background/80 backdrop-blur-md border-r border-foreground/10 flex flex-col">
        {/* Logo/Brand */}
        <div className="p-4 border-b border-foreground/10">
          <span className="font-mono text-xs text-green-500">~/</span>
        </div>

        {/* Navigation links */}
        <nav className="flex-1 flex flex-col gap-1 p-2 font-mono text-xs">
          {sections.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={`px-2 py-2 transition-colors ${
                activeSection === tab.id
                  ? "text-green-500 bg-green-500/10"
                  : "text-foreground-secondary/50 hover:text-green-500 hover:bg-foreground/[0.02]"
              }`}
            >
              {tab.label}
            </a>
          ))}
        </nav>

        {/* Theme toggle at bottom */}
        <div className="p-4 border-t border-foreground/10">
          <ThemeToggle />
        </div>
      </div>

      {/* Main content - scrollable */}
      <div className="ml-16 md:ml-20 pb-20">
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="projects">
          <WorkSection />
        </section>

        <section id="writings">
          <BlogSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <Footer />
      </div>
    </main>
  )
}
