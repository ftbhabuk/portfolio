"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null
    if (saved) {
      setTheme(saved)
      document.documentElement.classList.toggle("light", saved === "light")
    }
  }, [])

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    localStorage.setItem("theme", next)
    document.documentElement.classList.toggle("light", next === "light")
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="group flex items-center gap-2 font-mono text-xs text-foreground-secondary/60 transition-colors hover:text-foreground"
    >
      {theme === "dark" ? (
        <Moon className="h-4 w-4 transition-transform group-hover:rotate-12" />
      ) : (
        <Sun className="h-4 w-4 transition-transform group-hover:rotate-12" />
      )}
    </button>
  )
}
