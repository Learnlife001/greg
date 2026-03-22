import { Github, Linkedin, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-3 text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Greg Lab
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              IT Security, Cloud Monitoring, and Python Automation specialist focused on building secure, scalable systems.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-3 font-semibold text-foreground">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="mailto:Cjokuma23@outlook.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" /> Cjokuma23@outlook.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Bavaria, Germany
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-3 font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Learnlife001" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/cjokuma23/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:Cjokuma23@outlook.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/50 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Chigozie Gregory Okuma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
