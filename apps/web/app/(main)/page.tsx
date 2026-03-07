import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <h1>DND Platform</h1>

      <div style={{ marginTop: 24 }}>
        <Link href="/session/test">
          <button style={{ padding: '10px 16px', cursor: 'pointer' }}>
            Start Test Session
          </button>
        </Link>
      </div>
    </div>
  )
}