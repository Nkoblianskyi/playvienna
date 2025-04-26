import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutzerklärung | PlayViennaGames",
  description: "Informationen zum Datenschutz und zur Verarbeitung Ihrer personenbezogenen Daten.",
}

export default function PrivacyPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

      <div className="prose max-w-none">
        <h2>1. Datenschutz auf einen Blick</h2>
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. In dieser Datenschutzerklärung informieren
          wir Sie darüber, wie wir Ihre Daten verarbeiten und welche Rechte Sie haben.
        </p>

        <h2>2. Allgemeine Hinweise</h2>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
          passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
          identifiziert werden können.
        </p>

        <h2>3. Datenerfassung auf unserer Website</h2>
        <h3>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie
          dem Impressum dieser Website entnehmen.
        </p>

        <h3>Wie erfassen wir Ihre Daten?</h3>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten
          handeln, die Sie in ein Kontaktformular eingeben.
        </p>
        <p>
          Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
          technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
        </p>

        <h3>Wofür nutzen wir Ihre Daten?</h3>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten
          können zur Analyse Ihres Nutzerverhaltens verwendet werden.
        </p>

        <h3>Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
        <p>
          Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
          personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung
          dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit
          unter der im Impressum angegebenen Adresse an uns wenden.
        </p>

        <h2>4. Kontaktformular</h2>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
          inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
          Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>

        <h2>5. Newsletter</h2>
        <p>
          Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine
          E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen
          E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht bzw.
          nur auf freiwilliger Basis erhoben.
        </p>

        <h2>6. Kontakt</h2>
        <p>
          Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an:
        </p>
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
