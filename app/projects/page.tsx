import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { ExternalLink, Github, ArrowLeft, Shield, Server, Globe, ShoppingCart, Network } from "lucide-react"
import Link from "next/link"

const allProjects = [
  {
    title: "Secure Task API",
    subtitle: "Cloud Deployed Backend System",
    description: "Designed and deployed a Python-based REST API using FastAPI and PostgreSQL, to manage structured application data, implementing authentication, role-based access control, secure user management, and scalable backend architecture. Containerized the application with Docker and deployed to Azure App Service, integrating a CI pipeline for automated container builds.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "Azure", "CI/CD", "REST API"],
    detailsUrl: "https://securetaskapi-app-bnbybwgdhvhkhefd.eastus-01.azurewebsites.net/docs",
    githubUrl: "https://github.com/Learnlife001/SecureTaskAPI",
    icon: Server,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Cloud Security Monitoring & Log Analysis System",
    subtitle: "Honeypot Data Monitoring",
    description: "Built a Python-based honeypot data monitoring system to ingest and process log data, detecting patterns in system and network activity. Developed dashboards using Grafana to support threat visibility and monitoring of potential security events.",
    tags: ["Python", "Grafana", "Log Analysis", "Security", "Threat Detection", "Monitoring"],
    detailsUrl: "https://www.youtube.com/watch?v=XP2Ft1XvRCI",
    githubUrl: "https://github.com/Learnlife001/cowrie-geoalert-honeypot",
    icon: Shield,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Web Reconnaissance & Vulnerability Scanner",
    subtitle: "Automated Security Testing Tool",
    description: "Developed an automated vulnerability scanning tool to identify open ports, detect potential security weaknesses, and support basic penetration testing workflows. The tool helps security professionals identify vulnerabilities in web applications and network infrastructure.",
    tags: ["Python", "Security", "Automation", "Scanning", "Penetration Testing", "Network"],
    detailsUrl: "https://cyberrecon.vercel.app/",
    githubUrl: "https://github.com/Learnlife001/cyberrecon",
    icon: Globe,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "E-Commerce Platform with Crypto Payment",
    subtitle: "Full-Stack Web Application",
    description: "Built a full-stack web application using JavaScript and backend services, integrated a crypto payment system, designed backend for transactions validation, order processing, user management, and secure digital commerce operations.",
    tags: ["JavaScript", "Backend", "Crypto", "E-Commerce", "Payments", "Full-Stack"],
    detailsUrl: "https://learnlife-portfolio.vercel.app/products",
    githubUrl: "https://github.com/Learnlife001/learnlife-portfolio/tree/main/src/app/products",
    icon: ShoppingCart,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "3proxy Proxy Server",
    subtitle: "Secure Traffic Routing",
    description: "Deployed and configured a 3proxy server to enable secure traffic routing, traffic filtering rules while validating connection security in a network environment. Implemented access controls and logging for network traffic management.",
    tags: ["Networking", "Proxy", "Security", "Linux", "Traffic Management", "Infrastructure"],
    githubUrl: "https://github.com/Learnlife001",
    icon: Network,
    color: "from-indigo-500 to-blue-500"
  }
]

export default function ProjectsPage() {
  return (
    <div className="relative flex min-h-screen flex-col font-sans">
      <AnimatedBackground />
      <Navbar />
      
      <main className="relative z-10 mx-auto w-full max-w-6xl flex-1 px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 animate-fade-up">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              All Projects
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            A collection of my work in IT security, cloud infrastructure, and full-stack development. 
            Each project demonstrates practical skills in building secure, scalable systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {allProjects.map((project, index) => (
            <div 
              key={project.title}
              className="group relative rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/5 opacity-0 animate-fade-up"
              style={{ animationDelay: `${(index + 2) * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                {/* Icon */}
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${project.color} mb-4 lg:mb-0`}>
                  <project.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="mb-3">
                    <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-primary/80 font-medium">{project.subtitle}</p>
                  </div>
                  
                  <p className="mb-5 text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="rounded-md bg-secondary/80 px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {project.detailsUrl && (
                      <a
                        href={project.detailsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-background/80 hover:scale-105"
                      >
                        <Github className="h-4 w-4" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
