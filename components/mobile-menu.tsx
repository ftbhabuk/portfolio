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
          className="w-[82vw] max-w-[320px] border-l border-foreground/15 bg-background p-0 [&>button]:hidden"
        >
          <div className="flex h-full flex-col font-mono">
            <div className="flex items-center justify-between border-b border-foreground/10 px-5 py-4 text-sm">
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

            <nav className="flex-1 px-5 py-6">
              <div className="mb-4 text-[10px] uppercase tracking-[0.28em] text-foreground-secondary/40">
                available sections
              </div>
              <ul className="border-t border-foreground/10">
                {sections.map((section, index) => {
                  const active = isActive(section)
                  return (
                    <li key={section.id} className="border-b border-foreground/10">
                      <Link
                        href={section.href}
                        onClick={() => onOpenChange(false)}
                        className={`group flex items-center gap-3 py-3.5 text-sm transition-colors ${
                          active ? "text-green-500" : "text-foreground-secondary/80 hover:text-green-500"
                        }`}
                      >
                        <span className="w-4 text-[10px] text-foreground-secondary/30">
                          0{index + 1}
                        </span>
                        <span className="text-green-500/50">$</span>
                        <span className="flex-1">
                          cd {section.label === "home" ? "~" : section.label}
                        </span>
                        <span className={`text-xs ${active ? "text-green-500" : "text-foreground-secondary/30 group-hover:text-green-500/60"}`}>
                          {active ? "●" : "→"}
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className="border-t border-foreground/10 px-5 py-4 text-[10px] text-foreground-secondary/40">
              <span className="text-green-500">$</span> press esc to close
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
