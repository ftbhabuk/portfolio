import "server-only"

import fs from "node:fs"
import path from "node:path"

import matter from "gray-matter"

import type { BlogPost, BlogPostSummary } from "./types"

const CONTENT_DIR = path.join(process.cwd(), "content", "blog")
const WORDS_PER_MINUTE = 220
const EXCERPT_LENGTH = 180

/** Directories inside content/blog that are never treated as posts. */
const IGNORED_DIRECTORIES = new Set(["_drafts", "attachments", ".obsidian", ".trash"])

let cache: BlogPost[] | null = null

function findNoteFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return []

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      const isIgnored = entry.name.startsWith(".") || IGNORED_DIRECTORIES.has(entry.name)
      return isIgnored ? [] : findNoteFiles(fullPath)
    }

    if (entry.isFile() && entry.name.endsWith(".md")) {
      const isNote =
        !entry.name.startsWith("_") && entry.name.toLowerCase() !== "readme.md"
      return isNote ? [fullPath] : []
    }

    return []
  })
}

function toISOString(value: unknown, file: string): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10)
  }

  if (typeof value === "string") {
    const match = value.trim().match(/^(\d{4})-(\d{2})-(\d{2})/)
    if (match) return match[0]

    const parsed = new Date(value)
    if (!Number.isNaN(parsed.getTime())) {
      const pad = (n: number) => String(n).padStart(2, "0")
      return `${parsed.getFullYear()}-${pad(parsed.getMonth() + 1)}-${pad(parsed.getDate())}`
    }
  }

  throw new Error(`[blog] "${file}" is missing a valid "date" (expected YYYY-MM-DD).`)
}

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`))
}

function toStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean)
  }
  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
  }
  return []
}

/** Turns body images with relative paths into URLs served from /public/blog. */
function rewriteImagePaths(content: string): string {
  return content.replace(/!\[([^\]]*)\]\(([^)\s]+)(\s+"[^"]*")?\)/g, (match, alt, target, title) => {
    const isRelative = !/^(?:[a-z][a-z0-9+.-]*:|\/|#)/i.test(target)
    if (!isRelative) return match
    return `![${alt}](/blog/${target.replace(/^\.\//, "")}${title ?? ""})`
  })
}

function fallbackExcerpt(content: string): string {
  const paragraph = content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/<[^>]+>/g, "")
    .split(/\n\s*\n/)
    .map((block) =>
      block
        .split("\n")
        .map((line) => line.replace(/^#{1,6}\s+/, "").trim())
        .filter(Boolean)
        .join(" "),
    )
    .find((block) => block.length > 0)

  if (!paragraph) return ""

  return paragraph.length <= EXCERPT_LENGTH
    ? paragraph
    : `${paragraph.slice(0, paragraph.lastIndexOf(" ", EXCERPT_LENGTH))}…`
}

function readPost(file: string): BlogPost | null {
  const source = fs.readFileSync(file, "utf8")
  const { data, content: rawContent } = matter(source)
  const fileName = path.relative(CONTENT_DIR, file)

  if (data.draft === true || data.published === false) return null

  let content = rawContent.trim()

  // Let a leading H1 act as the title so notes read naturally in Obsidian.
  const heading = content.match(/^#\s+(.+)\s*$/m)
  const title = typeof data.title === "string" && data.title.trim() ? data.title.trim() : heading?.[1]?.trim()
  if (!title) throw new Error(`[blog] "${fileName}" needs a "title" in frontmatter or a leading "# Heading".`)
  if (!data.title && heading) content = content.replace(heading[0], "").trim()

  const dateISO = toISOString(data.date, fileName)
  const id = (typeof data.slug === "string" && data.slug.trim()) || path.basename(file, ".md")

  const words = content.split(/\s+/).filter(Boolean).length
  const readTime =
    typeof data.readTime === "number" && data.readTime > 0
      ? Math.round(data.readTime)
      : Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))

  return {
    id,
    title,
    excerpt: (typeof data.excerpt === "string" && data.excerpt.trim()) || fallbackExcerpt(content),
    date: formatDate(dateISO),
    dateISO,
    category: (typeof data.category === "string" && data.category.trim()) || "blog",
    readTime,
    tags: toStringArray(data.tags),
    image: typeof data.image === "string" && data.image.trim() ? data.image.trim() : undefined,
    content: rewriteImagePaths(content),
  }
}

function loadPosts(): BlogPost[] {
  if (process.env.NODE_ENV === "production" && cache) return cache

  const posts = findNoteFiles(CONTENT_DIR)
    .map(readPost)
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO))

  const seen = new Set<string>()
  for (const post of posts) {
    if (seen.has(post.id)) {
      throw new Error(`[blog] Duplicate slug "${post.id}". Two notes resolve to the same URL.`)
    }
    seen.add(post.id)
  }

  cache = posts
  return posts
}

function toSummary({ content: _content, ...summary }: BlogPost): BlogPostSummary {
  return summary
}

export function getAllBlogPosts(): BlogPost[] {
  return [...loadPosts()]
}

export function getAllBlogPostSummaries(): BlogPostSummary[] {
  return loadPosts().map(toSummary)
}

export function getBlogPostById(id: string): BlogPost | undefined {
  return loadPosts().find((post) => post.id === id)
}

export function getRelatedPosts(currentPostId: string, limit = 2): BlogPostSummary[] {
  const posts = loadPosts()
  const currentPost = posts.find((post) => post.id === currentPostId)
  if (!currentPost) return []

  return posts
    .filter((post) => post.id !== currentPostId)
    .filter(
      (post) =>
        post.category === currentPost.category ||
        post.tags.some((tag) => currentPost.tags.includes(tag)),
    )
    .slice(0, limit)
    .map(toSummary)
}
