import * as React from 'react'
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/shared/ui/sidebar'
import { NavMain } from './nav-main'
import { NavUser } from './nav-user'
import { NavHeader } from './nav-header'
import { SIDEBAR_ITEMS } from '../model/sidebar.config'

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={SIDEBAR_ITEMS} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: 'John Doe',
            email: 'john.doe@example.com',
            avatar: '/avatars/john-doe.jpg',
          }}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
