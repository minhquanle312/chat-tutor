import prisma from '@/lib/db'
import { $Enums } from '@prisma/client'

export const getManyMessages = async (chatId: string) => {
  const messages = await prisma.message.findMany({
    where: { chatId },
    select: {
      id: true,
      type: true,
      content: true,
      sender: true,
      videoId: true,
    },
    orderBy: { createdAt: 'desc' },
  })

  return messages
}

export const createMessage = async (data: {
  chatId: string
  type: $Enums.MessageType
  content: string
  sender: $Enums.MessageSender
  videoId?: string
}) => {
  try {
    const newMessage = await prisma.message.create({ data })

    return { status: 'ok', data: newMessage }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      status: 'error',
      message: 'something went wrong',
    }
  }
}
