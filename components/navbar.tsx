"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [time, setTime] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Live clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const navItems = [
    { name: "projects", href: "#work" },
    { name: "writings", href: "#blog" },
    { name: "contact", href: "#contact" },
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-foreground/10" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24 py-4">
        <div className="flex items-center justify-between font-mono text-sm">
          {/* Left: Logo/Prompt */}
          <a href="#" className="flex items-center gap-2 text-foreground-secondary hover:text-green-500 transition-colors">
            <span className="text-green-500">➜</span>
            <span className="hidden sm:inline">bhabuk@ktm</span>
            <span className="sm:hidden">bb</span>
          </a>

          {/* Center: Nav links (hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-6 text-foreground-secondary/60">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-green-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right: Time + Theme toggle */}
          <div className="flex items-center gap-4">
            <span className="text-foreground-secondary/50 text-xs hidden sm:inline">
              [{time}]
            </span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  )
}