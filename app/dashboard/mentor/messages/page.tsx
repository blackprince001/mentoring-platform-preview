"use client"

import { useEffect, useState } from "react"
import { MessageList } from "@/components/messages/message-list"
import { MessagePanel } from "@/components/messages/message-panel"

export default function MessagesPage() {
  const [selectedId, setSelectedId] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  return (
    <div className="flex h-screen">
      <MessageList
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        isMobile={isMobile}
      />
      <MessagePanel
        selectedId={selectedId}
        isMobile={isMobile}
        onBack={() => setSelectedId(0)}
      />
    </div>
  )
}