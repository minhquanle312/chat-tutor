'use client'

import { Button } from '@/components/ui/button'
import { SendHorizonal } from 'lucide-react'
import { useState } from 'react'

interface ChatMessage {
  message: string
  type: 'answer' | 'question'
  id: number
}

export default function Page() {
  const [messageList, setMessageList] = useState<Array<ChatMessage>>(() => [
    { id: 1, message: 'I have a message', type: 'question' },
    { id: 2, message: 'What do you want', type: 'answer' },
  ])

  return (
    <div>
      <div className="bg-gray-400 mb-6">
        {messageList.map((item) => (
          <div key={item.id}>{item.message}</div>
        ))}
      </div>
      <form className="flex w-full flex-none gap-2">
        <div className="flex flex-1 items-center gap-2 rounded-md border border-input px-2 py-1 focus-within:outline-none focus-within:ring-1 focus-within:ring-ring lg:gap-4">
          <label className="flex-1">
            <span className="sr-only">Chat Text Box</span>
            <input
              type="text"
              placeholder="Type your messages..."
              className="h-8 w-full bg-inherit focus-visible:outline-none"
            />
          </label>
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <SendHorizonal size={20} />
          </Button>
        </div>
        <Button className="h-full sm:hidden">
          <SendHorizonal size={18} /> Send
        </Button>
      </form>
    </div>
  )
}
