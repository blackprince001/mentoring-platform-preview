"use client"
import { Button } from "@/components/ui/button"
import { BookOpen, MessageSquare, User, Settings, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const routes = [
  {
    label: "Courses",
    icon: BookOpen,
    href: "/dashboard/mentor/courses",
  },
  {
    label: "Messages",
    icon: MessageSquare,
    href: "/dashboard/mentor/messages",
  },
  {
    label: "Profile",
    icon: User,
    href: "/dashboard/mentor/profile",
  },
]

export function Sidebar({
  isCollapsed,
  toggleSidebar,
}: {
  isCollapsed: boolean
  toggleSidebar: () => void
}) {
  const pathname = usePathname()

  return (
    <div className={`flex flex-col h-screen border-r bg-muted/30 ${isCollapsed ? "w-16" : "w-64"}`}>
      <div className="px-3 py-2">
        <div className="flex justify-between items-center">
          {!isCollapsed && (
            <Link href="/dashboard">
              <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
            </Link>
          )}
          <Button variant="ghost" onClick={toggleSidebar} className="p-2">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link key={route.href} href={route.href}>
              <Button variant={pathname === route.href ? "secondary" : "ghost"} className="w-full justify-start">
                <route.icon className="mr-2 h-4 w-4" />
                {!isCollapsed && route.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}