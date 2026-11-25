"use client"

import { Menu } from "lucide-react"
import Link from "next/link"

import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export interface MobileMenuSection {
  id: string
  label: string
  href: string
}

interface MobileMenuProps {
  isActive: (section: MobileMenuSection) => boolean
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  sections: readonly MobileMenuSection[]
}

export function MobileMenu({
  isActive,
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
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-foreground/10 bg-foreground/5 text-foreground-secondary transition-colors hover:border-green-500/40 hover:text-green-500"
            aria-label="Open navigation menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[78vw] max-w-[300px] border-l border-foreground/15 bg-background p-0 [&>button]:hidden"
        >
          <div className="flex h-full flex-col font-mono">
            <div className="flex items-center justify-between border-b border-foreground/10 px-6 py-5 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-500">➜</span>
                <span className="text-foreground-secondary/70">~/bhabuk</span>
                <span className="text-foreground-secondary/30">$</span>
              </div>
              <SheetClose className="text-xs text-foreground-secondary/40 transition-colors hover:text-green-500">
                [esc]
              </SheetClose>
            </div>

            <SheetHeader className="sr-only">
              <SheetTitle>Navigate</SheetTitle>
            </SheetHeader>

            <nav className="flex-1 px-6 py-8">
              <ul className="space-y-2">
                {sections.map((section) => {
                  const active = isActive(section)
                  return (
                    <li key={section.id}>
                      <Link
                        href={section.href}
                        onClick={() => onOpenChange(false)}
                        className={`flex items-center gap-2 text-base transition-colors ${
                          active
                            ? "text-green-500"
                            : "text-foreground-secondary/70 hover:text-foreground"
                        }`}
                      >
                        <span className={`w-3 text-xs ${active ? "text-green-500" : "text-transparent"}`}>
                          ▸
                        </span>
                        {section.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
