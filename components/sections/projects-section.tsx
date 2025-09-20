"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "🛒 E-commerce Platform",
    description: "Full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redux"],
    gradient: "from-blue-500 via-purple-500 to-pink-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    github: "https://github.com/example",
    live: "https://example.com",
    status: "Live",
    stats: { users: "1.2k+", performance: "98%" }
  },
  {
    title: "📋 Task Management Dashboard", 
    description: "Collaborative project management tool with real-time updates, team collaboration, and analytics",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "Tailwind"],
    gradient: "from-green-500 via-teal-500 to-blue-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    github: "https://github.com/example",
    live: "https://example.com",
    status: "In Development",
    stats: { teams: "50+", tasks: "10k+" }
  },
  {
    title: "🎨 Design System Library", 
    description: "Comprehensive component library with documentation, theming support, and accessibility features",
    technologies: ["React", "Storybook", "TypeScript", "Figma", "CSS-in-JS"],
    gradient: "from-purple-500 via-pink-500 to-red-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    github: "https://github.com/example",
    live: "https://example.com",
    status: "Open Source",
    stats: { downloads: "5k+", stars: "200+" }
  },
  {
    title: "📊 Analytics Dashboard", 
    description: "Real-time data visualization dashboard with interactive charts, filters, and export capabilities",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    gradient: "from-orange-500 via-red-500 to-pink-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    github: "https://github.com/example",
    live: "https://example.com",
    status: "Live",
    stats: { data: "1M+", uptime: "99.9%" }
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 px-4 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-green-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-full mt-2"></div>
          </div>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            🚀 Showcase project-project yang telah saya kerjakan dengan 
            <span className="font-semibold text-primary"> teknologi modern</span> dan 
            <span className="font-semibold text-primary"> best practices</span> ✨
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group overflow-hidden border-2 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${project.bgColor} border-opacity-20 hover:border-opacity-40`}
            >
              {/* Project Header with Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant="secondary" 
                    className="bg-white/90 text-gray-900 backdrop-blur-sm"
                  >
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex gap-4 text-sm">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="font-bold text-lg">{value}</div>
                        <div className="text-xs capitalize opacity-90">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Floating Icons */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-8 left-8 text-white text-6xl animate-pulse">💻</div>
                  <div className="absolute top-16 right-16 text-white text-4xl animate-bounce">⚡</div>
                  <div className="absolute bottom-8 left-1/2 text-white text-3xl animate-spin-slow">🎯</div>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-muted-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline"
                        className="bg-background/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group/btn hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Source Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className={`flex-1 bg-gradient-to-r ${project.gradient} hover:scale-105 transition-all duration-300 group/btn`}
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-dashed border-primary/30">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">🚀 Ready to Start Your Project?</h3>
              <p className="text-muted-foreground max-w-md">
                Mari diskusikan ide project Anda dan wujudkan menjadi kenyataan dengan teknologi terbaik!
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Build Something Amazing! 🎯
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}