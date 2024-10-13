import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '수수께끼 앱',
  description: '재미있는 수수께끼를 풀어보세요!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
