import { create } from 'zustand'

export interface Message {
  id: string
  author: string
  text: string
}

interface ChatState {
  messages: Message[]
  addMessage: (message: Message) => void
  clearMessages: () => void
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [
    { id: '1', author: 'System', text: 'Session started' }
  ],

  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message]
    })),

  clearMessages: () => set({ messages: [] })
}))
