"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { BlogPostCard } from "@/components/blog-post-card"
import { getAllBlogPosts } from "@/lib/blog-posts"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BlogSection() {
  const blogPosts = getAllBlogPosts()
  const [showAll, setShowAll] = useState(false)

  const displayedPosts = showAll ? blogPosts : blogPosts.slice(0, 3)
  const hasMore = blogPosts.length > 3

  return (
    <section id="blog" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
            Thoughts & <span className="text-primary">Explorations</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto text-pretty">
            Personal reflections on what I find interesting throughout my day to day life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {displayedPosts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="group relative overflow-hidden border-primary/20 hover:border-primary/50 hover:bg-primary/5"
            >
              <span className="relative z-10 flex items-center gap-2">
                {showAll ? "Show Less" : "View More Posts"}
                <motion.div animate={{ rotate: showAll ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </span>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
