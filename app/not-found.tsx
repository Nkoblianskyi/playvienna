import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 - Seite nicht gefunden | PlayViennaGames",
  description: "Die gesuchte Seite wurde nicht gefunden.",
}

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-20 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Seite nicht gefunden</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
      </p>
      <Button asChild size="lg">
        <Link href="/">Zurück zur Startseite</Link>
      </Button>
    </div>
  )
}
