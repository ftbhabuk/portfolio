import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface MaxWidthWrapperProps {
  children: ReactNode
  className?: string
}

/**
 * Constrains page content to the same reading width used by blog posts.
 * Horizontal padding lives here so sections can stay full-width vertically.
 */
export function MaxWidthWrapper({ children, className }: MaxWidthWrapperProps) {
  return (
    <div className={cn("mx-auto w-full max-w-3xl px-5 sm:px-6 md:px-8", className)}>
      {children}
    </div>
  )
}
