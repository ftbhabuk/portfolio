"use client"

import Image from "next/image"
import Link from "next/link"

/**
 * The lelouch.dev-style pixel portrait that sits at the top of a page.
 * Navigation stays in the existing sidebar / mobile menu.
 */
export function AsciiHeader() {
  return (
    <div className="mb-6 sm:mb-8">
      <div className="flex justify-center">
        <Link
          href="/"
          aria-label="Go to homepage"
          className="group block w-full max-w-[200px] transition-opacity hover:opacity-90"
        >
          <Image
            src="/images/ascii-portrait-dark.webp"
            alt="Pixel-art portrait of an anime girl"
            width={1178}
            height={980}
            priority
            unoptimized
            className="block h-auto w-full light:hidden"
          />
          <Image
            src="/images/ascii-portrait-light.webp"
            alt=""
            aria-hidden="true"
            width={1178}
            height={980}
            priority
            unoptimized
            className="hidden h-auto w-full light:block"
          />
        </Link>
      </div>
      <div className="mt-5 w-full border-t border-foreground/15 sm:mt-6" />
    </div>
  )
}
