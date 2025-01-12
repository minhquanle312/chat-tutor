'use server'

import { createMessage } from '@/services/message.service'
import { sendGenerateVideoRequest } from '@/services/vadoo.service'
import { $Enums } from '@prisma/client'
import { revalidatePath } from 'next/cache'

export const createMessageAction = async (
  { chatId, type }: { chatId: string; type: $Enums.MessageType },
  formData: FormData
) => {
  const message = formData.get('message') as string

  if (!message) return

  await createMessage({ chatId, content: message, type })

  if (type === 'video') {
    const response = await sendGenerateVideoRequest(message)
    console.log('🚀 ~ response:', response)
  }

  revalidatePath(`/c/${chatId}`)
}
