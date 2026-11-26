"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import type { BlogPost, BlogPostSummary } from "@/lib/blog-posts"
import { MarkdownContent } from "@/components/markdown-content"

interface BlogPostClientProps {
  post: BlogPost
  relatedPosts: BlogPostSummary[]
  allPosts: BlogPostSummary[]
}

export default function BlogPostClient({ post, relatedPosts, allPosts }: BlogPostClientProps) {
  const recommendedPosts = relatedPosts.length > 0
    ? relatedPosts
    : allPosts.filter((p) => p.id !== post.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 md:px-8 pt-4 md:pt-6 pb-2">
        <ol className="flex flex-wrap items-center gap-x-1 gap-y-0.5 font-mono text-xs text-foreground-secondary/50">
          <li>
            <Link href="/" className="transition-colors hover:text-green-500">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-foreground-secondary/30">▸</li>
          <li>
            <Link href="/blog" className="transition-colors hover:text-green-500">
              Blog
            </Link>
          </li>
          <li aria-hidden="true" className="text-foreground-secondary/30">▸</li>
          <li aria-current="page" className="font-semibold text-foreground-secondary/80">
            {post.title}
          </li>
        </ol>
      </nav>

      {/* Article header - Better hierarchy */}
      <header className="max-w-4xl mx-auto px-6 md:px-8 pt-6 pb-8 md:pb-12">
        {/* Title - Elegant and readable */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-3xl font-semibold leading-tight text-balance mb-6"
        >
          {post.title}
        </motion.h1>

        {/* Excerpt - More prominent */}
        {post.excerpt && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground-secondary/80 leading-relaxed mb-6 max-w-4xl"
          >
            {post.excerpt}
          </motion.p>
        )}

        {/* Metadata - Cleaner layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4 text-sm text-foreground-secondary"
        >
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="text-foreground-secondary/60">•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {post.readTime} min read
          </span>
        </motion.div>
      </header>

      {/* Featured image - Full width with better aspect ratio */}
      {post.image && (
        <div className="max-w-6xl mx-auto px-6 md:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative overflow-hidden -2xl border border-border/40 shadow-lg"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover"
            />
          </motion.div>
        </div>
      )}

      {/* Main content - Improved typography */}
      <article className="max-w-3xl mx-auto px-6 md:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg prose-neutral dark:prose-invert 
                     prose-headings:font-bold 
                     prose-headings:tracking-tight
                     prose-headings:scroll-mt-20
                     prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6
                     prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
                     prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3
                     prose-p:text-[17px] prose-p:leading-[1.8] prose-p:mb-6 prose-p:text-foreground/90
                     prose-li:text-[17px] prose-li:leading-[1.8] prose-li:my-2
                     prose-ul:my-6 prose-ol:my-6
                     prose-strong:font-semibold prose-strong:text-foreground
                     prose-em:text-foreground/80
                     prose-code:text-sm prose-code:bg-muted/50 prose-code:px-2 prose-code:py-1 
                     prose-code:rounded prose-code:border prose-code:border-border/50
                     prose-code:before:content-none prose-code:after:content-none
                     prose-pre:bg-muted/30 prose-pre:border prose-pre:border-border/50 
                     prose-pre:rounded-xl prose-pre:my-8 prose-pre:shadow-sm
                     prose-a:text-primary prose-a:font-medium prose-a:no-underline 
                     hover:prose-a:underline prose-a:decoration-2 prose-a:underline-offset-2
                     prose-blockquote:border-l-4 prose-blockquote:border-primary/30 
                     prose-blockquote:bg-muted/30 prose-blockquote:py-1 prose-blockquote:px-6
                     prose-blockquote:my-8 prose-blockquote:rounded-r-lg
                     prose-blockquote:not-italic prose-blockquote:font-normal
                     prose-img:rounded-2xl prose-img:border prose-img:border-border/40 
                     prose-img:shadow-md prose-img:my-12
                     prose-img:w-full prose-img:h-auto
                     prose-hr:border-border/30 prose-hr:my-12
                     prose-table:text-[15px] prose-table:my-8
                     prose-th:py-3 prose-th:px-4 prose-th:bg-muted/50
                     prose-td:py-3 prose-td:px-4
                     max-w-none"
        >
          <MarkdownContent content={post.content} />
        </motion.div>
      </article>

      {/* Tags section - New addition */}
      {post.tags && post.tags.length > 0 && (
        <div className="max-w-3xl mx-auto px-6 md:px-8 pb-16">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="outline" 
                className="text-xs font-normal"
              >
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Related posts — same quiet list style as the rest of the site */}
      <section className="border-t border-foreground/10">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-16">
          <div className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-foreground-secondary/50">
            {relatedPosts.length > 0 ? "Related Posts" : "More to Explore"}
          </div>

          <ul className="border-y border-foreground/10">
            {recommendedPosts.map((recommendedPost) => (
              <li key={recommendedPost.id} className="border-b border-foreground/5 last:border-b-0">
                <Link
                  href={`/blog/${recommendedPost.id}`}
                  className="group flex items-baseline justify-between gap-5 py-3.5 font-mono text-sm transition-colors hover:text-green-500"
                >
                  <span className="min-w-0 truncate text-foreground transition-colors group-hover:text-green-500">
                    {recommendedPost.title}
                  </span>
                  <time
                    dateTime={recommendedPost.dateISO}
                    className="shrink-0 text-xs text-foreground-secondary/40"
                  >
                    [{recommendedPost.date}]
                  </time>
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </section>
    </div>
  )
}