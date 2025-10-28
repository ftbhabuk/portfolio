"use client"

import { motion } from "framer-motion"
import { BlogPostCard } from "@/components/blog-post-card"
import { getAllBlogPosts } from "@/lib/blog-posts"

export function BlogSection() {
  const blogPosts = getAllBlogPosts()

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Thoughts & <span className="text-primary">Explorations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Personal reflections on what i find interesting throughtout my day to day life!!               
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
