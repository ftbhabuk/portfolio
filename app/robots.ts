import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const isPreviewDeployment = process.env.VERCEL_ENV === "preview"

  return {
    rules: isPreviewDeployment
      ? {
          userAgent: "*",
          disallow: "/",
        }
      : {
          userAgent: "*",
          allow: "/",
        },
    sitemap: "https://bhabukb.com.np/sitemap.xml",
    host: "https://bhabukb.com.np",
  }
}
