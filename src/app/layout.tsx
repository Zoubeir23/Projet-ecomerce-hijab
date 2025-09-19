import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/custom-clean.scss'
import { CartProvider } from '@/context/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hijab Élégance Dakar - Mode Islamique Premium au Sénégal',
  description: 'Découvrez notre collection exclusive de hijabs, abayas et accessoires de mode islamique. Qualité premium, livraison à Dakar et dans tout le Sénégal.',
  keywords: ['hijab', 'abaya', 'mode islamique', 'Dakar', 'Sénégal', 'voile', 'khimar'],
  authors: [{ name: 'Hijab Élégance Dakar' }],
  openGraph: {
    title: 'Hijab Élégance Dakar - Mode Islamique Premium',
    description: 'Votre boutique de mode islamique de confiance au Sénégal',
    url: 'https://hijabelegancedakar.com',
    siteName: 'Hijab Élégance Dakar',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token_here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#8B4513" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <CartProvider>
          <div id="root">
            {children}
          </div>
        </CartProvider>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossOrigin="anonymous"
          async
        />
      </body>
    </html>
  )
}