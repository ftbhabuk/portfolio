"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import { artworks } from "@/lib/artworks"

type Status = "loading" | "ready" | "failed"

export function ArtBrowser() {
  const [activeId, setActiveId] = useState(artworks[0].id)
  const [status, setStatus] = useState<Status>("loading")
  const previewRef = useRef<HTMLDivElement>(null)

  const active = artworks.find((art) => art.id === activeId) ?? artworks[0]

  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (artworks.some((art) => art.id === hash)) setActiveId(hash)
  }, [])

  useEffect(() => {
    setStatus("loading")
    const timer = window.setTimeout(() => {
      setStatus((current) => (current === "loading" ? "ready" : current))
    }, 4000)
    return () => window.clearTimeout(timer)
  }, [activeId])

  const select = (id: string) => {
    setActiveId(id)
    window.history.replaceState(null, "", `#${id}`)
    if (window.innerWidth < 768) {
      previewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-[minmax(0,9rem)_minmax(0,1fr)] md:gap-8">
      <div className="border-t border-foreground/10">
        {artworks.map((art) => {
          const selected = art.id === activeId
          return (
            <button
              key={art.id}
              type="button"
              onClick={() => select(art.id)}
              aria-pressed={selected}
              className={`block w-full border-b border-l-2 border-b-foreground/10 px-3 py-2 text-left font-mono text-xs transition-colors last:border-b-0 ${
                selected
                  ? "border-l-green-500 text-green-500"
                  : "border-l-transparent text-foreground-secondary/50 hover:border-l-foreground/30 hover:text-foreground"
              }`}
            >
              {art.title}
            </button>
          )
        })}
      </div>

      <div ref={previewRef} className="self-start md:sticky md:top-6">
        <div className="relative aspect-[4/3] w-full overflow-hidden border border-foreground/15 bg-muted">
          <a
            href={active.href}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-3 top-3 z-10 border border-foreground/15 bg-background/80 px-2 py-1 font-mono text-xs text-green-500/80 backdrop-blur-sm transition-colors hover:border-green-500/50 hover:text-green-500"
          >
            open live
          </a>

          {status === "failed" ? (
            <div className="absolute inset-0">
              <Image
                src={active.image}
                alt={active.alt}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-background/85 px-3 py-2 font-mono text-xs text-foreground-secondary">
                preview unavailable — open live to interact
              </div>
            </div>
          ) : (
            <>
              <iframe
                key={active.id}
                src={active.href}
                title={`${active.title} — live canvas`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer"
                allow="fullscreen"
                onLoad={() => setStatus("ready")}
                onError={() => setStatus("failed")}
              />
              {status === "loading" && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/70 font-mono text-xs text-foreground-secondary">
                  loading canvas…
                </div>
              )}
            </>
          )}
        </div>

        <div className="mt-4 border-t border-foreground/10 pt-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground-secondary/40">
            about this piece
          </div>
          <p className="mt-2 max-w-2xl font-mono text-xs leading-relaxed text-foreground-secondary/70">
            {active.description}
          </p>
          <div className="mt-2 font-mono text-[10px] text-foreground-secondary/40">{active.meta}</div>
        </div>
      </div>
    </div>
  )
}
