"use client"

import { useState } from "react"
import { Menu, Search, ShoppingBag, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "المتجر", href: "#shop" },
  { label: "المجموعات", href: "#collections" },
  { label: "اللوك بوك", href: "#lookbook" },
  { label: "قصتنا", href: "#story" },
  { label: "تواصل", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2" aria-label="نُهى - الصفحة الرئيسية">
          <span className="font-serif text-2xl font-bold tracking-tight text-primary md:text-3xl">
            نُهى
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:inline">
            NUHA
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1 md:gap-2">
          <Button variant="ghost" size="icon" aria-label="بحث" className="hidden md:inline-flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="حسابي" className="hidden md:inline-flex">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="حقيبة التسوق" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -end-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-medium text-accent-foreground">
              ٢
            </span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="القائمة"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-border/60 bg-background md:hidden">
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-3 text-base text-foreground/80 transition-colors hover:text-primary last:border-b-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
