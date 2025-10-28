"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("light", savedTheme === "light")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("light", newTheme === "light")
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-foreground/10 hover:bg-foreground/15 transition-colors duration-300 flex items-center px-1"
      aria-label="Toggle theme"
    >
      <motion.div
        className="w-5 h-5 rounded-full bg-foreground"
        animate={{
          x: theme === "dark" ? 0 : 28,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
      <span className="sr-only">{theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}</span>
    </button>
  )
}
