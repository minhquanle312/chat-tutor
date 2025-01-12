import prisma from '@/lib/db'

export const getManyChats = async () => {
  const chats = await prisma.chat.findMany({
    select: { id: true, createdAt: true, updatedAt: true, title: true },
  })

  return chats
}

export const createChat = async (message: string) => {
  const title = message.split(' ').splice(0, 4).join(' ')
  const newChat = await prisma.chat.create({
    data: {
      title,
      messages: { create: { content: message, type: 'text', sender: 'user' } },
    },
  })

  return newChat
}
