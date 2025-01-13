import { Poppins, Bricolage_Grotesque } from "next/font/google"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"

const fontSans = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: '--font-sans'
})

const fontSerif = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-serif",
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} bg-base font-sans antialiased latte`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

