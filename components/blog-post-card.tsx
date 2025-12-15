"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import type { BlogPost } from "@/lib/blog-posts"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

interface BlogPostCardProps {
  post: BlogPost
  index?: number
}

export function BlogPostCard({ post, index = 0 }: BlogPostCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group h-full"
    >
      <Link href={`/blog/${post.id}`} className="block h-full">
        <div className="relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
          <div className="relative h-44 overflow-hidden bg-muted">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Badge className="absolute top-3 right-3 shadow-md text-xs">{post.category}</Badge>
          </div>

          <div className="p-5 flex flex-col flex-grow">
            <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}m
              </span>
            </div>

            <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
              {post.title}
            </h3>

            <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed flex-grow">{post.excerpt}</p>

            <div className="flex flex-wrap gap-1.5">
              {post.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground">
                  {tag}
                </span>
              ))}
              {post.tags.length > 2 && (
                <span className="text-xs px-2 py-0.5 text-muted-foreground">+{post.tags.length - 2}</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
