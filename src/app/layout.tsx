import { Provider } from '@/components/ui/provider'
import { Toaster } from '@/components/ui/toaster'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='zh-Hant-TW' suppressHydrationWarning>
      <body>
        <Provider forcedTheme='light'>
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  )
}
