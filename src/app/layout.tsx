import '~/styles/globals.css'
import '@radix-ui/themes/styles.css'

import { GeistSans } from 'geist/font/sans'
import { type Metadata } from 'next'

import { Theme } from '@radix-ui/themes'
import { TRPCReactProvider } from '~/trpc/react'
import { ThemeProvider } from '~/provider/theme-provider'

import { sfCompact } from '~/assets/fonts'

export const metadata: Metadata = {
  title: 'Moneytor',
  description: '',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
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
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </ThemeProvider>
        </Theme>
      </body>
    </html>
  )
}
