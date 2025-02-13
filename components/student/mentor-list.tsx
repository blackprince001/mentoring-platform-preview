import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const mentors = [
  {
    id: 1,
    name: "Dr. Sarah Wilson",
    subject: "Mathematics",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "SW",
    status: "online",
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    subject: "Physics",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "MC",
    status: "offline",
  },
  {
    id: 3,
    name: "Dr. Emma Thompson",
    subject: "Computer Science",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "ET",
    status: "online",
  },
]

export function MentorList() {
  return (
    <div className="space-y-8">
      {mentors.map((mentor) => (
        <div key={mentor.id} className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Avatar>
                <AvatarImage src={mentor.avatar} alt={mentor.name} />
                <AvatarFallback>{mentor.initials}</AvatarFallback>
              </Avatar>
              <span
                className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${
                  mentor.status === "online" ? "bg-green-500" : "bg-gray-500"
                }`}
              />
            </div>
            <div>
              <p className="text-sm font-medium leading-none">{mentor.name}</p>
              <p className="text-sm text-muted-foreground">{mentor.subject}</p>
            </div>
          </div>
          <Link href={`/dashboard/student/messages/${mentor.id}`}>
            <Button variant="outline" size="sm">
              Message
            </Button>
          </Link>
        </div>
      ))}
    </div>
  )
}

