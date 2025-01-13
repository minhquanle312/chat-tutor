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
    await prisma.message.create({ data: { ...data } })

    return { status: 'ok' }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      status: 'error',
      message: 'something went wrong',
    }
  }
}
