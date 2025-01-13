'use server'

import { getVideoUrl } from '@/services/vadoo.service'

export const getVideoUrlAction = async ({
  videoId,
}: {
  videoId: string
}): Promise<{
  status: 'in_progress' | 'completed' | 'error'
  message: string
}> => {
  const videoURL = await getVideoUrl(videoId)
  console.log('🚀 ~ videoURL:', videoURL)

  return {
    status: videoURL ? videoURL.data.status : 'error',
    message: videoURL?.data.url || 'pending-url',
  }
}
