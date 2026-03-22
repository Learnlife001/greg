"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link 
          href="/" 
          className="group relative text-2xl font-bold tracking-tight"
        >
          <span className="relative z-10 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            Greg Lab
          </span>
          <span className="absolute -inset-1 -z-10 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 blur transition-opacity group-hover:opacity-100" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="relative text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all hover:after:w-full"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="relative text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all hover:after:w-full"
          >
            Projects
          </Link>
          <div className="flex items-center gap-4 border-l border-border pl-6">
            <a 
              href="https://github.com/Learnlife001" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/cjokuma23/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:Cjokuma23@outlook.com"
              className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl animate-fade-up">
          <div className="flex flex-col gap-4 px-6 py-4">
            <Link href="/" className="text-foreground py-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/projects" className="text-foreground py-2" onClick={() => setIsOpen(false)}>Projects</Link>
            <div className="flex gap-4 pt-4 border-t border-border">
              <a href="https://github.com/Learnlife001" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/cjokuma23/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:Cjokuma23@outlook.com" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
