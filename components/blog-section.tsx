import Link from "next/link"

import type { BlogPostSummary } from "@/lib/blog-posts"

interface BlogSectionProps {
  posts: BlogPostSummary[]
}

/** A short, low-key "recent posts" teaser. The full archive lives at /blog. */
export function BlogSection({ posts }: BlogSectionProps) {
  const recent = posts.slice(0, 3)

  return (
    <section id="blog" className="py-12 sm:py-16">
      <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-foreground-secondary/50">
        Recent Posts
      </h2>

      <ul className="border-y border-foreground/10">
        {recent.map((post) => (
          <li key={post.id} className="border-b border-foreground/5 last:border-b-0">
            <Link
              href={`/blog/${post.id}`}
              className="group flex items-baseline justify-between gap-5 py-3.5 font-mono text-sm transition-colors hover:text-green-500"
            >
              <span className="min-w-0 truncate text-foreground transition-colors group-hover:text-green-500">
                {post.title}
              </span>
              <time
                dateTime={post.dateISO}
                className="shrink-0 text-xs text-foreground-secondary/40"
              >
                [{post.date}]
              </time>
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/blog"
        className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-green-500/80 transition-colors hover:text-green-500"
      >
        <span>$</span>
        <span className="underline-offset-4 hover:underline">cat all posts →</span>
      </Link>
    </section>
  )
}
