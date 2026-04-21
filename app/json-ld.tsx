import Script from "next/script"

export function JsonLd() {
  const siteUrl = "https://bhabukb.com.np"
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Bhabuk Bhattarai",
        description:
          "Portfolio of Bhabuk Bhattarai, a developer and writer building web apps, interactive fiction, and creative coding experiments.",
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Bhabuk Bhattarai",
        alternateName: "Bhabuk",
        url: siteUrl,
        image: `${siteUrl}/images/socials.png`,
        jobTitle: "Developer, Writer & Creative Technologist",
        description:
          "Computer Science student, developer, and writer building web apps, interactive fiction, and creative coding experiments.",
        sameAs: [
          "https://linkedin.com/in/bhabuk-bhattarai",
          "https://github.com/ftbhabuk",
          "https://x.com/FellowTravell20",
        ],
        knowsAbout: [
          "Web Development",
          "React",
          "Next.js",
          "TypeScript",
          "Creative Coding",
          "Interactive Fiction",
          "Poetry",
          "Python",
          "Three.js",
        ],
      },
    ],
  }

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      strategy="beforeInteractive"
    />
  )
}
