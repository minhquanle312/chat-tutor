'use server'

import { createChat } from '@/services/chat.service'
import { sendGenerateVideoRequest } from '@/services/vadoo.service'
import { $Enums } from '@prisma/client'
import { redirect } from 'next/navigation'

export const createChatAction = async (
  { type }: { type: $Enums.MessageType },
  formData: FormData
) => {
  const message = formData.get('message') as string

  if (!message) return

  const newChat = await createChat(message)

  if (type === 'video') {
    await sendGenerateVideoRequest(message)
  }

  redirect(`/c/${newChat.id}`)
}
