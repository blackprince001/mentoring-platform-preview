import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

const courses = [
  {
    id: 1,
    name: "Advanced Mathematics",
    progress: 85,
    nextLesson: "Calculus III",
    nextDate: "2024-02-20",
  },
  {
    id: 2,
    name: "Physics 101",
    progress: 70,
    nextLesson: "Quantum Mechanics",
    nextDate: "2024-02-21",
  },
  {
    id: 3,
    name: "Computer Science",
    progress: 90,
    nextLesson: "Data Structures",
    nextDate: "2024-02-22",
  },
]

export function EnrolledCourses() {
  return (
    <div className="space-y-8">
      {courses.map((course) => (
        <div key={course.id} className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-medium leading-none">{course.name}</h3>
              <p className="text-sm text-muted-foreground">Next: {course.nextLesson}</p>
            </div>
            <Link href={`/dashboard/student/courses/${course.id}`}>
              <Button variant="ghost" size="sm">
                View Course
              </Button>
            </Link>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <Progress value={course.progress} />
          </div>
        </div>
      ))}
    </div>
  )
}

