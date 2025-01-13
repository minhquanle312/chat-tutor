'use client'

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
  const [videoURL, setVideoURL] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState<boolean>(true)

  useEffect(() => {
    // if (!videoId) return
    // const getVideoUrl = async () => {
    //   const res = await getVideoUrlAction({ videoId })

    //   if (res.message) setVideoURL(res.message)
    // }

    // getVideoUrl()
    if (!videoId) return

    // eslint-disable-next-line prefer-const
    let intervalId: string | number | NodeJS.Timeout | undefined

    const getVideoUrl = async () => {
      const res = await getVideoUrlAction({ videoId })

      if (res.status === 'completed' || res.status === 'error') {
        setVideoURL(res.message)
        setIsGenerating(false)
        clearInterval(intervalId) // Stop the interval when status is "success"
      }
      // else if (res.status !== 'in_progress') {
      //   clearInterval(intervalId) // Handle unexpected statuses to prevent infinite loops
      // }
    }

    intervalId = setInterval(getVideoUrl, 15 * 1000) // Calls every 15 seconds

    getVideoUrl()

    return () => clearInterval(intervalId) // Cleanup interval on component unmount
  }, [videoId])

  // return <div className="typing-animation" />

  if (!videoURL || isGenerating) return <div className="typing-animation" />
  // return (
  //   <div className="rounded bg-muted p-2 max-w-[75%] self-start">
  //     Generating video
  //   </div>
  // )

  return (
    <div className="rounded-md bg-muted self-start max-w-[75%] min-w-80">
      <video /* width="400" */ controls className="rounded-md w-full">
        <source src={videoURL} type="video/mp4" />
        The video URL has expired
      </video>
    </div>
  )
}
