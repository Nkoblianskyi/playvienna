"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Entdecken Sie die Welt der <span className="text-primary">Tischspiele</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto lg:mx-0">
            Von klassischen Brettspielen bis zu modernen Tischsportarten wie Airhockey und Tischfußball.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" asChild>
              <Link href="/spiele">Spiele entdecken</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image src="/images/hero-image.png" alt="Tischfußball spielen" fill className="object-cover" priority />
        </motion.div>
      </div>

      <div className="container mt-16 md:mt-24">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">28+</div>
            <p className="text-muted-foreground">Jahre Erfahrung</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">150+</div>
            <p className="text-muted-foreground">Verschiedene Spiele</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">5000+</div>
            <p className="text-muted-foreground">Zufriedene Kunden</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">100%</div>
            <p className="text-muted-foreground">Qualitätsgarantie</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
