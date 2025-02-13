"use client"
import { Button } from "@/components/ui/button"
import { Calendar, Users, BookOpen, MessageSquare, Settings, User } from "lucide-react"
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
  {
    label: "Settings",
    icon: Settings,
    href: "/dashboard/mentor/settings",
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="space-y-4 py-4 flex flex-col h-screen border-r bg-muted/30">
      <div className="px-3 py-2">
        <Link href="/dashboard">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link key={route.href} href={route.href}>
              <Button variant={pathname === route.href ? "secondary" : "ghost"} className="w-full justify-start">
                <route.icon className="mr-2 h-4 w-4" />
                {route.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

