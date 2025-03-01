"use client"

import type React from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { useState } from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:relative transition-transform duration-200 ease-in-out`}
      >
        <Sidebar isCollapsed={!isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        {/* Toggle Button for Mobile */}
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 mb-4 bg-muted rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {children}
      </div>
    </div>
  )
}