import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Howard Wei - Computer Science Portfolio',
  description: 'Computer Science undergraduate student passionate about software development, machine learning, and creating innovative solutions.',
  keywords: ['Computer Science', 'Software Development', 'Machine Learning', 'React', 'Next.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Howard Wei' }],
  creator: 'Howard Wei',
  openGraph: {
    title: 'Howard Wei - Computer Science Portfolio',
    description: 'Computer Science undergraduate student passionate about software development, machine learning, and creating innovative solutions.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} min-h-screen transition-colors duration-300`}>
        {children}
      </body>
    </html>
  )
}