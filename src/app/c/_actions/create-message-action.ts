'use server'

import { createMessage } from '@/services/message.service'
import { sendGenerateVideoRequest } from '@/services/vadoo.service'
import { $Enums } from '@prisma/client'
import { revalidatePath } from 'next/cache'

export const createMessageAction = async (
  { chatId, type }: { chatId: string; type: $Enums.MessageType },
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

  await createMessage({ chatId, content: message, type })

  if (type === 'video') {
    const response = await sendGenerateVideoRequest(message)
    console.log('🚀 ~ response:', response)
    return {
      status: 'success',
      message: `vid=${response?.data.vid}`,
    }
  }

  revalidatePath(`/c/${chatId}`)

  return {
    status: 'success',
    message: '',
  }
}

// export const createVideoMessageResponseAction = async (
//   { vid }: { vid: string},
//   _prevState: {
//     message: string
//   },
// ): Promise<{ status: string; message: string }> => {

// }
