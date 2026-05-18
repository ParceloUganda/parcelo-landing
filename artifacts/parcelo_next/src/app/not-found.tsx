import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center' }}>
      <div>
        <h1 style={{ fontSize: '72px', fontWeight: 800, color: 'var(--gold)', margin: '0 0 8px' }}>404</h1>
        <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 16px' }}>Page Not Found</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>The page you're looking for doesn't exist.</p>
        <Link href="/" className="btn-gold" style={{ padding: '14px 28px', fontSize: '15px' }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
