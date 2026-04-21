import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import { GeistPixelSquare } from "geist/font/pixel"
import { JsonLd } from "@/app/json-ld"

const siteUrl = "https://bhabukb.com.np"
const siteTitle = "Bhabuk Bhattarai | Developer, Writer & Creative Technologist"
const siteDescription =
  "Portfolio of Bhabuk Bhattarai, a developer and writer building web apps, interactive fiction, and creative coding experiments."
const defaultOgImage = {
  url: "/images/socials.png",
  width: 1080,
  height: 1080,
  alt: "Bhabuk Bhattarai social preview",
}
const isPreviewDeployment = process.env.VERCEL_ENV === "preview"

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | Bhabuk Bhattarai",
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  applicationName: "Bhabuk Bhattarai",
  keywords: [
    "Bhabuk Bhattarai",
    "Developer",
    "Writer",
    "Creative Technologist",
    "Full Stack Developer",
    "Nepal Developer",
    "Next.js",
    "React",
    "Creative Coding",
    "Interactive Fiction",
    "Web Developer Nepal",
  ],
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "u8WvXEA5snMQbMygIHo4z7CYHEapFfBXsTC",
  },
  authors: [{ name: "Bhabuk Bhattarai", url: siteUrl }],
  creator: "Bhabuk Bhattarai",
  publisher: "Bhabuk Bhattarai",
  category: "Technology",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Bhabuk Bhattarai",
    images: [defaultOgImage],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [defaultOgImage.url],
    creator: "@FellowTravell20",
  },
  robots: {
    index: !isPreviewDeployment,
    follow: !isPreviewDeployment,
    googleBot: {
      index: !isPreviewDeployment,
      follow: !isPreviewDeployment,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={GeistPixelSquare.variable}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          <JsonLd />
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
