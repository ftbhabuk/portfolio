---
title: Rendering Test — Markdown, Media & Styles
excerpt: Temporary post used to verify how Obsidian notes, images, video, embeds and text styles render on the portfolio.
date: 2026-10-21
category: meta
tags: [test, markdown, obsidian]
image: /images/workflow.png
---

This post exists to check the pipeline end to end. Everything below should render on the home page card and on this page.

## Text styles

Regular text, **bold**, *italic*, ***bold italic***, ~~strikethrough~~, `inline code`, and a [link to an older post](/blog/six-months-linux).

An autolink: https://example.com

A footnote reference[^1].

<mark>Highlighted with an HTML mark tag</mark> — this one works.

==Highlighted with Obsidian syntax== — this one is expected to render literally.

[^1]: Footnotes come from remark-gfm. If you can read this, they work.

## Lists

- First bullet
- Second bullet
  - Nested bullet

1. First step
2. Second step

- [x] Task list item that is done
- [ ] Task list item that is not

## Quote and callout

> A plain blockquote renders with the left border and tinted background.

> [!note] Obsidian callout
> This syntax is not supported yet; it should show as a blockquote with the literal `[!note]` text.

## Code

```ts
const greeting: string = "hello"
console.log(greeting)
```

## Table

| Element | Expected |
| --- | --- |
| Table | renders |
| Images | render |
| Video | renders |

## Images

Local image pasted into the vault (filename contains spaces, URL-encoded):

![Local attachment](attachments/Pasted%20image%202026-10-21%20101500.jpg)

*A local attachment served from /blog/attachments.*

External image:

![External image](https://picsum.photos/seed/portfolio/1200/600)

*Loaded from a remote URL.*

## Video

Embedded from YouTube:

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 2rem 0;">
  <iframe
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/LGSClSL4WG4"
    title="Embedded video"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>

Local video from the vault (small test clip):

<video controls preload="metadata" style="width: 100%; border-radius: 0.75rem;">
  <source src="attachments/demo-clip.mp4" type="video/mp4" />
</video>

*A local mp4 copied to public/blog by the asset sync.*

---

If everything above renders, the pipeline handles Obsidian markdown, media and embeds.
