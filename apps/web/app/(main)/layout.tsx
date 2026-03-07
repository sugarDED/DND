import Link from 'next/link'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav style={{ padding: 16, borderBottom: '1px solid #ddd' }}>
        <Link href="/">Home</Link> |{' '}
        <Link href="/auth">Auth</Link> |{' '}
        <Link href="/campaigns">Campaigns</Link>
      </nav>

      <div style={{ padding: 24 }}>
        {children}
      </div>
    </>
  )
}