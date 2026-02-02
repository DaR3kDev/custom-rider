import type { LucideIcon } from 'lucide-react'

export type Role = 'ADMIN' | 'EMPLOYEE'

export type SidebarItem = {
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
  roles?: Role[]
  items?: SidebarItem[]
}
