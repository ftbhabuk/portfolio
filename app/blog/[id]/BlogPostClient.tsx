"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog-posts"
import { MarkdownContent } from "@/components/markdown-content"
import { getAllBlogPosts } from "@/lib/blog-posts"

interface BlogPostClientProps {
  post: BlogPost
  relatedPosts: BlogPost[]
}

export default function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  const allPosts = getAllBlogPosts()
  const recommendedPosts = relatedPosts.length > 0 
    ? relatedPosts 
    : allPosts.filter((p) => p.id !== post.id).slice(0, 3)

  return (
    <main className="min-h-screen bg-background">
      {/* Back link + metadata */}
      <div className="max-w-3xl mx-auto px-6 md:px-8 pt-8 md:pt-12 pb-6">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to blog
        </Link>

        <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
          <Badge variant="secondary" className="font-normal">{post.category}</Badge>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
        </div>
      </div>

      {/* Title + excerpt - More subtle and elegant */}
      <header className="max-w-3xl mx-auto px-6 md:px-8 pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold leading-snug text-balance mb-5"
        >
          {post.title}
        </motion.h1>

        {post.excerpt && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            {post.excerpt}
          </motion.p>
        )}
      </header>

      {/* Featured image - More refined */}
      {post.image && (
        <div className="max-w-4xl mx-auto px-6 md:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-xl border border-border/50"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] md:h-[550px] object-cover"
            />
          </motion.div>
        </div>
      )}

      {/* Main content - Better spacing and typography */}
      <article className="max-w-2xl mx-auto px-6 md:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-neutral dark:prose-invert 
                     prose-headings:font-semibold 
                     prose-headings:tracking-tight
                     prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                     prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                     prose-p:text-base prose-p:leading-relaxed prose-p:mb-5
                     prose-li:text-base prose-li:leading-relaxed
                     prose-strong:font-semibold prose-strong:text-foreground
                     prose-code:text-sm prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                     prose-pre:bg-muted prose-pre:border prose-pre:border-border
                     prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                     max-w-none"
        >
          <MarkdownContent content={post.content} />
        </motion.div>
      </article>

      {/* Related posts - Cleaner design */}
      <section className="border-t border-border/40">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-8"
          >
            {relatedPosts.length > 0 ? "Related Posts" : "More to Explore"}
          </motion.h2>

          <div className="space-y-6">
            {recommendedPosts.map((recommendedPost, index) => (
              <motion.div
                key={recommendedPost.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/blog/${recommendedPost.id}`}
                  className="group block py-4 border-b border-border/30 last:border-0"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium group-hover:text-primary transition-colors mb-2">
                        {recommendedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                        {recommendedPost.excerpt}
                      </p>
                      <div className="text-xs text-muted-foreground">
                        {recommendedPost.date} · {recommendedPost.category}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all mt-1 flex-shrink-0" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-border/30">
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all"
            >
              View all posts
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}