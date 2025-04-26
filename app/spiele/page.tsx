import type { Metadata } from "next"
import { getAllGames } from "@/lib/games"
import { GameCard } from "@/components/game-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Brettspiele & Tischsport | PlayViennaGames",
  description: "Entdecken Sie unsere Auswahl an Brettspielen, Tischfußball, Airhockey und anderen Tischsportarten.",
}

export default function GamesPage() {
  const games = getAllGames()
  const categories = [...new Set(games.map((game) => game.category))]

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Unsere Spiele</h1>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="mb-8">
          <TabsTrigger value="all">Alle</TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {games.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </TabsContent>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {games
                .filter((game) => game.category === category)
                .map((game) => (
                  <GameCard key={game.slug} game={game} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
