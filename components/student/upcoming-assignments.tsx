import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const assignments = [
  {
    id: 1,
    title: "Mathematics Assignment 3",
    course: "Advanced Mathematics",
    dueDate: "2024-02-20",
    status: "pending",
    mentor: {
      name: "Dr. Sarah Wilson",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "SW",
    },
  },
  {
    id: 2,
    title: "Physics Lab Report",
    course: "Physics 101",
    dueDate: "2024-02-22",
    status: "in-progress",
    mentor: {
      name: "Prof. Michael Chen",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MC",
    },
  },
  {
    id: 3,
    title: "Programming Project",
    course: "Computer Science",
    dueDate: "2024-02-25",
    status: "review",
    mentor: {
      name: "Dr. Emma Thompson",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "ET",
    },
  },
]

export function UpcomingAssignments() {
  return (
    <div className="space-y-8">
      {assignments.map((assignment) => (
        <div key={assignment.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={assignment.mentor.avatar} alt={assignment.mentor.name} />
            <AvatarFallback>{assignment.mentor.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{assignment.title}</p>
            <p className="text-sm text-muted-foreground">{assignment.course}</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Badge
              variant={
                assignment.status === "pending"
                  ? "destructive"
                  : assignment.status === "in-progress"
                    ? "default"
                    : "secondary"
              }
            >
              {assignment.status}
            </Badge>
            <span className="text-sm text-muted-foreground">
              Due {new Date(assignment.dueDate).toLocaleDateString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

