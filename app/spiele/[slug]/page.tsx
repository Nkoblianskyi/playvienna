import { notFound } from "next/navigation"
import Image from "next/image"
import type { Metadata } from "next"
import { getAllGames, getGameBySlug } from "@/lib/games"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const game = getGameBySlug(params.slug)

  if (!game) {
    return {
      title: "Spiel nicht gefunden",
    }
  }

  return {
    title: `${game.title} | PlayViennaGames`,
    description: game.description,
    openGraph: {
      title: game.title,
      description: game.description,
      type: "website",
    },
  }
}

export function generateStaticParams() {
  const games = getAllGames()
  return games.map((game) => ({
    slug: game.slug,
  }))
}

export default function GamePage({ params }: Props) {
  const game = getGameBySlug(params.slug)

  if (!game) {
    notFound()
  }

  return (
    <div className="container py-12">
      <Link href="/spiele" className="text-primary hover:underline mb-6 inline-block">
        ← Zurück zu allen Spielen
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" priority />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">{game.title}</h1>
          <p className="text-muted-foreground mb-6">{game.category}</p>

          <div className="prose max-w-none mb-8">
            <p>{game.description}</p>

            <h2>Eigenschaften</h2>
            <ul>
              {game.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h2>Spieldetails</h2>
            <ul>
              <li>
                <strong>Spieler:</strong> {game.players}
              </li>
              <li>
                <strong>Alter:</strong> {game.age}+
              </li>
              <li>
                <strong>Spielzeit:</strong> {game.playTime} Minuten
              </li>
              <li>
                <strong>Schwierigkeitsgrad:</strong> {game.difficulty}/5
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Ähnliche Spiele</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {game.relatedGames.map((relatedGame) => {
            const gameData = getGameBySlug(relatedGame)
            if (!gameData) return null

            return (
              <Link key={gameData.slug} href={`/spiele/${gameData.slug}`} className="group">
                <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                  <Image
                    src={gameData.image || "/placeholder.svg"}
                    alt={gameData.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="font-semibold group-hover:text-primary">{gameData.title}</h3>
                <p className="text-sm text-muted-foreground">{gameData.category}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
