import Script from "next/script"
import type { BlogPost } from "@/lib/blog-posts"

interface BlogSchemaProps {
  post: BlogPost
}

export function BlogSchema({ post }: BlogSchemaProps) {
  const url = `https://bhabukb.com.np/blog/${post.id}`
  const image = post.image ? `https://bhabukb.com.np${post.image}` : "https://bhabukb.com.np/images/socials.png"

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": "Bhabuk Bhattarai",
      "url": "https://bhabukb.com.np"
    },
    "publisher": {
      "@type": "Person",
      "name": "Bhabuk Bhattarai",
      "url": "https://bhabukb.com.np"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "url": url,
    "image": image,
    "keywords": post.tags.join(", ")
  }

  return (
    <Script
      id={`blog-schema-${post.id}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      strategy="afterInteractive"
    />
  )
}
