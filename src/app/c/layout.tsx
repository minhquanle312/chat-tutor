import { AppSidebar } from '@/components/layouts/app-sidebar'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { getManyChats } from '@/services/chat.service'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create new chat',
}

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const chats = await getManyChats()

  return (
    <SidebarProvider>
      <AppSidebar chats={chats} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
        </header>
        <main className="flex flex-1 flex-col justify-end gap-4 p-4">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
