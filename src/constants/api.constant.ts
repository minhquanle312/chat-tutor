export const VADOO_API_KEY = process.env.VADOO_API_KEY || ''

export const VADOO_API = {
  GENERATE_VIDEO: 'https://viralapi.vadoo.tv/api/generate_video',
  GET_VIDEO_URL: 'https://viralapi.vadoo.tv/api/get_video_url',
}

export const OPENAI_CONFIG = {
  PROJECT_ID: process.env.OPEN_AI_PROJECT_ID || '',
  ORGANIZATION_ID: process.env.OPEN_AI_ORGANIZATION_ID || '',
  SECRET_KEY: process.env.OPEN_AI_KEY || '',
}
