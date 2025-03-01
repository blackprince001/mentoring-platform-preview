"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { Paperclip, Send } from "lucide-react"
import { useState } from "react"

const messages = [
  {
    id: 1,
    content: "Hi, I had a question about the latest assignment.",
    sender: "student",
    timestamp: "10:30 AM",
  },
  {
    id: 2,
    content: "Of course! What would you like to know?",
    sender: "mentor",
    timestamp: "10:32 AM",
  },
  {
    id: 3,
    content:
      "I'm having trouble understanding the requirements for the final project. Could you clarify the main objectives?",
    sender: "student",
    timestamp: "10:33 AM",
  },
  {
    id: 4,
    content:
      "The main objectives are to demonstrate your understanding of the core concepts we've covered. You'll need to create a complete solution that includes both frontend and backend components. Would you like me to break down the specific requirements?",
    sender: "mentor",
    timestamp: "10:35 AM",
  },
]

export function MessagePanel({
  selectedId,
  isMobile,
  onBack,
}: {
  selectedId: number
  isMobile: boolean
  onBack: () => void
}) {
  const [message, setMessage] = useState("")

  return (
    <Card className={cn("flex flex-1 flex-col", isMobile && selectedId === 0 ? "hidden" : "block")}>
      {isMobile && (
        <div className="flex items-center gap-4 border-b p-4">
          <Button variant="ghost" onClick={onBack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sarah Wilson" />
            <AvatarFallback>SW</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">Sarah Wilson</h3>
            <p className="text-sm text-muted-foreground">Online</p>
          </div>
        </div>
      )}

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "mentor" ? "justify-start" : "justify-end"}`}>
              <div
                className={`rounded-lg px-4 py-2 max-w-[80%] ${msg.sender === "mentor" ? "bg-muted" : "bg-primary text-primary-foreground"
                  }`}
              >
                <p className="text-sm">{msg.content}</p>
                <span className="text-xs opacity-70">{msg.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="border-t p-4">
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
            rows={1}
          />
          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}