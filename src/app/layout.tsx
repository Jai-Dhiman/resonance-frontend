import './globals.css'
import { Providers } from '@/lib/providers'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Artist Analytics',
  description: 'Track artist metrics across music streaming services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}