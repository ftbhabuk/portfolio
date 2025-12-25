"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react"
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
      {/* Back link - Simplified */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 pt-8 md:pt-12 pb-4">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to blog
        </Link>
      </div>

      {/* Article header - Better hierarchy */}
      <header className="max-w-4xl mx-auto px-6 md:px-8 pt-6 pb-8 md:pb-12">
        {/* Category badge */}
        <Badge variant="secondary" className="mb-4 font-normal text-xs">
          {post.category}
        </Badge>

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
            className="text-lg md:text-x text-muted-foreground leading-relaxed mb-6 max-w-4xl"
          >
            {post.excerpt}
          </motion.p>
        )}

        {/* Metadata - Cleaner layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="text-muted-foreground/50">•</span>
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

      {/* Related posts - Simple and elegant list */}
      <section className="border-t border-border/40">
        <div className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-10"
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
                  className="group block py-5 border-b border-border/30 last:border-0"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors mb-2">
                        {recommendedPost.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground line-clamp-2 mb-3">
                        {recommendedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{recommendedPost.date}</span>
                        <span>•</span>
                        <span>{recommendedPost.category}</span>
                        <span>•</span>
                        <span>{recommendedPost.readTime} min read</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all mt-1 flex-shrink-0" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border/30">
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
            >
              View all posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}