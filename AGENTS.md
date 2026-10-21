# AGENTS.md - Development Guidelines for This Portfolio

## Project Overview

This is a personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS v4. It features a terminal/CLI-inspired aesthetic with blog posts, project showcases, and smooth animations using Framer Motion.

---

## Build Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at http://localhost:3000 |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run vercel-build` | Vercel deployment build command |

### Running a Single Test

**No test framework is currently configured.** If adding tests, use Vitest or Jest with React Testing Library.

---

## Linting

ESLint is configured with `next/core-web-vitals` and `next/typescript` presets. Run with:

```bash
npm run lint
```

---

## Code Style Guidelines

### TypeScript

- **Strict mode enabled** - Do not disable strict checks
- Use explicit types for function parameters and return types
- Use `interface` for public APIs and props, `type` for unions/intersections
- Use `import { type Foo }` syntax for type-only imports

### Naming Conventions

- **Files**: kebab-case for utilities (`utils.ts`), kebab-case for components (`hero-section.tsx`)
- **Components**: PascalCase (`HeroSection`, `Button`)
- **Functions**: camelCase
- **Constants**: camelCase or SCREAMING_SNAKE_CASE for config values
- **Interfaces**: PascalCase, prefix with descriptive name (`BlogPostProps`)

### Imports

- **Path alias**: Use `@/*` for absolute imports from project root
  - Correct: `import { cn } from "@/lib/utils"`
  - Avoid: `import { cn } from "../../lib/utils"`
- **Order** (use ESLint auto-fix):
  1. External libraries (React, Next, Radix)
  2. Internal imports (@/components, @/lib)
  3. Relative imports (./components)
- Use `import { Foo }` for named exports, `import * as Foo` rarely

### Component Patterns

- Use `"use client"` directive for any component using:
  - `useState`, `useEffect`, `useRef`, `useContext`
  - Framer Motion components
  - Event handlers that need client-side execution
- Place components in `components/` directory
- UI primitives in `components/ui/` following shadcn/ui pattern
- Use `React.forwardRef` for components that accept refs
- Define props with TypeScript interfaces, extend `HTMLAttributes` when appropriate

Example:
```tsx
"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outlined"
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border p-4",
          variant === "outlined" && "border-2",
          className
        )}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"
```

### Tailwind CSS

- Use Tailwind v4 with CSS variables defined in `app/globals.css`
- Custom colors accessed via `bg-background`, `text-foreground`, etc.
- Use `cn()` utility from `@/lib/utils` for conditional classes
- Avoid hardcoded colors - use semantic tokens (`bg-muted`, `text-primary`)

### Error Handling

- Use TypeScript's strict null checking
- Return `undefined` or `null` for optional values, not error states
- Use `try/catch` sparingly - let errors bubble to error boundaries
- For async operations, handle loading and error states in UI

### File Organization

```
/home/bbook/projects/portfolio
├── app/                    # Next.js App Router pages
│   ├── blog/[id]/         # Dynamic blog post pages
│   ├── api/               # API routes (OG images)
│   └── globals.css        # CSS variables and Tailwind
├── components/            # React components
│   ├── ui/                # Reusable UI primitives
│   └── *.tsx              # Feature-specific components
├── lib/                   # Utilities and data
│   ├── utils.ts           # cn() helper
│   ├── blog/              # Blog loader (server-only) + types
│   └── blog-posts/        # Public barrel: re-exports blog loader/types
├── hooks/                 # Custom React hooks
├── public/                # Static assets
├── scripts/               # sync-assets.mjs (content/blog -> public/blog)
└── content/blog/          # Markdown mirror of the Obsidian vault (generated)
```

---

## Common Patterns

### Using Radix UI Components

Import from `@radix-ui/react-*` packages. Wrap with custom styling:

```tsx
import * as Dialog from "@radix-ui/react-dialog"
import { cn } from "@/lib/utils"

export function CustomDialog({ ... }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Open</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={cn("fixed inset-0 bg-black/50")} />
        <Dialog.Content className={cn("fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-6 rounded-lg")}>
          Content
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
```

### Blog Posts

Content is **markdown, not TypeScript**. Notes live in the `blog/` folder of the Obsidian vault
(`ftbhabuk/obsidian-vault`) and are mirrored into `content/blog/` by a GitHub Action. Never edit
`content/blog/` by hand — it is overwritten on the next sync.

`lib/blog/posts.ts` is server-only: it reads `content/blog/**/*.md` with `gray-matter`, validates
frontmatter, computes `readTime`, formats dates and returns `BlogPost` objects. Client components
must receive posts as props (see `app/page.tsx` and `app/blog/[id]/page.tsx`); importing the loader
from a client component fails the build on purpose (`server-only`).

Frontmatter:

```yaml
---
title: My Post                   # optional if the note starts with "# My Post"
excerpt: One line for cards/SEO  # optional, falls back to the first paragraph
date: 2026-10-21                 # required, YYYY-MM-DD
category: tech & truth           # optional, defaults to "blog"
tags: [react, typescript]        # optional
image: /images/hero.png          # optional hero image from public/images
draft: true                      # optional, excluded from the build
---
```

- `content/blog/_drafts/` and files starting with `_` or named `README.md` are ignored.
- Relative images (`![](attachments/x.png)`) are rewritten to `/blog/attachments/x.png`;
  `scripts/sync-assets.mjs` copies non-markdown files to `public/blog/` before dev/build.
- `react-markdown` is configured with `remark-gfm`, `remark-breaks` (so single newlines render
  like Obsidian) and `rehype-raw`.

---

## Dependencies

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4, class-variance-authority
- **UI**: Radix UI primitives, Lucide icons
- **Animation**: Framer Motion
- **Forms**: React Hook Form
- **Markdown**: react-markdown, remark-gfm, remark-breaks, rehype-raw, gray-matter

---

## Notes for Agents

1. **No tests exist** - Do not break existing functionality when editing
2. **Vercel deployment** - Uses Vercel Analytics; ensure compatible with deployment target
3. **Dark mode** - Theme toggle uses CSS custom properties via `next-themes` pattern (class-based)
4. **SEO** - OG images generated dynamically in `app/api/og/`
5. **Fonts** - Uses Geist font family from `next/font/google`
