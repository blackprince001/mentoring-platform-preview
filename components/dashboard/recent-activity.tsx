import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    name: "Sarah Wilson",
    action: "scheduled a mentoring session",
    time: "2 hours ago",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "SW",
  },
  {
    name: "Michael Chen",
    action: "shared course materials",
    time: "5 hours ago",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "MC",
  },
  {
    name: "Emma Thompson",
    action: "completed assignment review",
    time: "1 day ago",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "ET",
  },
  {
    name: "David Kim",
    action: "sent you a message",
    time: "1 day ago",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "DK",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.avatar} alt={activity.name} />
            <AvatarFallback>{activity.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.name}</p>
            <p className="text-sm text-muted-foreground">{activity.action}</p>
          </div>
          <div className="ml-auto text-sm text-muted-foreground">{activity.time}</div>
        </div>
      ))}
    </div>
  )
}

