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
  const recommendedPosts = relatedPosts.length > 0 ? relatedPosts : allPosts.filter((p) => p.id !== post.id).slice(0, 3)

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-6">
              <Badge className="text-xs font-medium">{post.category}</Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime} min read
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">{post.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl border border-border shadow-2xl"
        >
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </motion.div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose-custom"
        >
          <MarkdownContent content={post.content} />
        </motion.div>
      </article>

      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {relatedPosts.length > 0 ? "Related Posts" : "More to Explore"}
            </h2>
            <p className="text-muted-foreground">
              {relatedPosts.length > 0
                ? "Continue reading posts related to this topic"
                : "Discover more thoughts and explorations"}
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {recommendedPosts.map((recommendedPost, index) => (
              <motion.div
                key={recommendedPost.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
              >
                <Link
                  href={`/blog/${recommendedPost.id}`}
                  className="group block py-6 border-t border-border/50 transition-all duration-300 hover:border-primary/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                        {recommendedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{recommendedPost.excerpt}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{recommendedPost.date}</span>
                        <span>•</span>
                        <span>{recommendedPost.readTime} min read</span>
                        <span>•</span>
                        <Badge variant="outline" className="text-xs">
                          {recommendedPost.category}
                        </Badge>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-border/50"
          >
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-medium"
            >
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
