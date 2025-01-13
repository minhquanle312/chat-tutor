'use server'

import { getVideoUrl } from '@/services/vadoo.service'

export const getVideoUrlAction = async ({
  videoId,
}: {
  videoId: string
}): Promise<{ status: string; message: string }> => {
  const videoURL = await getVideoUrl(videoId)
  console.log('🚀 ~ videoURL:', videoURL)

  return { status: 'success', message: videoURL?.data.url || 'pending-url' }
}
