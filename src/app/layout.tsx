import '~/styles/globals.css'
import '@radix-ui/themes/styles.css'

import { GeistSans } from 'geist/font/sans'
import { type Viewport, type Metadata } from 'next'

import { Theme } from '@radix-ui/themes'
import { TRPCReactProvider } from '~/trpc/react'
import { ThemeProvider } from '~/provider/theme-provider'

import { sfCompact } from '~/assets/fonts'
import Layout from '~/components/element/Layout'

export const metadata: Metadata = {
  title: 'Moneytor',
  description: '',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${GeistSans.variable} ${sfCompact.className} ${sfCompact.variable}`}
    >
      <body>
        <Theme>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <TRPCReactProvider>
              <Layout>{children}</Layout>
            </TRPCReactProvider>
          </ThemeProvider>
        </Theme>
      </body>
    </html>
  )
}
