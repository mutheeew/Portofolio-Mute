"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart3, TrendingUp, PieChart, Activity, RefreshCw } from "lucide-react"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from "recharts"

// Sample data
const monthlyData = [
  { month: "Jan", revenue: 4000, users: 240, projects: 12 },
  { month: "Feb", revenue: 3000, users: 139, projects: 8 },
  { month: "Mar", revenue: 2000, users: 980, projects: 15 },
  { month: "Apr", revenue: 2780, users: 390, projects: 18 },
  { month: "May", revenue: 1890, users: 480, projects: 22 },
  { month: "Jun", revenue: 2390, users: 380, projects: 16 },
]

const skillsData = [
  { name: "React/Next.js", value: 95, color: "#0088FE" },
  { name: "TypeScript", value: 90, color: "#00C49F" },
  { name: "Node.js", value: 80, color: "#FFBB28" },
  { name: "Database", value: 75, color: "#FF8042" },
  { name: "DevOps", value: 65, color: "#8884d8" },
]

const performanceData = [
  { name: "Load Time", desktop: 1.2, mobile: 2.1 },
  { name: "FCP", desktop: 1.4, mobile: 2.3 },
  { name: "LCP", desktop: 1.8, mobile: 2.8 },
  { name: "CLS", desktop: 0.05, mobile: 0.08 },
  { name: "FID", desktop: 15, mobile: 35 },
]

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"]

export function ChartsDemo() {
  const [refreshKey, setRefreshKey] = useState(0)

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1)
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Interactive Charts & Data Visualization
            </CardTitle>
            <CardDescription>
              Berbagai tipe chart interaktif menggunakan Recharts dengan data yang dinamis
            </CardDescription>
          </div>
          <Button variant="outline" onClick={handleRefresh}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh Data
          </Button>
        </div>
      </CardHeader>
      <CardContent key={refreshKey}>
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Revenue Chart */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Monthly Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="revenue" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* User Growth */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    User Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area 
                        type="monotone" 
                        dataKey="users" 
                        stroke="#82ca9d" 
                        fill="#82ca9d" 
                        fillOpacity={0.6} 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Combined Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Multi-metric Dashboard</CardTitle>
                <CardDescription>Combined view of revenue, users, and projects</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="revenue" fill="#8884d8" />
                    <Line yAxisId="right" type="monotone" dataKey="users" stroke="#82ca9d" strokeWidth={2} />
                    <Line yAxisId="right" type="monotone" dataKey="projects" stroke="#ffc658" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Skills Pie Chart */}
              {/* <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="w-4 h-4" />
                    Skills Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsPieChart>
                      <Pie
                        data={skillsData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }: any) => `${name}: ${value}%`}
                      >
                        {skillsData.map((entry) => (
                          <Cell key={entry.name} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card> */}

              {/* Skills Progress */}
              {/* <Card>
                <CardHeader>
                  <CardTitle>Skills Proficiency</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skillsData.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <Badge variant="secondary">{skill.value}%</Badge>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-500"
                          style={{
                            width: `${skill.value}%`,
                            backgroundColor: skill.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card> */}
            </div>
          </TabsContent>

          <TabsContent value="performance">
            <Card>
              <CardHeader>
                <CardTitle>Website Performance Metrics</CardTitle>
                <CardDescription>
                  Core Web Vitals comparison between desktop and mobile
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={performanceData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={80} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="desktop" fill="#8884d8" name="Desktop" />
                    <Bar dataKey="mobile" fill="#82ca9d" name="Mobile" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends">
            <Card>
              <CardHeader>
                <CardTitle>Technology Trends & Adoption</CardTitle>
                <CardDescription>
                  Tracking adoption of modern web technologies over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#8884d8" 
                      strokeWidth={3}
                      dot={{ r: 6 }}
                      name="Revenue Growth"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="users" 
                      stroke="#82ca9d" 
                      strokeWidth={3}
                      dot={{ r: 6 }}
                      name="User Adoption"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}