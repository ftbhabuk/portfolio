"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import type { BlogPost } from "@/lib/blog-posts"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

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
        <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-md">
          {/* Larger image */}
          <div className="relative aspect-[16/10] overflow-hidden bg-muted">
  <img
    src={post.image || "/placeholder.svg"}
    alt={post.title}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out 
              //  brightness-100 contrast-110 
              //  dark:brightness-105 dark:contrast-95"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0" />
  <Badge className="absolute top-4 right-4 shadow-md text-xs">
    {post.category}
  </Badge>
</div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Date only */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed flex-grow">
              {post.excerpt}
            </p>

            {/* Tags - clean, up to 3 */}
            {post.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {/* {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-muted/70 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))} */}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}