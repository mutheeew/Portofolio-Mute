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
  ExternalLink
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
      // Simulate API call
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
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-400/5 to-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full mt-2"></div>
          </div>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            🚀 Ready to bring your project to life? Let's discuss how I can help 
            you create something <span className="font-semibold text-primary">amazing</span>. 
            I'm always excited about <span className="font-semibold text-primary">new challenges</span>! ✨
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/20 border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  Get In Touch
                </CardTitle>
                <CardDescription className="text-base">
                  💬 Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon
                  const gradients = [
                    "from-blue-500 to-cyan-500",
                    "from-green-500 to-emerald-500", 
                    "from-purple-500 to-pink-500",
                    "from-orange-500 to-red-500"
                  ]
                  
                  return (
                    <a 
                      key={contact.label}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 group hover:scale-[1.02] border border-transparent hover:border-primary/20"
                    >
                      <div className={`p-3 bg-gradient-to-br ${gradients[index]} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {contact.label}
                        </div>
                        <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {contact.value}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 text-primary" />
                    </a>
                  )
                })}

                {/* Enhanced Social Links */}
                <div className="pt-6 border-t border-gradient-to-r from-primary/20 to-secondary/20">
                  <h4 className="font-semibold mb-4 text-lg">🌐 Follow Me</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-secondary/30 to-secondary/10 hover:from-primary/20 hover:to-secondary/30 transition-all duration-300 group hover:scale-105"
                          aria-label={social.label}
                        >
                          <IconComponent className={`w-5 h-5 transition-colors duration-300 ${social.color}`} />
                          <span className="text-sm font-medium">{social.label}</span>
                        </a>
                      )
                    })}
                  </div>
                </div>

                {/* Enhanced Response Time */}
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border-2 border-green-200/50 dark:border-green-800/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 dark:text-green-300">⚡ Quick Response</div>
                      <div className="text-sm text-green-600 dark:text-green-400">
                        Usually responds within 24 hours
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="bg-gradient-to-br from-background to-secondary/10 border-2 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  Send me a message
                </CardTitle>
                <CardDescription className="text-base">
                  📝 Tell me about your project and let's start the conversation
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submissionStatus.type && (
                  <div className={`mb-6 p-4 rounded-lg border ${
                    submissionStatus.type === "success" 
                      ? "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200"
                      : "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200"
                  }`}>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      {submissionStatus.message}
                    </div>
                  </div>
                )}

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="What's this about?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="projectType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select project type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {projectTypes.map((type) => (
                                  <SelectItem key={type.value} value={type.value}>
                                    {type.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Budget Range (Optional)</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select budget range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {budgetRanges.map((budget) => (
                                  <SelectItem key={budget.value} value={budget.value}>
                                    {budget.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            The more details you provide, the better I can understand your needs.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg" 
                      size="lg"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? (
                        <>
                          <Clock className="w-4 h-4 mr-2 animate-spin" />
                          Sending Message... ⚡
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message 🚀
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}