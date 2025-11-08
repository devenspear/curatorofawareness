import './globals.css'
import FloatingParticles from '@/components/FloatingParticles'
import Link from 'next/link'

export const metadata = {
  title: 'Curator of Awareness - The Simulation Portal',
  description: 'Explore the simulation hypothesis through philosophy, science, and mysticism',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-void text-white min-h-screen">
        <FloatingParticles />

        <nav className="fixed top-0 left-0 right-0 z-50 bg-void/80 backdrop-blur-md border-b border-ether/20">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-playfair bg-gradient-to-r from-white to-ether bg-clip-text text-transparent">
              Curator of Awareness
            </Link>

            <div className="flex gap-6 text-sm">
              <Link href="/arguments" className="hover:text-ether transition-colors">Arguments</Link>
              <Link href="/library" className="hover:text-ether transition-colors">Library</Link>
              <Link href="/thinkers" className="hover:text-ether transition-colors">Thinkers</Link>
              <Link href="/conversations" className="hover:text-ether transition-colors">Conversations</Link>
            </div>
          </div>
        </nav>

        <main className="pt-20">
          {children}
        </main>

        <footer className="border-t border-ether/20 mt-20 py-8 text-center text-soft/60 text-sm">
          <p>You are the curator now. Question everything.</p>
          <p className="mt-2">Amazon links are affiliate links supporting this portal.</p>
        </footer>
      </body>
    </html>
  )
}
