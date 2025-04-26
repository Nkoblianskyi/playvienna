import type { Metadata } from "next"
import KontaktPageClient from "./KontaktPageClient"

export const metadata: Metadata = {
  title: "Kontakt | PlayViennaGames",
  description: "Nehmen Sie Kontakt mit uns auf. Wir freuen uns auf Ihre Nachricht.",
}

export default function KontaktPage() {
  return <KontaktPageClient />
}
