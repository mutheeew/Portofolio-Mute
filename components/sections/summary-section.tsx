"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  User, 
  Briefcase, 
  Calendar, 
  MapPin, 
  Award,
  TrendingUp,
  Code,
  Database,
  Palette,
  Globe
} from "lucide-react"

const stats = [
  { label: "Years Experience", value: "3+", icon: Calendar },
  { label: "Projects Completed", value: "50+", icon: Briefcase },
  { label: "Client Satisfaction", value: "98%", icon: Award },
  { label: "Technologies Mastered", value: "15+", icon: Code },
]

const expertise = [
  {
    category: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "Vue.js"],
    level: "Expert",
    icon: Code
  },
  {
    category: "UI/UX Design",
    skills: ["Figma", "Design Systems", "Responsive Design", "User Research"],
    level: "Advanced",
    icon: Palette
  },
  {
    category: "Data & APIs",
    skills: ["REST APIs", "GraphQL", "Database Design", "Data Visualization"],
    level: "Advanced",
    icon: Database
  },
  {
    category: "Deployment & DevOps",
    skills: ["Vercel", "Netlify", "Docker", "CI/CD"],
    level: "Intermediate",
    icon: Globe
  },
]

const achievements = [
  "Meningkatkan performa website klien hingga 40% lebih cepat",
  "Membangun 15+ komponen reusable yang digunakan di multiple projects", 
  "Mengimplementasikan design system yang konsisten untuk 5+ aplikasi",
  "Mentoring 10+ junior developers dalam modern web development",
  "Berkontribusi dalam open source projects dengan 500+ GitHub stars"
]

export function SummarySection() {
  return (
    <section id="summary" className="relative py-20 px-4 bg-gradient-to-b from-secondary/20 to-background overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-400/5 to-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              Professional Summary
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 rounded-full mt-2"></div>
          </div>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            💼 Frontend Developer dengan <span className="font-semibold text-primary">passion</span> dalam menciptakan pengalaman web yang 
            <span className="font-semibold text-primary"> exceptional</span> dan <span className="font-semibold text-primary">performant</span>. 
            Berpengalaman dalam teknologi modern dan best practices ✨
          </p>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            const gradients = [
              "from-blue-500 to-cyan-500",
              "from-purple-500 to-pink-500", 
              "from-green-500 to-emerald-500",
              "from-orange-500 to-red-500"
            ]
            
            return (
              <Card 
                key={stat.label} 
                className="text-center group hover:scale-105 transition-all duration-300 border-2 hover:shadow-xl bg-gradient-to-b from-background to-secondary/20"
              >
                <CardContent className="pt-8 pb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${gradients[index]} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* About Me */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Saya adalah Frontend Developer yang bersemangat dalam membangun 
                aplikasi web yang tidak hanya beautiful, tapi juga functional dan 
                user-friendly. Dengan pengalaman 3+ tahun, saya telah bekerja 
                dengan berbagai klien dan proyek.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Expertise saya meliputi modern JavaScript frameworks, responsive 
                design, performance optimization, dan implementasi design systems. 
                Saya selalu update dengan teknologi terbaru dan best practices 
                dalam industri.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Jakarta, Indonesia
              </div>
            </CardContent>
          </Card>

          {/* Key Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Key Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Expertise Areas */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Areas of Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((area) => {
              const IconComponent = area.icon
              const getLevelColor = (level: string) => {
                switch (level) {
                  case "Expert": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  case "Advanced": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  case "Intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                  default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
                }
              }
              
              return (
                <Card key={area.category}>
                  <CardContent className="pt-6">
                    <div className="text-center mb-4">
                      <IconComponent className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <h4 className="font-semibold">{area.category}</h4>
                      <Badge className={getLevelColor(area.level)}>
                        {area.level}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      {area.skills.map((skill) => (
                        <div 
                          key={skill} 
                          className="text-sm text-center py-1 px-2 bg-secondary/30 rounded"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Tertarik untuk berkolaborasi? Mari diskusikan project Anda!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </Button>
            <Button variant="outline" size="lg">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}