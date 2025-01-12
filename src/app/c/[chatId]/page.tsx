import { cn } from '@/lib/utils'
import { getManyMessages } from '@/services/message.service'
import { ChatInput } from '../_components/chat-input'
import React from 'react'

export default async function Page({
  params,
}: {
  params: Promise<{ chatId: string }>
}) {
  const chatId = (await params).chatId

  const messages = await getManyMessages(chatId)

  return (
    <>
      <div className="flex-1 relative -mr-4">
        <div className="absolute inset-0 overflow-y-scroll flex flex-col-reverse gap-4 pr-4">
          {messages.map((item) => (
            <React.Fragment key={item.id}>
              {item.sender === 'bot' && item.type === 'video' ? (
                <div className="rounded-md bg-muted self-start">
                  <video width="400" controls className="rounded-t-md">
                    <source src={item.content} type="video/mp4" />
                    The video URL has expired
                  </video>
                  <div className="p-2">
                    The video URL will be expired in 30 minutes
                  </div>
                </div>
              ) : (
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
