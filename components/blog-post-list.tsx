import Link from "next/link"

import type { BlogPostSummary } from "@/lib/blog-posts"

interface BlogPostListProps {
  posts: BlogPostSummary[]
}

/** The full archive list: date, title, one-line excerpt and an arrow. */
export function BlogPostList({ posts }: BlogPostListProps) {
  return (
    <div className="space-y-0 border-t border-foreground/10">
      {posts.map((post) => (
        <article
          key={post.id}
          className="group border-b border-foreground/5 transition-colors hover:bg-foreground/[0.02]"
        >
          <Link href={`/blog/${post.id}`} className="block py-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
              <time
                dateTime={post.dateISO}
                className="w-full flex-shrink-0 font-mono text-xs text-foreground-secondary sm:w-28 sm:pt-1"
              >
                [{post.date}]
              </time>

              <div className="min-w-0 flex-1">
                <h3 className="font-mono text-foreground transition-colors group-hover:text-green-500">
                  {post.title}
                </h3>
                <p className="mt-1 line-clamp-2 font-mono text-sm text-foreground-secondary/60">
                  {post.excerpt}
                </p>
              </div>

              <div className="hidden pt-1 text-foreground-secondary/30 transition-all group-hover:translate-x-1 group-hover:text-green-500 sm:block">
                →
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  )
}
