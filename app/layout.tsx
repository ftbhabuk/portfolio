import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

// Current timestamp to force cache refresh
const timestamp = new Date().getTime()

export const metadata: Metadata = {
  title: "Bhabuk Bhattarai | CS Student & Writer",
  description: "Portfolio of Bhabuk Bhattarai - CS student exploring literature, poetry, and creative coding projects.",
  metadataBase: new URL("https://bhabuk.dev"),
  openGraph: {
    title: "Bhabuk Bhattarai | CS Student & Writer",
    description:
      "Portfolio of Bhabuk Bhattarai - CS student exploring literature, poetry, and creative coding projects.",
    url: "https://bhabuk.dev",
    siteName: "Bhabuk Bhattarai",
    images: [
      {
        url: `/images/og-image.png?v=${timestamp}`,
        width: 1200,
        height: 630,
        alt: "Bhabuk Bhattarai",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhabuk Bhattarai | CS Student & Writer",
    description:
      "Portfolio of Bhabuk Bhattarai - CS student exploring literature, poetry, and creative coding projects.",
    images: [`/images/og-image.png?v=${timestamp}`],
    creator: "@FellowTravell20",
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
        <meta property="og:type" content="website" />
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
