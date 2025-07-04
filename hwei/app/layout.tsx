import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Howard Wei | SWE & AI',
  description: 'Howard Wei: Software Engineer experienced in software development, machine learning, and creating innovative solutions.',
  keywords: ['Computer Science', 'Software Development', 'Machine Learning', 'Cloud Computing','AWS', 'Python', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Howard Wei' }],
  creator: 'Howard Wei',
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