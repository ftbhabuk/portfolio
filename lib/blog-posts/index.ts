import { poetryWebPlatform } from "./poetry-web-platform"
// import { aiLiteratureGeneration } from "./ai-literature-generation"
// import { waveGeometricPatterns } from "./wave-geometric-patterns"
import {stealingBeautyTuscany} from "./stealing-beauty-tuscany"
import {sixMonthsLinux} from "./six-months-linux"


export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: number
  tags: string[]
  image: string
  content: string
}

export const allBlogPosts: BlogPost[] = [sixMonthsLinux, stealingBeautyTuscany, poetryWebPlatform]

export function getAllBlogPosts(): BlogPost[] {
  return allBlogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPostById(id: string): BlogPost | undefined {
  return allBlogPosts.find((post) => post.id === id)
}

export function getRelatedPosts(currentPostId: string, limit = 2): BlogPost[] {
  const currentPost = getBlogPostById(currentPostId)
  if (!currentPost) return []

  return allBlogPosts
    .filter((post) => post.id !== currentPostId)
    .filter((post) => post.category === currentPost.category || post.tags.some((tag) => currentPost.tags.includes(tag)))
    .slice(0, limit)
}
