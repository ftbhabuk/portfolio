import Link from "next/link"

export function ArtSection() {
  return (
    <section id="art" className="py-12 sm:py-16">
      <Link href="/art" className="group block">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.28em] text-foreground-secondary/50 transition-colors group-hover:text-green-500">
              Digital Art
            </h2>
            <p className="mt-2 font-mono text-xs text-foreground-secondary/40">
              a small collection of canvas paintings &amp; drawings
            </p>
          </div>
          <span className="shrink-0 font-mono text-xs text-green-500/80 transition-colors group-hover:text-green-500">
            view collection →
          </span>
        </div>
      </Link>
    </section>
  )
}
