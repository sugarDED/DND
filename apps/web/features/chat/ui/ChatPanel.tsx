'use client'

import { useRef, useState } from 'react'
import { useChatStore } from '../model/chatStore'
import { DiceScene } from '@/features/dice/ui/DiceScene'

export function ChatPanel() {

  const { messages, addMessage } = useChatStore()

  const [input, setInput] = useState('')
  const [diceCount, setDiceCount] = useState(1)
  const [rolling, setRolling] = useState(false)

  const [diceToRoll, setDiceToRoll] = useState<
    { sides: number; count: number }[]
  >([])

  const bottomRef = useRef<HTMLDivElement | null>(null)

  function sendMessage() {
    if (!input.trim()) return

    addMessage({
      id: Date.now().toString(),
      author: 'You',
      text: input,
    })

    setInput('')
  }

  function rollDice(sides: number) {

    if (rolling) return

    setDiceToRoll([
      {
        sides,
        count: diceCount,
      },
    ])

    setRolling(true)

    setTimeout(() => {

      const values = Array.from({ length: diceCount }, () =>
        Math.floor(Math.random() * sides) + 1
      )

      const total = values.reduce((a, b) => a + b, 0)

      addMessage({
        id: Date.now().toString(),
        author: 'You',
        text: `🎲 rolled ${diceCount}d${sides} → [${values.join(', ')}] (total: ${total})`,
      })

      setRolling(false)

    }, 2000)
  }

  function rollD100() {

    if (rolling) return

    const d10 = Math.floor(Math.random() * 10)
    const d00 = Math.floor(Math.random() * 10) * 10

    let result = d00 + d10
    if (result === 0) result = 100

    addMessage({
      id: Date.now().toString(),
      author: 'You',
      text: `🎲 rolled d100 → ${result}`,
    })
  }

  return (
    <div style={styles.container}>

      <div style={styles.messages}>

        {messages.map((msg) => (
          <div key={msg.id} style={styles.messageRow}>

            <div style={styles.avatar}>
              {msg.author[0]}
            </div>

            <div style={styles.messageContent}>
              <div style={styles.author}>{msg.author}</div>
              <div style={styles.text}>{msg.text}</div>
            </div>

          </div>
        ))}

        <div ref={bottomRef} />

      </div>


      <div style={styles.inputArea}>

        {/* выбор количества кубов */}

        <div style={styles.countSelector}>
          {[1, 2, 3, 5].map((count) => (
            <button
              key={count}
              onClick={() => setDiceCount(count)}
              style={{
                ...styles.countButton,
                background:
                  diceCount === count ? '#43b581' : '#383a40',
              }}
            >
              x{count}
            </button>
          ))}
        </div>


        {/* кнопки кубов */}

        <div style={styles.diceBar}>

          {[100, 20, 12, 10, 8, 6, 4].map((dice) => (

            <button
              key={dice}
              style={styles.diceButton}
              onClick={() =>
                dice === 100
                  ? rollD100()
                  : rollDice(dice)
              }
            >
              d{dice}
            </button>

          ))}

        </div>


        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Message #session"
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />

      </div>


      {/* 3D анимация кубов */}

      {rolling && (
        <div style={styles.rollOverlay}>
          <DiceScene dice={diceToRoll} />
        </div>
      )}

    </div>
  )
}



const styles = {

  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    height: '100%',
    background:
      'radial-gradient(circle at center, #3a2f1d 0%, #1e1a14 70%)',
    color: '#fff',
    position: 'relative' as const,
  },

  messages: {
    flex: 1,
    overflowY: 'auto' as const,
    padding: 16,
  },

  messageRow: {
    display: 'flex',
    gap: 12,
    marginBottom: 16,
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: '50%',
    background: '#5865f2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },

  messageContent: {
    flex: 1,
  },

  author: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 4,
  },

  text: {
    fontSize: 14,
    lineHeight: 1.4,
    color: '#dcddde',
  },

  inputArea: {
    padding: 16,
    borderTop: '1px solid #1e1f22',
  },

  countSelector: {
    display: 'flex',
    gap: 8,
    marginBottom: 10,
  },

  countButton: {
    padding: '4px 8px',
    borderRadius: 6,
    border: 'none',
    cursor: 'pointer',
    color: '#fff',
    fontSize: 12,
  },

  diceBar: {
    display: 'flex',
    gap: 8,
    marginBottom: 12,
  },

  diceButton: {
    padding: '6px 10px',
    borderRadius: 6,
    border: 'none',
    background: '#5865f2',
    color: '#fff',
    cursor: 'pointer',
    fontSize: 12,
  },

  input: {
    width: '100%',
    padding: 10,
    borderRadius: 6,
    border: 'none',
    background: '#383a40',
    color: '#fff',
  },

  rollOverlay: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 20,
  },

} as const