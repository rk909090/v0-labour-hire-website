"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "What We Do" },
  { href: "#about", label: "About Us" },
  { href: "#locations", label: "Where We Go" },
  { href: "#team", label: "Our Team" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2 flex justify-end items-center gap-4 text-sm">
          <a href="https://wa.me/61414425993" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="h-4 w-4" />
            <span>+61 414 425 993</span>
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <img src="/images/logo-20ai-20personnel.jpeg" alt="AI Personnel Australia" className="h-14 w-auto" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-primary">AI Personnel</span>
              <span className="text-sm text-muted-foreground block -mt-1">Australia</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-foreground" aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground mt-2">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
