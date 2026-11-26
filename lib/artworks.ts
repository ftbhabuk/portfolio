export interface Artwork {
  id: string
  title: string
  description: string
  meta: string
  image: string
  alt: string
  href: string
}

export const artworks: Artwork[] = [
  {
    id: "thoughts-in-ink",
    title: "Thoughts, in ink",
    description:
      "My real diary, rebuilt as a web artwork — handwritten pages, little portraits, and margin drawings, all drawn from scratch in JavaScript.",
    meta: "pure JavaScript · hand-drawn pen engine",
    image: "/images/art/diary.webp",
    alt: "A handwritten diary page drawn on canvas",
    href: "https://diary-canvas.pages.dev/",
  },
  {
    id: "ascent",
    title: "Ascent",
    description:
      "Falcon 9, imagined as a jellyfish — launch and landing held in one glowing arc. The entire painting is drawn from scratch in pure JavaScript on canvas.",
    meta: "pure JavaScript · canvas 2D",
    image: "/images/art/spaceflight.webp",
    alt: "A glowing arc rising over a twilight sea",
    href: "https://spaceflight-canvas.pages.dev/",
  },
]
