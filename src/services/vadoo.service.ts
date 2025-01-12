import { VADOO_API, VADOO_API_KEY } from '@/constants/api.constant'
import axios from 'axios'

export const sendGenerateVideoRequest = async (prompt: string) => {
  if (!VADOO_API_KEY || !prompt) return

  const res = await axios.post(
    VADOO_API.GENERATE_VIDEO,
    { topic: 'Custom', prompt },
    {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': VADOO_API_KEY,
      },
    }
  )

  return res
}

export const getVideoUrl = async (videoId: string) => {
  if (!VADOO_API_KEY || !prompt) return

  const res = await axios.get(VADOO_API.GET_VIDEO_URL, {
    headers: {
      'X-API-KEY': VADOO_API_KEY,
    },
    params: { id: videoId },
  })

  return res
}
