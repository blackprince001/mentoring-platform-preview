export type Role = "STUDENT" | "MENTOR"

export interface User {
  id: string
  name: string
  email: string
  role: Role
  avatar?: string
}

// This would normally come from your auth system
export const getCurrentUser = (): User => {
  return {
    id: "1",
    name: "John Doe",
    email: "john@university.edu",
    role: "STUDENT",
    avatar: "/placeholder.svg?height=32&width=32",
  }
}

