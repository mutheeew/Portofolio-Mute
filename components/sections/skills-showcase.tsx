"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataTableDemo } from "./data-table-demo"
import { ChartsDemo } from "./charts-demo"
import { FormsDemo } from "./forms-demo"
import { AnimationsDemo } from "./animations-demo"

export function SkillsShowcase() {
  return (
    <section id="skills" className="relative py-20 px-4 bg-gradient-to-b from-background via-secondary/30 to-background overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills Demonstration
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full mt-2"></div>
          </div>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            🚀 Berikut adalah komponen-komponen yang saya buat untuk mendemonstrasikan 
            kemampuan frontend development saya. 
            <span className="font-semibold text-primary">Silakan berinteraksi dengan setiap komponen!</span> ✨
          </p>
        </div>

        <Tabs defaultValue="tables" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-2 lg:grid-cols-4 w-full max-w-2xl h-14 bg-background/50 backdrop-blur-xl border-2 border-primary/20 rounded-2xl p-2">
              <TabsTrigger 
                value="tables" 
                className="text-sm font-semibold rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-300"
              >
                📊 Data Tables
              </TabsTrigger>
              <TabsTrigger 
                value="charts" 
                className="text-sm font-semibold rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-300"
              >
                📈 Charts
              </TabsTrigger>
              <TabsTrigger 
                value="forms" 
                className="text-sm font-semibold rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white transition-all duration-300"
              >
                📝 Forms
              </TabsTrigger>
              <TabsTrigger 
                value="animations" 
                className="text-sm font-semibold rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-red-500 data-[state=active]:text-white transition-all duration-300"
              >
                ✨ Animations
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="tables" className="mt-8 animate-in fade-in-50 duration-500">
            <div className="transform transition-all duration-500 hover:scale-[1.01]">
              <DataTableDemo />
            </div>
          </TabsContent>

          <TabsContent value="charts" className="mt-8 animate-in fade-in-50 duration-500">
            <div className="transform transition-all duration-500 hover:scale-[1.01]">
              <ChartsDemo />
            </div>
          </TabsContent>

          <TabsContent value="forms" className="mt-8 animate-in fade-in-50 duration-500">
            <div className="transform transition-all duration-500 hover:scale-[1.01]">
              <FormsDemo />
            </div>
          </TabsContent>

          <TabsContent value="animations" className="mt-8 animate-in fade-in-50 duration-500">
            <div className="transform transition-all duration-500 hover:scale-[1.01]">
              <AnimationsDemo />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}