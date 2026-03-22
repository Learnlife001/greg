"use client"

import { ArrowRight, ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  detailsUrl: string
  githubUrl?: string
  delay?: number
}

export function ProjectCard({ title, description, tags, detailsUrl, githubUrl, delay = 0 }: ProjectCardProps) {
  return (
    <div 
      className="group relative rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
      
      <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        {description}
      </p>
      
      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="rounded-md bg-secondary/80 px-2.5 py-1 text-xs font-medium text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-border/30">
        <a
          href={detailsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all hover:gap-2.5"
        >
          View Details <ExternalLink className="h-4 w-4" />
        </a>
        
        <div className="flex gap-3">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
