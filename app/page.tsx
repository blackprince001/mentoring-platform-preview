import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GraduationCap, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <section className="flex-1 space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to
            <span className="text-primary"> MentorConnect</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Select your role to get started
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="relative overflow-hidden rounded-lg border bg-background p-8">
              <div className="flex h-[300px] flex-col items-center justify-between">
                <div className="space-y-4 text-center">
                  <div className="inline-flex p-3 rounded-full bg-primary/10">
                    <GraduationCap className="h-12 w-12 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">I'm a Student</h2>
                  <p className="text-muted-foreground">
                    Access your courses, connect with mentors, and track your learning progress
                  </p>
                </div>
                <Link href="/dashboard/student" className="w-full">
                  <Button size="lg" className="w-full">
                    Enter as Student
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg border bg-background p-8">
              <div className="flex h-[300px] flex-col items-center justify-between">
                <div className="space-y-4 text-center">
                  <div className="inline-flex p-3 rounded-full bg-primary/10">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">I'm a Mentor</h2>
                  <p className="text-muted-foreground">Manage your students, track progress, and provide guidance</p>
                </div>
                <Link href="/dashboard/mentor" className="w-full">
                  <Button size="lg" className="w-full">
                    Enter as Mentor
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

