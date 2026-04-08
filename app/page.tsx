"use client"
import { useState, useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { WorkSection } from "@/components/work-section"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { AboutSection } from "@/components/about-section"
import { MobileMenu } from "@/components/mobile-menu"

const sections = [
  { id: "hero", label: "home" },
  { id: "work", label: "work" },
  { id: "blog", label: "blog" },
  { id: "about", label: "about" },
] as const

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/95 backdrop-blur-md md:hidden">
        <div className="flex h-16 items-center justify-between px-4">
          <a href="#hero" className="flex items-center gap-2 font-mono text-sm text-foreground-secondary hover:text-foreground">
            <span className="text-green-500">~/</span>
            <span>bhabuk</span>
          </a>
          <MobileMenu
            activeSection={activeSection}
            isOpen={isMobileMenuOpen}
            onOpenChange={setIsMobileMenuOpen}
            sections={sections}
          />
        </div>
      </header>

      {/* Fixed sidebar - terminal style */}
      <div className="fixed left-0 top-0 bottom-0 z-50 hidden w-16 flex-col border-r border-foreground/10 bg-background/80 backdrop-blur-md md:flex md:w-20">
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
      <div className="pb-20 pt-16 md:ml-20 md:pt-0">
        <HeroSection />
        <WorkSection />
        <BlogSection />
        <AboutSection />
        <Footer />
      </div>
    </main>
  )
}
