import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OTH Domain Placeholder - OvertimeHosting',
  description: 'This domain is owned and managed by OvertimeHosting. Professional hosting and domain management services.',
  keywords: 'OvertimeHosting, domain management, web hosting, domain placeholder',
  robots: 'noindex, nofollow',
  icons: {
    icon: [
      { url: '/company.png', sizes: '32x32', type: 'image/png' },
      { url: '/company.png', sizes: '16x16', type: 'image/png' },
      { url: '/company.png', sizes: '192x192', type: 'image/png' },
      { url: '/company.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/company.png', sizes: '180x180', type: 'image/png' },
      { url: '/company.png', sizes: '152x152', type: 'image/png' },
      { url: '/company.png', sizes: '144x144', type: 'image/png' },
      { url: '/company.png', sizes: '120x120', type: 'image/png' },
      { url: '/company.png', sizes: '114x114', type: 'image/png' },
      { url: '/company.png', sizes: '76x76', type: 'image/png' },
      { url: '/company.png', sizes: '72x72', type: 'image/png' },
      { url: '/company.png', sizes: '60x60', type: 'image/png' },
      { url: '/company.png', sizes: '57x57', type: 'image/png' },
    ],
    shortcut: '/company.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#000000',
    'msapplication-TileImage': '/company.png',
    'msapplication-config': '/browserconfig.xml',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Standard favicon */}
        <link rel="icon" href="/company.png" sizes="any" />
        <link rel="icon" href="/company.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/company.png" type="image/png" sizes="16x16" />
        
        {/* Apple Touch Icons for iOS */}
        <link rel="apple-touch-icon" href="/company.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/company.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/company.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/company.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/company.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/company.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/company.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/company.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/company.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/company.png" />
        
        {/* Android Chrome */}
        <link rel="icon" type="image/png" sizes="192x192" href="/company.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/company.png" />
        
        {/* Microsoft tiles */}
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/company.png" />
        
        {/* Safari pinned tab */}
        <link rel="mask-icon" href="/company.png" color="#000000" />
        
        {/* Theme colors */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </head>
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
