"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"

const conversations = [
  {
    id: 1,
    name: "Sarah Wilson",
    message: "Can we discuss the assignment?",
    time: "2m ago",
    unread: true,
    online: true,
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "SW",
  },
  {
    id: 2,
    name: "Michael Chen",
    message: "Thanks for the feedback!",
    time: "1h ago",
    unread: false,
    online: false,
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "MC",
  },
  {
    id: 3,
    name: "Emma Thompson",
    message: "Meeting at 3 PM?",
    time: "3h ago",
    unread: true,
    online: true,
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "ET",
  },
]

export function MessageList({
  selectedId,
  setSelectedId,
  isMobile,
}: {
  selectedId: number
  setSelectedId: (id: number) => void
  isMobile: boolean
}) {
  return (
    <div
      className={cn(
        "flex w-full flex-col border-r md:w-[300px]",
        isMobile && selectedId === 0 ? "block" : "hidden md:block",
      )}
    >
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search messages..." className="pl-8" />
        </div>
      </div>
      <ScrollArea className="flex-1 py-4">
        {conversations.map((conversation) => (
          <Button
            key={conversation.id}
            variant="ghost"
            className={cn(
              "w-full justify-start px-4 py-6 hover:bg-muted/50",
              selectedId === conversation.id && "bg-muted",
            )}
            onClick={() => setSelectedId(conversation.id)}
          >
            <div className="flex items-start gap-4">
              <div className="relative">
                <Avatar>
                  <AvatarImage src={conversation.avatar} alt={conversation.name} />
                  <AvatarFallback>{conversation.initials}</AvatarFallback>
                </Avatar>
                {conversation.online && (
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-green-500" />
                )}
              </div>
              <div className="grid gap-1 text-left">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{conversation.name}</span>
                  <span className="text-xs text-muted-foreground">{conversation.time}</span>
                </div>
                <span className="text-sm text-muted-foreground line-clamp-1">{conversation.message}</span>
              </div>
              {conversation.unread && (
                <div className="ml-auto">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
              )}
            </div>
          </Button>
        ))}
      </ScrollArea>
    </div>
  )
}