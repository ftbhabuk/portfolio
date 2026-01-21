import Script from "next/script"

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bhabuk Bhattarai",
    alternateName: "Bhabuk",
    url: "https://bhabukb.com.np",
    image: "https://bhabukb.com.np/images/profile.png", // We'll talk about this
    jobTitle: "Full Stack Developer & Creative Coder",
    description:
      "Computer Science student, web developer, and creative writer exploring the intersection of technology and literature. Building with React, Next.js, and modern web technologies.",
    
    // What you know/do
    knowsAbout: [
      "Web Development",
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Creative Writing",
      "Poetry",
      "Literature",
      "Computer Science",
      "Frontend Development",
      "Python",
      "Three.js",
      "Generative Art",
      "Interactive Storytelling",
      "Web Scraping",
      "Automation",
      "Computer Vision",
    ],
    
    // Your skills
    hasOccupation: {
      "@type": "Occupation",
      name: "Web Developer",
      occupationLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressCountry: "NP",
        },
      },
      skills: "React, Next.js, TypeScript, Web Development, Technical Writing, Python, Three.js, Computer Vision, Generative Art, AI/ML",
    },
    
    // Social links
    sameAs: [
      "https://linkedin.com/in/bhabuk-bhattarai",
      "https://github.com/bhabukb",
      "https://twitter.com/FellowTravell20",
    ],
    
  
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        educationalLevel: "Undergraduate",
        about: "Computer Science",
      },
    ],
  }

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      strategy="afterInteractive"
    />
  )
}