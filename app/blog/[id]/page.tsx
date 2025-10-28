import { notFound } from "next/navigation"
import { getAllBlogPosts, getBlogPostById, getRelatedPosts } from "@/lib/blog-posts"
import BlogPostClient from "./BlogPostClient"

interface BlogPostPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { id } = await params
  const post = getBlogPostById(id)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params
  const post = getBlogPostById(id)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(id, 2)

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />
}
