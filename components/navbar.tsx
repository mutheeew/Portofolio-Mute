"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Code, Database, FolderOpen, User, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "./theme-toggle"

const navigation = [
  { name: "Home", href: "#home", icon: Code },
  { name: "Skills Demo", href: "#skills", icon: Database },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "About", href: "#summary", icon: User },
  { name: "Contact", href: "#contact", icon: Mail },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-xl border-b shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-8 flex items-center space-x-3 group">
            <div className="relative">
              <Code className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
              <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-yellow-500 animate-pulse" />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Frontend Portfolio
            </span>
          </Link>
          <nav className="flex items-center space-x-8 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group transition-colors hover:text-primary text-foreground/70 hover:text-foreground py-2"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Link>
            ))}
          </nav>
        </div>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="mr-2 md:hidden hover:bg-primary/10 transition-colors"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0 bg-background/95 backdrop-blur-xl">
            <Link
              href="/"
              className="flex items-center space-x-3 group mb-8"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative">
                <Code className="h-6 w-6 text-primary" />
                <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-yellow-500 animate-pulse" />
              </div>
              <span className="font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </Link>
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => {
                const IconComponent = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 text-sm font-medium transition-all hover:text-primary text-foreground/70 hover:bg-primary/10 p-3 rounded-lg group"
                  >
                    <IconComponent className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="flex items-center space-x-3 md:hidden group">
              <div className="relative">
                <Code className="h-6 w-6 text-primary" />
                <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-yellow-500 animate-pulse" />
              </div>
              <span className="font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </Link>
          </div>
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}