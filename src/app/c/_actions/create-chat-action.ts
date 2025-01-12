'use server'

import { createChat } from '@/services/chat.service'
import { sendGenerateVideoRequest } from '@/services/vadoo.service'
import { $Enums } from '@prisma/client'
import { redirect } from 'next/navigation'

export const createChatAction = async (
  { type }: { type: $Enums.MessageType },
  _prevState: {
    message: string
  },
  formData: FormData
): Promise<{ status: string; message: string }> => {
  const message = formData.get('message') as string

  if (!message)
    return {
      status: 'error',
      message: 'Message can not be empty',
    }

  const newChat = await createChat(message)

  if (type === 'video') {
    await sendGenerateVideoRequest(message)
  }

  redirect(`/c/${newChat.id}`)
}
