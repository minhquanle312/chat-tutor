import { cn } from '@/lib/utils'
import { getChatTitle } from '@/services/chat.service'
import { getManyMessages } from '@/services/message.service'
import { Metadata } from 'next'
import React from 'react'
import { ChatInput } from '../_components/chat-input'
import { VideoMessageResponse } from '../_components/video-message-response'

type Props = {
  params: Promise<{ chatId: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const chatId = (await params).chatId

  const messages = await getChatTitle(chatId)

  return {
    title: messages?.title || 'Current chat',
  }
}

export default async function Page({ params }: Props) {
  const chatId = (await params).chatId

  const messages = await getManyMessages(chatId)

  return (
    <>
      <div className="flex-1 relative -mr-4">
        <div className="absolute inset-0 overflow-y-scroll flex flex-col-reverse gap-4 pr-4">
          {messages.map((item) => (
            <React.Fragment key={item.id}>
              {item.sender === 'bot' && item.type === 'video' ? (
                <VideoMessageResponse data={item} />
              ) : (
                // <div className="rounded-md bg-muted self-start">
                //   <video width="400" controls className="rounded-t-md">
                //     <source src={item.content} type="video/mp4" />
                //     The video URL has expired
                //   </video>
                //   <div className="p-2">
                //     The video URL will be expired in 30 minutes
                //   </div>
                // </div>
                <div
                  className={cn(
                    'rounded bg-muted p-2 max-w-[75%]',
                    item.sender === 'user' ? 'self-end' : 'self-start'
                  )}
                >
                  {item.content}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <ChatInput chatId={chatId} />
    </>
  )
}
