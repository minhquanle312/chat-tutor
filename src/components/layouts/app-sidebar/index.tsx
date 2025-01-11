'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import Link from 'next/link'

const MOCK_CHAT_LIST: Array<{ title: string; id: string }> = [
  { title: 'conversation 1', id: '001' },
  { title: 'conversation 2', id: '002' },
  { title: 'conversation 3', id: '003' },
  { title: 'conversation 4', id: '004' },
]

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Chat list</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {MOCK_CHAT_LIST.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    // TODO: handle later
                    // isActive
                  >
                    <Link href={`/c/${item.id}`}>{item.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
