import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>D&D MVP 🎲</h1>
      <p>Frontend запущен и работает</p>

      <ul>
        <li><Link href="/auth">Auth</Link></li>
        <li><Link href="/campaigns">Campaigns</Link></li>
        <li><Link href="/session">Session</Link></li>
      </ul>
    </main>
  )
}
