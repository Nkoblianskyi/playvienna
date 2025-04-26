"use client"

import { ContactForm } from "@/components/contact-form"
import Image from "next/image"

export default function KontaktPageClient() {
  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
          <p className="text-muted-foreground mb-8">
            Haben Sie Fragen zu unseren Spielen oder möchten Sie eine Beratung? Wir freuen uns auf Ihre Nachricht.
          </p>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image src="/images/contact-image.png" alt="Unser Team" fill className="object-cover" />
          </div>
        </div>
        <div></div>
      </div>
      <ContactForm />
    </div>
  )
}
