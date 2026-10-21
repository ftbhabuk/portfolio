import { AboutSection } from "@/components/about-section"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { SiteShell } from "@/components/site-shell"
import { WorkSection } from "@/components/work-section"
import { getAllBlogPostSummaries } from "@/lib/blog-posts"

export default function Home() {
  const posts = getAllBlogPostSummaries()

  return (
    <SiteShell>
      <HeroSection />
      <WorkSection />
      <BlogSection posts={posts} />
      <AboutSection />
      <Footer />
    </SiteShell>
  )
}
