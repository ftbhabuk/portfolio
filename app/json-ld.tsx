import Script from "next/script"

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bhabuk Bhattarai",
    url: "https://bhabukb.com.np",
    image: "https://bhabukb.com.np/api/og-image",
    jobTitle: "CS Student & Writer",
    description:
      "Portfolio of Bhabuk Bhattarai - CS student exploring literature, poetry, and creative coding projects.",
    sameAs: [
      "https://linkedin.com/in/bhabuk-bhattarai",
      "https://github.com/bhabukb",
      "https://twitter.com/FellowTravell20",
    ],
  }

  return (
    <Script id="json-ld" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(jsonLd)}
    </Script>
  )
}
