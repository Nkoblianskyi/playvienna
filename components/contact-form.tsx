"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { motion } from "framer-motion"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    privacy: false,
  })
  const [newsletterEmail, setNewsletterEmail] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, privacy: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In einer echten Anwendung würden Sie hier die Formulardaten an Ihren Server senden
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    // Formular zurücksetzen
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      privacy: false,
    })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In einer echten Anwendung würden Sie hier die Newsletter-Anmeldung an Ihren Server senden
    console.log("Newsletter subscription:", newsletterEmail)
    setIsNewsletterSubmitted(true)
    setNewsletterEmail("")
  }

  const closeDialog = () => {
    setIsSubmitted(false)
    setIsNewsletterSubmitted(false)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Schreiben Sie uns</CardTitle>
            <CardDescription>
              Füllen Sie das Formular aus und wir werden uns so schnell wie möglich bei Ihnen melden.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Vorname</Label>
                  <Input id="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nachname</Label>
                  <Input id="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
                <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Betreff</Label>
                <Input id="subject" value={formData.subject} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Nachricht</Label>
                <Textarea id="message" rows={5} value={formData.message} onChange={handleChange} required />
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="privacy" checked={formData.privacy} onCheckedChange={handleCheckboxChange} required />
                <Label htmlFor="privacy" className="text-sm">
                  Ich habe die{" "}
                  <a href="/datenschutz" className="text-primary hover:underline">
                    Datenschutzerklärung
                  </a>{" "}
                  gelesen und stimme der Verarbeitung meiner Daten zu.
                </Label>
              </div>
              <Button type="submit" className="w-full">
                Nachricht senden
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div>
          <h3 className="text-xl font-semibold mb-4">Kontaktinformationen</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary shrink-0 mt-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <p className="font-medium">Adresse</p>
                <p className="text-muted-foreground">Mariahilfer Straße 45, 1060 Wien, Österreich</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary shrink-0 mt-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div>
                <p className="font-medium">Telefon</p>
                <p className="text-muted-foreground">+43 5 144 72 48</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary shrink-0 mt-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <div>
                <p className="font-medium">E-Mail</p>
                <p className="text-muted-foreground">info@playviennagames.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Öffnungszeiten</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Montag - Freitag</span>
              <span>10:00 - 19:00 Uhr</span>
            </div>
            <div className="flex justify-between">
              <span>Samstag</span>
              <span>10:00 - 18:00 Uhr</span>
            </div>
            <div className="flex justify-between">
              <span>Sonntag</span>
              <span>Geschlossen</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter abonnieren</h3>
          <p className="text-muted-foreground mb-4">
            Abonnieren Sie unseren Newsletter und erhalten Sie regelmäßig Informationen über neue Spiele und
            Veranstaltungen.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              className="flex-1"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
            />
            <Button type="submit">Abonnieren</Button>
          </form>
        </div>
      </motion.div>

      {/* Dialog für Kontaktformular-Bestätigung */}
      <Dialog open={isSubmitted} onOpenChange={closeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nachricht gesendet!</DialogTitle>
            <DialogDescription>
              Vielen Dank für Ihre Nachricht. Wir werden uns so schnell wie möglich bei Ihnen melden.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={closeDialog}>Schließen</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Dialog für Newsletter-Bestätigung */}
      <Dialog open={isNewsletterSubmitted} onOpenChange={closeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Newsletter abonniert!</DialogTitle>
            <DialogDescription>
              Vielen Dank für Ihr Interesse an unserem Newsletter. Sie erhalten in Kürze eine Bestätigungs-E-Mail.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={closeDialog}>Schließen</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
