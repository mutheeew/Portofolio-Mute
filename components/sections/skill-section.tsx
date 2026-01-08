import { 
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiFramer,
  SiMui,
  SiReactrouter,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiZod,
} from "react-icons/si"
import { 
  Code2, 
  Sparkles,
  Component,
  Calendar,
  Database,
  Table,
  FileCheck,
  FileText,
  Shield,
  Key,
} from "lucide-react"

const stats = [
  {
    value: "2+",
    label: "Years Experience"
  },
  {
    value: "10+",
    label: "Project Completed"
  },
  {
    value: "9/5",
    label: "Support Available"
  },
  {
    value: "96%",
    label: "Clients Satisfaction"
  }
]

const skills = [
  { name: "React JS", icon: SiReact },
  { name: "Next JS", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Hero UI", icon: Sparkles },
  { name: "Shadcn UI", icon: Component },
  { name: "Material UI", icon: SiMui },
  { name: "Framer Motion", icon: SiFramer },
  { name: "React Router", icon: SiReactrouter },
  { name: "Date-fns", icon: Calendar },
  { name: "Zustand", icon: Database },
  { name: "TanStack Query", icon: Database },
  { name: "TanStack Table", icon: Table },
  { name: "React Hook Form", icon: FileCheck },
  { name: "Formik", icon: FileText },
  { name: "Yup", icon: Shield },
  { name: "Zod", icon: SiZod },
  { name: "NextAuth.js", icon: Key },
  { name: "Git", icon: SiGit },
  { name: "Github", icon: SiGithub },
  { name: "Vercel", icon: SiVercel },
  { name: "Netlify", icon: SiNetlify },
]

export default function SkillSection() {
  return (
    <section className="w-full py-12 bg-background">
      {/* Stats Section */}
      <div className="w-full px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Table */}
      <div className="w-full px-4 mt-16">
        <div className="w-full border-t-2 border-b-2 border-blue-500 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2 py-4 text-foreground font-medium cursor-default group transition-all duration-300 hover:scale-110"
                >
                  <Icon 
                    className="w-8 h-8 text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:rotate-12 transition-all duration-300" 
                  />
                  <span className="text-sm text-center group-hover:text-blue-600 transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}