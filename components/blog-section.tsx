"use client"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { getAllBlogPosts } from "@/lib/blog-posts"

export function BlogSection() {
  const blogPosts = getAllBlogPosts()
  const [showAll, setShowAll] = useState(false)
  const displayedPosts = showAll ? blogPosts : blogPosts.slice(0, 3)
  const hasMore = blogPosts.length > 3

  return (
    <section id="blog" className="min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Terminal header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 text-foreground-secondary/60 text-sm font-mono mb-2">
            <span className="text-green-500">➜</span>
            <span>~/writings</span>
          </div>
          <h2 
            className="text-2xl md:text-3xl tracking-wider uppercase mb-2"
            style={{ fontFamily: 'var(--font-geist-pixel-square), monospace' }}
          >
            Log Entries
          </h2>
          <p className="font-mono text-xs text-foreground-secondary/50">
            tail -f thoughts.log
          </p>
        </motion.div>

        {/* Log entries */}
        <div className="space-y-0 border-t border-foreground/10">
          {displayedPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group border-b border-foreground/5 hover:bg-foreground/[0.02] transition-colors"
            >
              <Link href={`/blog/${post.id}`} className="block py-6">
                <div className="flex items-start gap-4">
                  {/* Timestamp */}
                  <div className="font-mono text-xs text-foreground-secondary/50 w-28 flex-shrink-0 pt-1">
                    [{post.date}]
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-mono text-foreground group-hover:text-green-500 transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-foreground-secondary/70 leading-relaxed mb-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 font-mono text-xs">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-foreground-secondary/50 bg-foreground/5 px-2 py-0.5"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Arrow indicator */}
                  <div className="text-foreground-secondary/30 group-hover:text-green-500 group-hover:translate-x-1 transition-all pt-1">
                    →
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Show more/less */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 pt-6 border-t border-foreground/10"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="font-mono text-sm text-foreground-secondary/60 hover:text-green-500 transition-colors flex items-center gap-2"
            >
              <span className="text-green-500">$</span>
              {showAll ? 'head -n 3 thoughts.log' : 'cat thoughts.log'}
              <span className="text-foreground-secondary/40">
                ({showAll ? 'show less' : `+${blogPosts.length - 3} more`})
              </span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}