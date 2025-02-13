import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    description: "Learn the fundamentals of computer science and programming",
    progress: 75,
    students: 120,
    duration: "12 weeks",
    status: "active",
  },
  {
    id: 2,
    title: "Data Structures and Algorithms",
    description: "Master the core concepts of DSA with practical examples",
    progress: 45,
    students: 85,
    duration: "10 weeks",
    status: "active",
  },
  {
    id: 3,
    title: "Web Development Fundamentals",
    description: "Build modern web applications from scratch",
    progress: 0,
    students: 150,
    duration: "8 weeks",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Machine Learning Basics",
    description: "Introduction to machine learning concepts and applications",
    progress: 100,
    students: 95,
    duration: "14 weeks",
    status: "completed",
  },
]

export function CourseGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Card key={course.id} className="flex flex-col">
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{course.title}</h3>
              <Badge
                variant={
                  course.status === "active" ? "default" : course.status === "completed" ? "secondary" : "outline"
                }
              >
                {course.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4" />
                <span>{course.students} students</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
              {course.status !== "upcoming" && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} />
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">{course.status === "upcoming" ? "Enroll Now" : "View Course"}</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

