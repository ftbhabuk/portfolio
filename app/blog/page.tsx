import type { Metadata } from "next"

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
      <div className="py-16 sm:py-20">
        <header className="mb-8">
          <div className="mb-2 flex items-center gap-2 font-mono text-sm text-foreground-secondary/60">
            <span className="text-green-500">➜</span>
            <span>~/writings</span>
          </div>
          <h1
            className="mb-1 text-lg uppercase tracking-wider md:text-xl"
            style={{ fontFamily: "var(--font-geist-pixel-square), monospace" }}
          >
            Log Entries
          </h1>
          <p className="font-mono text-xs text-foreground-secondary/50">
            tail -f thoughts.log
          </p>
        </header>

        <BlogPostList posts={posts} />
      </div>
      <Footer />
    </SiteShell>
  )
}
