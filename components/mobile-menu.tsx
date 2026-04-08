"use client"

import { Menu } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export interface MobileMenuSection {
  id: string
  label: string
}

interface MobileMenuProps {
  activeSection: string
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  sections: readonly MobileMenuSection[]
}

export function MobileMenu({
  activeSection,
  isOpen,
  onOpenChange,
  sections,
}: MobileMenuProps) {
  return (
    <div className="flex items-center gap-2 md:hidden">
      <ThemeToggle />
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetTrigger asChild>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/5 text-foreground transition-colors hover:bg-foreground/10"
            aria-label="Open navigation menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[85vw] max-w-xs border-l border-foreground/10 bg-background px-5 py-6"
        >
          <SheetHeader className="space-y-1 text-left">
            <SheetTitle className="font-mono text-sm uppercase tracking-[0.28em] text-foreground-secondary">
              Navigate
            </SheetTitle>
          </SheetHeader>
          <nav className="mt-8 flex flex-col gap-3 font-mono">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`rounded-md border px-4 py-3 text-sm uppercase tracking-[0.22em] transition-colors ${
                  activeSection === section.id
                    ? "border-green-500/40 bg-green-500/10 text-green-500"
                    : "border-foreground/10 text-foreground-secondary hover:border-foreground/20 hover:text-foreground"
                }`}
                onClick={() => onOpenChange(false)}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
