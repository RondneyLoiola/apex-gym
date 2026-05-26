import type { Metadata } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-bebas'
})

export const metadata: Metadata = {
  title: 'APEX GYM | Academia Premium',
  description: 'Transforme seu corpo e supere seus limites na academia mais moderna e tecnológica. Equipamentos premium, personal trainers especializados e ambiente 24h.',
  keywords: 'academia, fitness, musculação, treino, personal trainer, cross training, pilates',
  openGraph: {
    title: 'APEX GYM | Academia Premium',
    description: 'Transforme seu corpo e supere seus limites na academia mais moderna e tecnológica.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#00FF88',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${bebasNeue.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
