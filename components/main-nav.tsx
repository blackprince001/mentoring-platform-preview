import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { BookOpen } from "lucide-react"

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6" />
          <span className="font-bold">MentorConnect</span>
        </Link>
        <nav className="ml-auto flex items-center space-x-4">
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}

