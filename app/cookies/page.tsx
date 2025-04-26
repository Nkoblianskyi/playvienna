import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie-Richtlinie | PlayViennaGames",
  description: "Informationen über die Verwendung von Cookies auf unserer Website.",
}

export default function CookiesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Cookie-Richtlinie</h1>

      <div className="prose max-w-none">
        <h2>Was sind Cookies?</h2>
        <p>
          Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen Gerät gespeichert werden, wenn Sie unsere
          Website besuchen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen und tragen dazu
          bei, dass unsere Website ordnungsgemäß funktioniert.
        </p>

        <h2>Welche Cookies verwenden wir?</h2>
        <p>Wir verwenden folgende Arten von Cookies:</p>

        <h3>Notwendige Cookies</h3>
        <p>
          Diese Cookies sind für die Funktion unserer Website unerlässlich. Sie ermöglichen grundlegende Funktionen wie
          die Seitennavigation und den Zugriff auf sichere Bereiche der Website. Die Website kann ohne diese Cookies
          nicht richtig funktionieren.
        </p>

        <h3>Präferenz-Cookies</h3>
        <p>
          Diese Cookies ermöglichen es der Website, sich an Informationen zu erinnern, die die Art und Weise
          beeinflussen, wie sich die Website verhält oder aussieht, wie z.B. Ihre bevorzugte Sprache oder die Region, in
          der Sie sich befinden.
        </p>

        <h3>Statistik-Cookies</h3>
        <p>
          Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen
          anonym sammeln und melden. Sie helfen uns, die Anzahl der Besucher und zu sehen, wie Besucher sich auf der
          Website bewegen.
        </p>

        <h2>Wie können Sie Cookies kontrollieren?</h2>
        <p>
          Sie können Ihre Cookie-Einstellungen jederzeit ändern, indem Sie auf die Schaltfläche "Cookie-Einstellungen"
          am unteren Rand unserer Website klicken. Sie können auch die Einstellungen Ihres Browsers ändern, um Cookies
          zu akzeptieren, abzulehnen oder zu löschen.
        </p>

        <h2>Kontakt</h2>
        <p>Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie uns bitte unter:</p>
        <p>
          PlayViennaGames
          <br />
          Mariahilfer Straße 45, 1060 Wien, Österreich
          <br />
          E-Mail: info@playviennagames.com
          <br />
          Telefon: +43 5 144 72 48
        </p>

        <p>Letzte Aktualisierung: 26. April 2025</p>
      </div>
    </div>
  )
}
