'use client'

// import { getVideoUrl } from '@/services/vadoo.service'
import { Message } from '@prisma/client'
import { useEffect, useState } from 'react'
import { getVideoUrlAction } from '../_actions/get-video-url-action'

interface VideoMessageResponseProps {
  data: Pick<Message, 'id' | 'type' | 'content' | 'sender' | 'videoId'>
}

export const VideoMessageResponse: React.FC<VideoMessageResponseProps> = ({
  data,
}) => {
  const { videoId } = data
  const [videoURL, setVideoURL] = useState('')

  useEffect(() => {
    if (!videoId) return
    const getVideoUrl = async () => {
      const res = await getVideoUrlAction({ videoId })

      setVideoURL(res.message)
    }

    getVideoUrl()
  }, [videoId])

  // const res = await getVideoUrl(videoId)
  // console.log('🚀 ~ >= ~ videoURL:', res)

  if (!videoId)
    return (
      <div className="rounded bg-muted p-2 max-w-[75%] self-start">
        Generating video
      </div>
    )

  return (
    <div className="rounded-md bg-muted self-start">
      <video width="400" controls className="rounded-md">
        <source src={videoURL} type="video/mp4" />
        The video URL has expired
      </video>
    </div>
  )
}
