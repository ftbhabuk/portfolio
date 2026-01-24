"use client"
import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Calendar } from "lucide-react"
import { getAllBlogPosts } from "@/lib/blog-posts"
import type { BlogPost } from "@/lib/blog-posts"

export function BlogSection() {
  const blogPosts = getAllBlogPosts()
  const [showAll, setShowAll] = useState(false)
  const displayedPosts = showAll ? blogPosts : blogPosts.slice(0, 2)
  const hasMore = blogPosts.length > 2

  return (
    <section id="blog" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Simple header */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-2">Writing</h2>
          <p className="text-muted-foreground">
            Thoughts and reflections on what I find interesting
          </p>
        </div>

        {/* Grid layout - 2 columns on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {displayedPosts.map((post, index) => (
            <article 
              key={post.id}
              className="group border-b border-border pb-8"
              style={{
                opacity: 0,
                animation: 'fadeIn 0.5s ease-out forwards',
                animationDelay: showAll && index >= 2 ? `${(index - 2) * 100}ms` : '0ms'
              }}
            >
              <Link href={`/blog/${post.id}`} className="block">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <time>{post.date}</time>
                </div>
                
                <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-3 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-muted-foreground"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>

        {/* Simple show more button */}
        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              {showAll ? "Show less" : "View all posts"}
              <ChevronDown 
                className="w-4 h-4 transition-transform"
                style={{ transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}