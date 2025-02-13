import { CourseGrid } from "@/components/courses/course-grid"
import { CourseFilters } from "@/components/courses/course-filters"
import { SearchBar } from "@/components/courses/search-bar"

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Courses</h2>
        <p className="text-muted-foreground">Browse and manage your courses</p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <SearchBar />
        <CourseFilters />
      </div>

      <CourseGrid />
    </div>
  )
}

