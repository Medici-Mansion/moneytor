import localFont from 'next/font/local'

export const sfFont = localFont({
  src: [
    {
      path: 'SF-Pro.woff2',
      style: 'normal',
    },
    {
      path: 'SF-Pro-Italic.woff2',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-sf',
})
export const sfCompact = localFont({
  src: [
    {
      path: 'SF-Pro.woff2',
      style: 'normal',
    },
    {
      path: 'SF-Pro-Italic.woff2',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-sf',
})
