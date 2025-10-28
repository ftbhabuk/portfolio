# Blog Posts

This directory contains all blog posts as individual Markdown files.

## How to Add a New Blog Post

1. Create a new `.md` file in this directory (e.g., `my-new-post.md`)
2. Add frontmatter at the top with the following fields:

\`\`\`markdown
---
id: my-new-post
title: My Awesome Blog Post
excerpt: A brief description of what this post is about
date: January 20, 2025
category: Projects
readTime: 5
tags: [tag1, tag2, tag3]
image: /path-to-image.jpg
---

Your markdown content goes here...
\`\`\`

## Supported Markdown Features

### Headings
\`\`\`markdown
# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
\`\`\`

### Text Formatting
- **Bold text** using `**bold**`
- *Italic text* using `*italic*`
- <mark>Highlighted text</mark> using `<mark>text</mark>`
- `Inline code` using backticks

### Lists
\`\`\`markdown
- Unordered list item
- Another item

1. Ordered list item
2. Another item
\`\`\`

### Code Blocks
\`\`\`javascript
const example = "code block with syntax highlighting"
\`\`\`

### Blockquotes
\`\`\`markdown
> This is a blockquote
\`\`\`

### Tables
\`\`\`markdown
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
\`\`\`

### Links and Images
\`\`\`markdown
[Link text](https://example.com)
![Alt text](/image.jpg)
\`\`\`

### Horizontal Rule
\`\`\`markdown
---
\`\`\`

## Tips

- Keep your `id` field URL-friendly (lowercase, hyphens instead of spaces)
- Use descriptive tags for better categorization
- Add high-quality images to enhance your posts
- Write engaging excerpts to attract readers
\`\`\`
\`\`\`

```typescriptreact file="lib/blog-data.ts" isDeleted="true"
...deleted...
