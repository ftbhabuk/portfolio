"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"

interface MarkdownContentProps {
  content: string
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ children }) => (
          <h1 className="text-4xl font-bold mt-12 mb-6 text-foreground border-b border-border pb-4">{children}</h1>
        ),
        h2: ({ children }) => <h2 className="text-3xl font-semibold mt-10 mb-5 text-foreground">{children}</h2>,
        h3: ({ children }) => <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">{children}</h3>,
        h4: ({ children }) => <h4 className="text-xl font-semibold mt-6 mb-3 text-foreground">{children}</h4>,
        p: ({ children }) => <p className="text-base leading-relaxed mb-6 text-muted-foreground">{children}</p>,
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside mb-6 space-y-2 text-muted-foreground ml-4">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-inside mb-6 space-y-2 text-muted-foreground ml-4">{children}</ol>
        ),
        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 italic text-muted-foreground bg-primary/5 rounded-r-lg">
            {children}
          </blockquote>
        ),
        code: ({ className, children, ...props }) => {
          const isInline = !className

          if (isInline) {
            return (
              <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-primary border border-border">
                {children}
              </code>
            )
          }

          return (
            <code className="block bg-muted border border-border rounded-lg p-4 mb-6 text-sm font-mono text-muted-foreground overflow-x-auto">
              {children}
            </code>
          )
        },
        pre: ({ children }) => (
          <pre className="bg-muted border border-border rounded-lg p-4 mb-6 overflow-x-auto">{children}</pre>
        ),
        img: ({ src, alt }) => (
          <img
            src={src || "/placeholder.svg"}
            alt={alt || ""}
            className="rounded-lg my-8 w-full border border-border shadow-lg"
          />
        ),
        hr: () => <hr className="my-8 border-border" />,
        table: ({ children }) => (
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-border">{children}</table>
          </div>
        ),
        thead: ({ children }) => <thead className="bg-muted">{children}</thead>,
        tbody: ({ children }) => <tbody>{children}</tbody>,
        tr: ({ children }) => <tr className="border-b border-border">{children}</tr>,
        th: ({ children }) => (
          <th className="px-4 py-3 text-left font-semibold text-foreground border border-border">{children}</th>
        ),
        td: ({ children }) => <td className="px-4 py-3 text-muted-foreground border border-border">{children}</td>,
        strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
        em: ({ children }) => <em className="italic text-foreground">{children}</em>,
        mark: ({ children }) => <mark className="bg-primary/20 text-foreground px-1 rounded">{children}</mark>,
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
