import prisma from '@/lib/db'

export const getManyChats = async () => {
  const chats = await prisma.chat.findMany({
    select: { id: true, createdAt: true, updatedAt: true, title: true },
  })

  return chats
}
