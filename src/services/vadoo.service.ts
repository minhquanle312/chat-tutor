import {
  GENERATE_VIDEO_API_KEY,
  GENERATE_VIDEO_URL,
} from '@/constants/api.constant'
import axios from 'axios'

export const sendGenerateVideoRequest = async (prompt: string) => {
  if (!GENERATE_VIDEO_API_KEY || !prompt) return

  const res = await axios.post(
    GENERATE_VIDEO_URL,
    { topic: 'Custom', prompt },
    {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': GENERATE_VIDEO_API_KEY,
      },
    }
  )

  return res
}
