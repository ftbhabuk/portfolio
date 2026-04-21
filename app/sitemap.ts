import type { MetadataRoute } from "next"
import { getAllBlogPosts } from "@/lib/blog-posts"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://bhabukb.com.np"
  const posts = getAllBlogPosts()

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.id}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]
}
