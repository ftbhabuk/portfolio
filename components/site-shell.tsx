"use client"

import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

import { AsciiSky } from "@/components/ascii-sky"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"

interface SiteShellProps {
  children: ReactNode
}

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname()

  return (
    <main className="min-h-screen bg-background">
      {pathname === "/" && (
        <AsciiSky
          height={210}
          className="opacity-60 light:opacity-70 light:[filter:grayscale(1)_contrast(1.8)] [mask-image:linear-gradient(to_bottom,black_60%,transparent)]"
        />
      )}

      <div className="pb-16">
        <MaxWidthWrapper>{children}</MaxWidthWrapper>
      </div>
    </main>
  )
}
