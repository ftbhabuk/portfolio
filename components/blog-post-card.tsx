"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import type { BlogPost } from "@/lib/blog-posts"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock } from "lucide-react"

interface BlogPostCardProps {
  post: BlogPost
  index?: number
}

export function BlogPostCard({ post, index = 0 }: BlogPostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <Link href={`/blog/${post.id}`} className="block h-full">
        <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
          {/* Image Container */}
          <div className="relative h-56 overflow-hidden bg-muted">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0" />
            <Badge className="absolute top-4 left-4 shadow-lg">{post.category}</Badge>
          </div>

          {/* Content Container */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Date and Read Time */}
            <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime} min
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed flex-grow">{post.excerpt}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
              <span className="text-sm font-medium text-primary">Read more</span>
              <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
