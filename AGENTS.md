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
│   └── blog-posts/        # Blog post content
├── hooks/                 # Custom React hooks
├── public/                # Static assets
└── content/               # Blog content (markdown)
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

Add new blog posts in `lib/blog-posts/` as TypeScript modules exporting a `BlogPost` object:

```ts
export const myPost = {
  id: "my-post",
  title: "My Post",
  excerpt: "Brief description",
  date: "2024-01-01",
  category: "Technology",
  readTime: 5,
  tags: ["react", "typescript"],
  content: "Full markdown content..."
}
```

---

## Dependencies

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4, class-variance-authority
- **UI**: Radix UI primitives, Lucide icons
- **Animation**: Framer Motion
- **Forms**: React Hook Form
- **Markdown**: react-markdown, remark-gfm, rehype-highlight

---

## Notes for Agents

1. **No tests exist** - Do not break existing functionality when editing
2. **Vercel deployment** - Uses Vercel Analytics; ensure compatible with deployment target
3. **Dark mode** - Theme toggle uses CSS custom properties via `next-themes` pattern (class-based)
4. **SEO** - OG images generated dynamically in `app/api/og/`
5. **Fonts** - Uses Geist font family from `next/font/google`
