"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function ContactSection() {
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
    <section className="py-16 md:py-24 bg-muted/50" id="kontakt">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            Kontakt
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Nehmen Sie Kontakt mit uns auf</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Haben Sie Fragen zu unseren Spielen oder möchten Sie eine Beratung? Wir freuen uns auf Ihre Nachricht.
          </p>
          <Button size="lg" asChild>
            <Link href="/kontakt">Zum Kontaktformular</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
