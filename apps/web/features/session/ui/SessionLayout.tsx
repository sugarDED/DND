'use client'

import { ChatPanel } from '@/features/chat/ui/ChatPanel'

export function SessionLayout({ sessionId }: { sessionId: string }) {
  return (
    <div style={styles.wrapper}>
      <aside style={styles.sidebar}>
        <h3 style={styles.logo}>🎲 DND</h3>
        <div style={styles.sessionName}>Session {sessionId}</div>
      </aside>

      <main style={styles.main}>
        <div style={styles.mapPlaceholder}>
          Map / Game Area
        </div>
      </main>

      <aside style={styles.chat}>
        <ChatPanel />
      </aside>
    </div>
  )
}

const styles = {
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '220px 1fr 380px',
    height: 'calc(100vh - 56px)', // минус nav
    background: '#313338',
  },
  sidebar: {
    background: '#2b2d31',
    padding: 16,
    color: '#fff',
    borderRight: '1px solid #1e1f22',
  },
  logo: {
    margin: 0,
    marginBottom: 16,
  },
  sessionName: {
    fontSize: 14,
    opacity: 0.7,
  },
  main: {
    background: '#1e1f22',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#aaa',
  },
  mapPlaceholder: {
    fontSize: 20,
    opacity: 0.6,
  },
  chat: {
    background: '#2b2d31',
    borderLeft: '1px solid #1e1f22',
    display: 'flex',
    flexDirection: 'column' as const,
  },
}