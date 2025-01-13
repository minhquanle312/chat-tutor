'use client'

import { Button } from '@/components/ui/button'
import { Ellipsis, FilmIcon, SendHorizonal, TypeIcon } from 'lucide-react'
import { createMessageAction } from '../_actions/create-message-action'
import { useActionState, useState } from 'react'
import { $Enums } from '@prisma/client'
import { createChatAction } from '../_actions/create-chat-action'
import { useFormStatus } from 'react-dom'

interface ChatInputProps {
  chatId?: string
}

export const ChatInput: React.FC<ChatInputProps> = ({ chatId }) => {
  const [showSelectedType, setShowSelectedType] = useState<boolean>(false)
  const [selectedType, setSelectedType] = useState<$Enums.MessageType>('text')

  const { pending } = useFormStatus()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_state, formAction] = useActionState(
    chatId
      ? createMessageAction.bind(null, { chatId, type: selectedType })
      : createChatAction.bind(null, { type: selectedType }),
    {
      message: '',
      status: '',
    }
  )
  const toggleShowSelectedType = () => {
    setShowSelectedType((prev) => !prev)
  }

  const handleSelectType = (type: $Enums.MessageType) => {
    setSelectedType(type)
  }

  return (
    <form className="flex flex-wrap w-full flex-none gap-2" action={formAction}>
      <div className="flex flex-col items-stretch flex-1 gap-2 rounded-md border border-input px-2 py-1 focus-within:outline-none focus-within:ring-1 focus-within:ring-ring lg:gap-4">
        <div className="flex flex-1">
          <Button
            variant="ghost"
            size="icon"
            type="button"
            onClick={toggleShowSelectedType}
          >
            <Ellipsis size={20} />
          </Button>
          <label className="flex-1">
            <span className="sr-only">Chat Text Box</span>
            <input
              type="text"
              name="message"
              placeholder="Type your messages..."
              className="h-8 w-full bg-inherit focus-visible:outline-none"
            />
          </label>
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:inline-flex"
            disabled={pending}
          >
            <SendHorizonal size={20} />
          </Button>
        </div>

        {showSelectedType && (
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              className={
                selectedType === 'text' ? 'border-2 border-green-600' : ''
              }
              onClick={() => handleSelectType('text')}
            >
              <TypeIcon size={20} /> Text
            </Button>
            <Button
              size="sm"
              variant="outline"
              className={
                selectedType === 'video' ? 'border-2 border-green-600' : ''
              }
              onClick={() => handleSelectType('video')}
            >
              <FilmIcon size={20} /> Video
            </Button>
          </div>
        )}
      </div>
      <Button className="h-full sm:hidden" disabled={pending}>
        <SendHorizonal size={18} /> Send
      </Button>
    </form>
  )
}
