# Blog Posts

This directory contains all blog posts for the portfolio. Each post is a separate TypeScript file for easy maintenance.

## Adding a New Blog Post

1. Create a new file: `your-post-slug.ts`
2. Export a blog post object with this structure:

\`\`\`typescript
export const yourPostSlug = {
  id: "your-post-slug",
  title: "Your Post Title",
  excerpt: "A brief description of your post",
  date: "Month Day, Year",
  category: "Category Name",
  readTime: 5,
  tags: ["tag1", "tag2", "tag3"],
  image: "/your-image.jpg",
  content: \`
## Your Markdown Content Here

Write your blog post using **Markdown** formatting.

### Supported Formatting

- **Bold text**
- *Italic text*
- \`inline code\`
- Code blocks with syntax highlighting
- > Blockquotes
- Lists (ordered and unordered)
- Tables
- Links and images
- <mark>Highlighted text</mark>

\`\`\`
}
\`\`\`

3. Import and add your post to `index.ts`:

\`\`\`typescript
import { yourPostSlug } from './your-post-slug'

export const allBlogPosts: BlogPost[] = [
  yourPostSlug,
  // ... other posts
]
\`\`\`

That's it! Your new blog post will automatically appear on the site.
\`\`\`

```tsx file="" isHidden
