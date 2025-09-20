"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

export function AnimationsDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          Animations & Micro-interactions
        </CardTitle>
        <CardDescription>
          Coming soon: Animasi menggunakan Framer Motion, scroll animations, dan micro-interactions
        </CardDescription>
      </CardHeader>
      <CardContent className="min-h-[400px] flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p>Animation components sedang dalam pengembangan...</p>
        </div>
      </CardContent>
    </Card>
  )
}