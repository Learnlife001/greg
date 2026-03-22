"use client"

interface SkillBadgeProps {
  name: string
  delay?: number
}

export function SkillBadge({ name, delay = 0 }: SkillBadgeProps) {
  return (
    <span 
      className="inline-flex items-center rounded-full border border-border/50 bg-secondary/50 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-primary/10 hover:scale-105 cursor-default opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {name}
    </span>
  )
}
