"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      // Show the cookie consent after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    router.push("/cookies")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 flex justify-center">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle>Cookie-Einstellungen</CardTitle>
          <CardDescription>
            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß unserer Cookie-Richtlinie zu.
            Sie können Ihre Cookie-Einstellungen jederzeit ändern.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={declineCookies}>
            Ablehnen
          </Button>
          <Button onClick={acceptCookies}>Akzeptieren</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
