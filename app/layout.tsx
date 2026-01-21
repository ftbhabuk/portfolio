import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

// Current timestamp to force cache refresh
const timestamp = new Date().getTime()

export const metadata: Metadata = {
  title: "Bhabuk Bhattarai | Full Stack Developer & Creative Coder from Nepal",
  description:
    "CS student and full stack developer building AI poetry generators, interactive novels, and generative art with React, Next.js, Python, and Three.js.",
  metadataBase: new URL("https://bhabukb.com.np"),
  keywords: [
    "Bhabuk Bhattarai",
    "Full Stack Developer",
    "Nepal Developer",
    "AI Poetry",
    "Next.js",
    "React",
    "Creative Coding",
    "Generative Art",
    "Web Developer Nepal",
    "Three.js",
    "Python Developer",
  ],
  verification: {
    google: "u8WvXEA5snMQbMygIHo4z7CYHEapFfBXsTC",
  },
  authors: [{ name: "Bhabuk Bhattarai", url: "https://bhabukb.com.np" }],
  creator: "Bhabuk Bhattarai",
  publisher: "Bhabuk Bhattarai",
  category: "Technology",
  openGraph: {
    title: "Bhabuk Bhattarai | Web Developer & CS Student",
    description:
      "Computer Science student and web developer specializing in React, Next.js, and modern web technologies. Building innovative web experiences.",
    url: "https://bhabukb.com.np",
    siteName: "Bhabuk Bhattarai Portfolio",
    images: [
      {
        url: `/images/og-image.png?v=${timestamp}`,
        width: 1200,
        height: 630,
        alt: "Bhabuk Bhattarai - Web Developer & CS Student",
      },
    ],
    locale: "en_US",
    type: "profile", // Changed from "website" to "profile" for personal site
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhabuk Bhattarai | Web Developer & CS Student",
    description:
      "CS student and web developer building with React, Next.js, and modern web technologies.",
    images: [`/images/og-image.png?v=${timestamp}`],
    creator: "@FellowTravell20",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Force refresh of social media cache with timestamp */}
        <meta property="og:image" content={`https://bhabuk.dev/images/og-image.png?v=${timestamp}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Bhabuk Bhattarai" />
        <meta property="og:image:type" content="image/png" />

        <meta name="twitter:image" content={`https://bhabuk.dev/images/og-image.png?v=${timestamp}`} />
        <meta name="twitter:image:alt" content="Bhabuk Bhattarai" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* LinkedIn specific */}
        <meta property="og:image:secure_url" content={`https://bhabuk.dev/images/og-image.png?v=${timestamp}`} />

        {/* Additional social media tags */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://bhabuk.dev" />
        <meta property="og:title" content="Bhabuk Bhattarai | CS Student & Writer" />
        <meta
          property="og:description"
          content="Portfolio of Bhabuk Bhattarai - CS student exploring literature, poetry, and creative coding projects."
        />
        <meta property="og:site_name" content="Bhabuk Bhattarai" />

        {/* Cache control for better refreshing */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
