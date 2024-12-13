import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Artist Analytics',
  description: 'Music Artist Analytics Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-spotify-dark text-white">{children}</body>
    </html>
  )
}