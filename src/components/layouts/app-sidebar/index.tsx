'use client'

import { Button } from '@/components/ui/button'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { getManyChats } from '@/services/chat.service'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface AppSidebarProps {
  chats: Awaited<ReturnType<typeof getManyChats>>
}

export const AppSidebar: React.FC<AppSidebarProps> = ({ chats }) => {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <Link href="/c" className="mb-2">
            <Button className="w-full">Create new chat</Button>
          </Link>
          <SidebarGroupContent>
            <SidebarMenu>
              {chats.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname.split('/c/')[1] === item.id}
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
