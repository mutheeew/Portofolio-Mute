"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, BarChart3, Palette, Zap, Globe, ArrowDown, Play, Download, Star, Users, Coffee } from "lucide-react"

const skills = [
  { name: "React/Next.js", icon: Code, color: "bg-blue-500/10 text-blue-600 border-blue-200 dark:border-blue-800" },
  { name: "TypeScript", icon: Code, color: "bg-blue-500/10 text-blue-600 border-blue-200 dark:border-blue-800" },
  { name: "Data Visualization", icon: BarChart3, color: "bg-green-500/10 text-green-600 border-green-200 dark:border-green-800" },
  { name: "UI/UX Design", icon: Palette, color: "bg-purple-500/10 text-purple-600 border-purple-200 dark:border-purple-800" },
  { name: "Performance", icon: Zap, color: "bg-yellow-500/10 text-yellow-600 border-yellow-200 dark:border-yellow-800" },
  { name: "Database", icon: Database, color: "bg-red-500/10 text-red-600 border-red-200 dark:border-red-800" },
]

const stats = [
  { label: "Happy Clients", value: "50+", icon: Users },
  { label: "Projects Done", value: "100+", icon: Star },
  { label: "Coffee Consumed", value: "∞", icon: Coffee },
]

export function HeroSection() {
  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-yellow-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="outline" className="w-fit animate-bounce border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-900/20 dark:text-green-300">
                <Globe className="w-3 h-3 mr-1" />
                🚀 Available for new opportunities
              </Badge>
              
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-7xl font-bold tracking-tight bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 dark:from-gray-100 dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                  Frontend Developer
                </h1>
                <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                  & UI Craftsman
                </h2>
              </div>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Saya menciptakan pengalaman web yang 
                <span className="font-semibold text-primary"> interaktif, </span> 
                <span className="font-semibold text-primary"> performant, </span> 
                dan <span className="font-semibold text-primary"> beautiful. </span>
                Portfolio ini bukan hanya showcase project, tapi 
                <span className="font-bold text-foreground bg-yellow-200/30 dark:bg-yellow-900/30 px-1 rounded"> 
                  membuktikan kemampuan teknis
                </span> 
                melalui komponen yang bisa Anda coba langsung! ✨
              </p>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <Badge 
                    key={skill.name} 
                    variant="outline" 
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${skill.color}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {skill.name}
                  </Badge>
                )
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={stat.label} className="text-center group">
                    <IconComponent className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={scrollToSkills}
              >
                <Play className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Lihat Skills Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto group border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                <Download className="w-4 h-4 mr-2 group-hover:translate-y-1 transition-transform" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Content - Interactive Preview Cards */}
          <div className="space-y-6">
            <div className="relative">
              <Card className="p-6 border-2 border-dashed border-primary/20 bg-gradient-to-br from-background to-secondary/20 backdrop-blur hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-0">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        🎯 Yang Bisa Saya Demonstrasikan
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Interaktif components yang bisa dicoba langsung
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="p-4 text-center group hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all duration-300 hover:scale-105 cursor-pointer border-blue-200 dark:border-blue-800">
                        <Database className="w-10 h-10 mx-auto mb-3 text-blue-600 group-hover:scale-110 transition-transform" />
                        <p className="font-semibold text-sm">Advanced Tables</p>
                        <p className="text-xs text-muted-foreground mt-1">Pagination, Filter, Sort</p>
                      </Card>
                      
                      <Card className="p-4 text-center group hover:bg-green-50 dark:hover:bg-green-950/20 transition-all duration-300 hover:scale-105 cursor-pointer border-green-200 dark:border-green-800">
                        <BarChart3 className="w-10 h-10 mx-auto mb-3 text-green-600 group-hover:scale-110 transition-transform" />
                        <p className="font-semibold text-sm">Data Visualization</p>
                        <p className="text-xs text-muted-foreground mt-1">Interactive Charts</p>
                      </Card>
                      
                      <Card className="p-4 text-center group hover:bg-purple-50 dark:hover:bg-purple-950/20 transition-all duration-300 hover:scale-105 cursor-pointer border-purple-200 dark:border-purple-800">
                        <Palette className="w-10 h-10 mx-auto mb-3 text-purple-600 group-hover:scale-110 transition-transform" />
                        <p className="font-semibold text-sm">UI Components</p>
                        <p className="text-xs text-muted-foreground mt-1">Forms & Animations</p>
                      </Card>
                      
                      <Card className="p-4 text-center group hover:bg-yellow-50 dark:hover:bg-yellow-950/20 transition-all duration-300 hover:scale-105 cursor-pointer border-yellow-200 dark:border-yellow-800">
                        <Zap className="w-10 h-10 mx-auto mb-3 text-yellow-600 group-hover:scale-110 transition-transform" />
                        <p className="font-semibold text-sm">Performance</p>
                        <p className="text-xs text-muted-foreground mt-1">Optimized & Fast</p>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Scroll Indicator */}
            <div className="text-center">
              <Button 
                variant="ghost" 
                className="group hover:bg-transparent" 
                onClick={scrollToSkills}
              >
                <div className="flex flex-col items-center space-y-2">
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">
                    Scroll untuk melihat kemampuan saya! 
                  </p>
                  <ArrowDown className="w-5 h-5 animate-bounce text-primary" />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}