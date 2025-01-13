import { OPENAI_CONFIG } from '@/constants/api.constant'
import OpenAI from 'openai'

const openai = new OpenAI({
  project: OPENAI_CONFIG.PROJECT_ID,
  organization: OPENAI_CONFIG.ORGANIZATION_ID,
  apiKey: OPENAI_CONFIG.SECRET_KEY,
})

export const openaiGenerateImage = async (prompt: string) => {
  console.log('🚀 ~ openaiGenerateImage ~ prompt:', prompt)

  const response = await openai.images.generate({
    model: 'dall-e-2',
    prompt: 'a white siamese cat',
    n: 1,
    size: '1024x1024',
  })

  return response.data[0].url
}
