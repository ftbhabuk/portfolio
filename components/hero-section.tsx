"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { AsciiHeader } from "@/components/ascii-header"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] items-start justify-start overflow-hidden pb-16 sm:min-h-screen sm:pb-20"
    >
      <div className="w-full">
        <AsciiHeader />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <Image
              src="/images/twitter-avatar.jpg"
              alt="Bhabuk's profile picture"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full border border-foreground/20 object-cover"
            />
            <div className="font-mono text-sm leading-tight">
              <div className="font-medium text-foreground">Bhabuk</div>
              <div className="text-foreground-secondary/60">web dev</div>
            </div>
          </div>

          <p className="max-w-2xl font-mono text-sm leading-relaxed text-foreground-secondary/80 md:text-base">
            I&apos;m a{" "}
            <Image
              src="/images/ts-logo.svg"
              alt="TypeScript"
              width={14}
              height={14}
              unoptimized
              className="mr-1 inline-block h-3.5 w-3.5 align-[-3px]"
            />
            guy at Butwal Web. I make niche tools, write about what I&apos;m learning, and play with
            digital art.{" "}
            <Link
              href="/blog/about"
              className="ml-2 font-mono text-xs text-green-500/80 transition-colors hover:text-green-500 hover:underline hover:underline-offset-4"
            >
              read more
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
