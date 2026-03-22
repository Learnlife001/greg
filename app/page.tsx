import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { SkillBadge } from "@/components/skill-badge"
import { ProjectCard } from "@/components/project-card"
import { FileText, Download, Shield, Server, Code, Cloud, ArrowDown } from "lucide-react"

const skills = [
  "IT Security",
  "Python",
  "FastAPI",
  "Docker",
  "Azure",
  "PostgreSQL",
  "REST APIs",
  "Log Analysis",
  "Network Monitoring",
  "Vulnerability Scanning",
  "Git",
  "CI/CD"
]

const projects = [
  {
    title: "Cloud Security Monitoring & Log Analysis System",
    description: "Python-based honeypot data monitoring system for ingesting and processing log data, detecting patterns in system and network activity with Grafana dashboards.",
    tags: ["Python", "Grafana", "Log Analysis", "Security"],
    detailsUrl: "https://www.youtube.com/watch?v=XP2Ft1XvRCI",
    githubUrl: "https://github.com/Learnlife001/cowrie-geoalert-honeypot"
  },
  {
    title: "Secure Task API",
    description: "Cloud-deployed REST API using FastAPI and PostgreSQL with authentication, role-based access control, and scalable architecture on Azure App Service.",
    tags: ["FastAPI", "PostgreSQL", "Docker", "Azure"],
    detailsUrl: "https://securetaskapi-app-bnbybwgdhvhkhefd.eastus-01.azurewebsites.net/docs",
    githubUrl: "https://github.com/Learnlife001/SecureTaskAPI"
  },
  {
    title: "Web Reconnaissance & Vulnerability Scanner",
    description: "Automated vulnerability scanning tool to identify open ports, detect potential security weaknesses, and support penetration testing workflows.",
    tags: ["Python", "Security", "Automation", "Scanning"],
    detailsUrl: "https://cyberrecon.vercel.app/",
    githubUrl: "https://github.com/Learnlife001/cyberrecon"
  },
  {
    title: "E-Commerce Platform with Crypto Payment",
    description: "Full-stack web application with crypto payment integration, backend transaction validation, order processing, and secure digital commerce operations.",
    tags: ["JavaScript", "Backend", "Crypto", "E-Commerce"],
    detailsUrl: "https://learnlife-portfolio.vercel.app/products",
    githubUrl: "https://github.com/Learnlife001/learnlife-portfolio/tree/main/src/app/products"
  }
]

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col font-sans">
      <AnimatedBackground />
      <Navbar />
      
      <main className="relative z-10 mx-auto w-full max-w-6xl flex-1 px-6 py-16">
        {/* Hero Section */}
        <section className="mb-24 pt-12 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary animate-fade-up">
            <Shield className="h-4 w-4" />
            Available for opportunities
          </div>
          
          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl animate-fade-up delay-100 opacity-0" style={{ animationFillMode: 'forwards' }}>
            <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text">
              Chigozie Gregory
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Okuma
            </span>
          </h1>
          
          <p className="mb-6 text-xl text-primary font-medium animate-fade-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
            IT Security | Cloud Monitoring | Python Automation
          </p>
          
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-fade-up delay-300 opacity-0" style={{ animationFillMode: 'forwards' }}>
            AI student with experience in IT security, system monitoring, and Python-based automation. 
            Focused on security operations, threat detection, and protecting cloud-based systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up delay-400 opacity-0" style={{ animationFillMode: 'forwards' }}>
            <a 
              href="/OKUMA G. CHIGOZIE .pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
            >
              <Download className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
              Download Resume
            </a>
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-6 py-3 font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-background/80 hover:scale-105"
            >
              View Projects
            </Link>
          </div>

          <div className="mt-16 animate-bounce">
            <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground" />
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-24">
          <div className="mb-8 flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold">Skills & Technologies</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <SkillBadge key={skill} name={skill} delay={index * 50} />
            ))}
          </div>
        </section>

        {/* Resume Preview */}
        <section className="mb-24">
          <div className="mb-8 flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold">Resume</h2>
          </div>
          <div className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <div className="space-y-3 text-muted-foreground">
                <div>
                  <p className="text-foreground font-medium">B.Sc. Artificial Intelligence</p>
                  <p className="text-sm">Technische Hochschule Deggendorf (THD) - Current</p>
                </div>
                <div>
                  <p className="text-foreground font-medium">B.Sc. Computer and Information Science</p>
                  <p className="text-sm">Zhejiang University of Science and Technology - June 2025</p>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 border border-primary/30 px-3 py-1 text-sm text-primary">Security+ (in progress)</span>
                <span className="rounded-full bg-accent/10 border border-accent/30 px-3 py-1 text-sm text-accent">AZ-104</span>
              </div>
            </div>
            <a 
              href="/OKUMA G. CHIGOZIE .pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              <FileText className="h-4 w-4" />
              View Full Resume (PDF)
            </a>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <Server className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.title} 
                {...project} 
                delay={index * 100}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/5 via-card/50 to-accent/5 p-8 text-center backdrop-blur-sm animate-fade-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
          <Cloud className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h2 className="mb-3 text-2xl font-semibold">Let&apos;s Work Together</h2>
          <p className="mb-6 text-muted-foreground">
            Interested in collaborating on security projects or need help with cloud infrastructure?
          </p>
          <a 
            href="mailto:Cjokuma23@outlook.com"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
          >
            Get In Touch
          </a>
        </section>
      </main>

      <Footer />
    </div>
  )
}
