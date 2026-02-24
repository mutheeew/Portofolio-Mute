"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageCircle,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Globe,
  Clock,
  CheckCircle,
  ExternalLink,
  ArrowRight
} from "lucide-react"

// Contact form schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  projectType: z.string().min(1, "Please select a project type."),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
})

type ContactFormValues = z.infer<typeof contactSchema>

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+62 812-3456-7890",
    href: "https://wa.me/6281234567890",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jakarta, Indonesia",
    href: "https://maps.google.com",
  },
  {
    icon: Globe,
    label: "Website",
    value: "yourportfolio.com",
    href: "https://yourportfolio.com",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/yourusername",
    color: "hover:text-gray-900 dark:hover:text-gray-100"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile",
    color: "hover:text-blue-600"
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/yourusername",
    color: "hover:text-blue-400"
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/yourusername",
    color: "hover:text-pink-500"
  },
]

const projectTypes = [
  { value: "website", label: "Website Development" },
  { value: "webapp", label: "Web Application" },
  { value: "ecommerce", label: "E-commerce Platform" },
  { value: "portfolio", label: "Portfolio Website" },
  { value: "landing", label: "Landing Page" },
  { value: "other", label: "Other" },
]

const budgetRanges = [
  { value: "under-5", label: "Under $500" },
  { value: "5-15", label: "$500 - $1,500" },
  { value: "15-50", label: "$1,500 - $5,000" },
  { value: "50-plus", label: "$5,000+" },
  { value: "discuss", label: "Let's discuss" },
]

export function ContactSection() {
  const [submissionStatus, setSubmissionStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      projectType: "",
      budget: "",
      message: "",
    },
  })

  async function onSubmit(values: ContactFormValues) {
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setSubmissionStatus({
        type: "success",
        message: `Thank you, ${values.name}! Your message has been sent successfully. I'll get back to you within 24 hours.`
      })
      
      form.reset()
      console.log("Contact form submitted:", values)
    } catch (error) {
      console.error("Contact form error:", error)
      setSubmissionStatus({
        type: "error",
        message: "Failed to send message. Please try again or contact me directly via email."
      })
    }
  }

  return (
    <section id="contact" className="relative py-20 px-4 bg-gradient-to-b from-background to-primary/5 overflow-hidden">

      <div 
          className="absolute inset-0" 
          style={{
          backgroundImage: `
              linear-gradient(to right, rgba(203, 213, 225, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(203, 213, 225, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
          }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h2 className="text-4xl lg:text-6xl font-bold">
              {"Let's Work Together"}
            </h2>
          </div>
          <p className="text-sm lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {"Ready to bring your project to life? Let's discuss how I can help you create something amazing. I'm available at working time (9 am - 6 pm). I'm always excited about new challenges!"}
          </p>
          <div className="flex justify-center">
            <a href="https://wa.me/6285189989891" target="_blank" rel="noopener noreferrer" className="mt-6 bg-gradient-to-t from-blue-600 to-blue-900 hover:bg-blue-700 text-white px-7 py-3.5 rounded-full font-semibold flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg text-sm">
                Hello@Mute
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}