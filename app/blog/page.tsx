import type { Metadata } from "next"
import Link from "next/link"

import { AsciiHeader } from "@/components/ascii-header"
import { BlogPostList } from "@/components/blog-post-list"
import { Footer } from "@/components/footer"
import { SiteShell } from "@/components/site-shell"
import { getAllBlogPostSummaries } from "@/lib/blog-posts"

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on code, writing, and everything in between.",
  alternates: {
    canonical: "https://bhabukb.com.np/blog",
  },
}

export default function BlogPage() {
  const posts = getAllBlogPostSummaries()

  return (
    <SiteShell>
      <div className="pt-6 sm:pt-8">
        <AsciiHeader />
      </div>
      <div className="py-8 sm:py-10">
        <header className="mb-8">
          <nav aria-label="Breadcrumb" className="mb-2">
            <ol className="flex items-center gap-x-1 font-mono text-xs text-foreground-secondary/50">
              <li>
                <Link href="/" className="transition-colors hover:text-green-500">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-foreground-secondary/30">▸</li>
              <li aria-current="page" className="font-semibold text-foreground-secondary/80">
                Blog
              </li>
            </ol>
          </nav>
          <h1
            className="mb-1 text-lg uppercase tracking-wider md:text-xl"
            style={{ fontFamily: "var(--font-geist-pixel-square), monospace" }}
          >
            Recent Posts
          </h1>
        </header>

        <BlogPostList posts={posts} />
      </div>
      <Footer />
    </SiteShell>
  )
}
