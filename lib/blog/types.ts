export interface BlogPost {
  id: string
  title: string
  excerpt: string
  /** Human-readable date, e.g. "December 18, 2024" */
  date: string
  /** ISO date, e.g. "2024-12-18" — use for sorting, sitemap and structured data */
  dateISO: string
  category: string
  readTime: number
  tags: string[]
  image?: string
  content: string
}

/** A post without its body, for lists and cards. */
export type BlogPostSummary = Omit<BlogPost, "content">
