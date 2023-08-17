'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import store from '@/Redux/store' // Import the Redux Toolkit store

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movie App',
  description: 'IMDB movie list rating ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  )
}
