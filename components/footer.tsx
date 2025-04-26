"use client"

import Link from "next/link"
import { Logo } from "@/components/logo"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        {/* Erste Zeile: Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-8 pb-8 border-b border-primary-foreground/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-4 text-lg">Schnelllinks</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/" className="hover:underline transition-colors">
                Startseite
              </Link>
              <Link href="/spiele" className="hover:underline transition-colors">
                Spiele
              </Link>
              <Link href="/artikel" className="hover:underline transition-colors">
                Artikel
              </Link>
              <Link href="/kontakt" className="hover:underline transition-colors">
                Kontakt
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-4 text-lg">Rechtliches</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/datenschutz" className="hover:underline transition-colors">
                Datenschutzerklärung
              </Link>
              <Link href="/cookies" className="hover:underline transition-colors">
                Cookie-Richtlinie
              </Link>
              <Link href="/impressum" className="hover:underline transition-colors">
                Impressum
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Zweite Zeile: Unternehmensbeschreibung */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/" className="flex items-center justify-center gap-2 mb-4">
            <Logo className="h-8 w-auto text-primary-foreground" />
            <span className="font-bold text-xl">PlayViennaGames</span>
          </Link>
          <p className="mb-6 max-w-2xl mx-auto">
            Ihr Spezialist für Brettspiele und Tischsportarten in Wien. Seit 1997 bieten wir eine große Auswahl an
            Tischfußball, Airhockey und klassischen Brettspielen. Unser Ziel ist es, Menschen durch Spiel und Spaß
            zusammenzubringen.
          </p>
          <div className="text-sm mb-6">
            <p>Mariahilfer Straße 45, 1060 Wien, Österreich</p>
            <p>+43 5 144 72 48 | info@playviennagames.com</p>
          </div>
          <p className="text-sm">&copy; {currentYear} PlayViennaGames. Alle Rechte vorbehalten.</p>
        </motion.div>
      </div>
    </footer>
  )
}
