import { Header } from '@/src/components/shared'
import './globals.css'

import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { ReactNode } from 'react'

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Next Pizza',
  description: 'Онлайн-магазин вкусной пиццы с удобным интерфейсом',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={nunito.variable}>
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
