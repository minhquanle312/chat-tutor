import { ChatInput } from './_components/chat-input'

export default function Page() {
  return (
    <>
      <div className="flex-1 relative -mr-4">
        <div className="absolute inset-0 overflow-y-scroll flex flex-col-reverse gap-4 pr-4"></div>
      </div>
      <ChatInput />
    </>
  )
}
