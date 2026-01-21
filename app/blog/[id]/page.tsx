import { notFound } from "next/navigation"
import { getAllBlogPosts, getBlogPostById, getRelatedPosts } from "@/lib/blog-posts"
import BlogPostClient from "./BlogPostClient"
import { BlogSchema } from "@/app/components/BlogSchema"

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

  const url = `https://bhabukb.com.np/blog/${post.id}`

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: "Bhabuk Bhattarai", url: "https://bhabukb.com.np" }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: url,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ["Bhabuk Bhattarai"],
      tags: post.tags,
      ...(post.image && {
        images: [{
          url: `https://bhabukb.com.np${post.image}`,
          alt: post.title,
        }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      creator: "@FellowTravell20",
      ...(post.image && {
        images: [`https://bhabukb.com.np${post.image}`],
      }),
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

  return (
    <>
      <BlogSchema post={post} />
      <BlogPostClient post={post} relatedPosts={relatedPosts} />
    </>
  )
}
