"use client"

import { useEffect, useRef, useState } from "react"

import { mountSky, SKY_HEIGHT, stillSky, type MountedSky } from "@/lib/ascii-sky"

interface AsciiSkyProps {
  /** Height of the sky banner in pixels. */
  height?: number
  className?: string
}

/**
 * Animated ASCII sky from ascii-sky (MIT, by unvalley).
 * The site switches themes with a `.light` class on <html>, so we watch that
 * instead of relying on the OS preference.
 */
export function AsciiSky({ height = SKY_HEIGHT, className }: AsciiSkyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const skyRef = useRef<MountedSky | null>(null)
  const [ready, setReady] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    const root = document.documentElement
    const readTheme = () => setTheme(root.classList.contains("light") ? "light" : "dark")
    readTheme()
    const observer = new MutationObserver(readTheme)
    observer.observe(root, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const sky = mountSky(canvas, { theme: "dark" })
    skyRef.current = sky
    sky.ready
      .then(() => {
        if (skyRef.current === sky) setReady(true)
      })
      .catch(() => undefined)

    return () => {
      sky.stop()
      skyRef.current = null
      setReady(false)
    }
  }, [])

  useEffect(() => {
    skyRef.current?.setTheme(theme)
  }, [theme])

  const still = stillSky(theme)
  const fill = { position: "absolute", inset: 0, width: "100%", height: "100%" } as const

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        width: "100%",
        height,
        overflow: "hidden",
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      <div
        style={{
          ...fill,
          ...still,
          opacity: ready ? 0 : still.opacity,
          transition: "opacity 700ms",
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          ...fill,
          display: "block",
          opacity: ready ? 1 : 0,
          transition: "opacity 700ms",
        }}
      />
    </div>
  )
}
