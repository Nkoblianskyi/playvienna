import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieConsent } from "@/components/cookie-consent"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  title: "PlayViennaGames | Brettspiele & Tischsport in Wien",
  description:
    "Entdecken Sie die besten Brettspiele und Tischsportarten wie Airhockey und Tischfußball in Wien. Besuchen Sie unseren Showroom oder kaufen Sie online.",
  keywords: "Brettspiele, Tischfußball, Airhockey, Wien, Tischspiele, Spieleabend, Familienspiele",
  authors: [{ name: "PlayViennaGames" }],
  creator: "PlayViennaGames",
  publisher: "PlayViennaGames",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "PlayViennaGames | Brettspiele & Tischsport in Wien",
    description: "Entdecken Sie die besten Brettspiele und Tischsportarten wie Airhockey und Tischfußball in Wien.",
    url: "https://playviennagames.com",
    siteName: "PlayViennaGames",
    locale: "de_AT",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
