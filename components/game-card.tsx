import Link from "next/link"
import Image from "next/image"
import type { Game } from "@/types/game"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col group">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={game.image || "/placeholder.svg"}
          alt={game.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute top-2 right-2">{game.category}</Badge>
      </div>
      <CardContent className="pt-6 flex-grow">
        <Link href={`/spiele/${game.slug}`} className="group">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{game.title}</h3>
        </Link>
        <div className="flex gap-2 mb-2">
          <Badge variant="outline">{game.players} Spieler</Badge>
          <Badge variant="outline">{game.age}+ Jahre</Badge>
        </div>
        <p className="text-muted-foreground line-clamp-3">{game.description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link href={`/spiele/${game.slug}`} className="text-primary hover:underline">
          Details ansehen
        </Link>
      </CardFooter>
    </Card>
  )
}
