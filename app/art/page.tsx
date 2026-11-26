import type { Metadata } from "next"

import { ArtBrowser } from "@/components/art-browser"
import { Footer } from "@/components/footer"
import { SiteShell } from "@/components/site-shell"

export const metadata: Metadata = {
  title: "Digital Art",
  description: "Canvas paintings and hand-drawn experiments by Bhabuk.",
  alternates: {
    canonical: "https://bhabukb.com.np/art",
  },
}

export default function ArtPage() {
  return (
    <SiteShell>
      <div className="pt-6 sm:pt-8">
        <div className="mb-6">
          <h1 className="font-mono text-xs uppercase tracking-[0.28em] text-foreground-secondary/50">
            Digital Art
          </h1>
          <p className="mt-2 font-mono text-xs text-foreground-secondary/40">
            a small collection of canvas paintings &amp; drawings — pick one to preview
          </p>
        </div>
        <ArtBrowser />
      </div>
      <Footer />
    </SiteShell>
  )
}
