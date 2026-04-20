import type { Metadata } from 'next'
import './globals.css'
import QuickNote from './components/QuickNote'
import HighlightMenu from './components/HighlightMenu'
import ThemeToggle from './components/ThemeToggle'
import ResearchAssistant from './components/ResearchAssistant'

export const metadata: Metadata = {
  title: {
    default: 'The Archive',
    template: '%s | The Archive',
  },
  description:
    'An esoteric knowledge platform — deep explorations of Saturn, archetype, alchemy, and the Western hermetic inheritance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              const theme = localStorage.getItem('archive-theme') || 'midnight';
              document.documentElement.setAttribute('data-theme', theme);
            } catch (e) {}
          })();
        `}} />
      </head>
      <body>
        {children}
        <QuickNote />
        <HighlightMenu />
        <ThemeToggle />
        <ResearchAssistant />
      </body>
    </html>
  )
}
