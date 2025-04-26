import type { Game } from "@/types/game"

// Mock data for games
const games: Game[] = [
  {
    slug: "professional-foosball-table",
    title: "Professional Tischfußball-Tisch",
    description:
      "Ein professioneller Tischfußball-Tisch für Turniere und ernsthaftes Spiel. Mit robusten Spielfiguren, präzisen Stangen und einer hochwertigen Spielfläche.",
    category: "Tischfußball",
    image: "/images/foosball-professional.png",
    players: "2-4",
    age: 8,
    playTime: "10-30",
    difficulty: 3,
    features: [
      "Professionelle Turniergröße",
      "Robuste Metallstangen",
      "Hochwertige Spielfiguren",
      "Präzise Kugellager",
      "Rutschfeste Füße",
      "Integrierte Ballrückgabe",
    ],
    relatedGames: ["compact-foosball-table", "outdoor-foosball-table"],
  },
  {
    slug: "compact-foosball-table",
    title: "Kompakter Tischfußball-Tisch",
    description:
      "Ein kompakter Tischfußball-Tisch, ideal für kleinere Räume und Gelegenheitsspieler. Trotz der kompakten Größe bietet er ein authentisches Spielerlebnis.",
    category: "Tischfußball",
    image: "/images/foosball-compact.png",
    players: "2-4",
    age: 6,
    playTime: "10-30",
    difficulty: 2,
    features: [
      "Kompakte Größe für kleinere Räume",
      "Leichtgewichtige Konstruktion",
      "Einfacher Aufbau",
      "Integrierte Ballrückgabe",
      "Robuste Spielfiguren",
    ],
    relatedGames: ["professional-foosball-table", "kids-foosball-table"],
  },
  {
    slug: "outdoor-foosball-table",
    title: "Outdoor Tischfußball-Tisch",
    description:
      "Ein wetterfester Tischfußball-Tisch für den Außenbereich. Perfekt für Gärten, Terrassen oder öffentliche Spielplätze.",
    category: "Tischfußball",
    image: "/images/foosball-outdoor.png",
    players: "2-4",
    age: 8,
    playTime: "10-30",
    difficulty: 3,
    features: [
      "Wetterfeste Materialien",
      "UV-beständige Oberfläche",
      "Rostfreie Metallstangen",
      "Robuste Konstruktion",
      "Abdeckung inklusive",
    ],
    relatedGames: ["professional-foosball-table", "compact-foosball-table"],
  },
  {
    slug: "professional-air-hockey-table",
    title: "Professioneller Airhockey-Tisch",
    description:
      "Ein professioneller Airhockey-Tisch mit leistungsstarkem Gebläse und elektronischer Punktezählung. Für ein authentisches Arcade-Erlebnis zu Hause.",
    category: "Airhockey",
    image: "/images/air-hockey-pro.png",
    players: "2",
    age: 8,
    playTime: "5-15",
    difficulty: 2,
    features: [
      "Professionelle Turniergröße",
      "Leistungsstarkes Gebläse",
      "Elektronische Punktezählung",
      "LED-Beleuchtung",
      "Robuste Konstruktion",
      "Integrierte Puck-Rückgabe",
    ],
    relatedGames: ["compact-air-hockey-table", "multi-game-table"],
  },
  {
    slug: "compact-air-hockey-table",
    title: "Kompakter Airhockey-Tisch",
    description:
      "Ein kompakter Airhockey-Tisch für kleinere Räume. Ideal für Familien und Gelegenheitsspieler, die nicht viel Platz zur Verfügung haben.",
    category: "Airhockey",
    image: "/images/air-hockey-compact.png",
    players: "2",
    age: 6,
    playTime: "5-15",
    difficulty: 1,
    features: [
      "Kompakte Größe",
      "Leichtgewichtige Konstruktion",
      "Einfacher Aufbau",
      "Batterie- oder Netzbetrieb",
      "Manuelle Punktezählung",
    ],
    relatedGames: ["professional-air-hockey-table", "kids-air-hockey-table"],
  },
  {
    slug: "multi-game-table",
    title: "Multi-Spieltisch",
    description:
      "Ein vielseitiger Spieltisch, der mehrere Spiele in einem bietet, darunter Tischfußball, Airhockey, Billard und mehr. Perfekt für Familien mit unterschiedlichen Interessen.",
    category: "Multispiel",
    image: "/images/multi-game-table.png",
    players: "2-4",
    age: 6,
    playTime: "variabel",
    difficulty: 2,
    features: [
      "Mehrere Spiele in einem Tisch",
      "Einfacher Wechsel zwischen den Spielen",
      "Kompakte Größe",
      "Zubehör für alle Spiele inklusive",
      "Robuste Konstruktion",
    ],
    relatedGames: ["professional-foosball-table", "professional-air-hockey-table"],
  },
  {
    slug: "classic-chess-set",
    title: "Klassisches Schachspiel",
    description:
      "Ein hochwertiges klassisches Schachspiel mit handgeschnitzten Holzfiguren und einem eleganten Brett. Perfekt für Schachliebhaber jeden Alters.",
    category: "Brettspiele",
    image: "/images/chess-set.png",
    players: "2",
    age: 8,
    playTime: "30-60",
    difficulty: 4,
    features: [
      "Handgeschnitzte Holzfiguren",
      "Elegantes Holzbrett",
      "Faltbares Design für einfache Aufbewahrung",
      "Inklusive Aufbewahrungsbeutel für die Figuren",
      "Zeitlose Ästhetik",
    ],
    relatedGames: ["strategy-board-game", "backgammon-set"],
  },
  {
    slug: "family-board-game",
    title: "Familien-Brettspiel",
    description:
      "Ein unterhaltsames Brettspiel für die ganze Familie, das Strategie, Glück und Wissen kombiniert. Ideal für Spieleabende mit Kindern und Erwachsenen.",
    category: "Brettspiele",
    image: "/images/family-board-game.png",
    players: "2-6",
    age: 6,
    playTime: "30-45",
    difficulty: 2,
    features: [
      "Einfache Regeln",
      "Bunte Spielfiguren",
      "Lehrreiche Elemente",
      "Verschiedene Schwierigkeitsgrade",
      "Hoher Wiederspielwert",
    ],
    relatedGames: ["kids-board-game", "strategy-board-game"],
  },
  {
    slug: "strategy-board-game",
    title: "Strategie-Brettspiel",
    description:
      "Ein komplexes Strategiespiel für erfahrene Spieler. Bauen Sie Ihre Zivilisation auf, erforschen Sie Technologien und führen Sie Ihre Armeen zum Sieg.",
    category: "Brettspiele",
    image: "/images/strategy-game.png",
    players: "2-4",
    age: 12,
    playTime: "60-120",
    difficulty: 4,
    features: [
      "Tiefgründige Strategie",
      "Hochwertige Spielkomponenten",
      "Verschiedene Siegbedingungen",
      "Erweiterbar durch Add-ons",
      "Detaillierte Spielanleitung",
    ],
    relatedGames: ["classic-chess-set", "family-board-game"],
  },
  // Neue Spiele hinzufügen
  {
    slug: "premium-billiard-table",
    title: "Premium Billardtisch",
    description:
      "Ein hochwertiger Billardtisch mit Schieferplatte und feinem Tuch. Bietet ein professionelles Spielerlebnis für Enthusiasten und Turnierspieler.",
    category: "Billard",
    image: "/images/billiard-table.png",
    players: "2-8",
    age: 10,
    playTime: "30-120",
    difficulty: 3,
    features: [
      "Massive Holzkonstruktion",
      "Präzise Schieferplatte",
      "Hochwertiges Tuch",
      "Professionelle Gummibanden",
      "Elegantes Design",
      "Inklusive Queues und Kugeln",
    ],
    relatedGames: ["compact-billiard-table", "multi-game-table"],
  },
  {
    slug: "deluxe-poker-set",
    title: "Deluxe Poker-Set",
    description:
      "Ein luxuriöses Poker-Set mit hochwertigen Chips, Karten und einem eleganten Koffer. Perfekt für Pokerabende mit Freunden oder für Turniere zu Hause.",
    category: "Kartenspiele",
    image: "/images/poker-set.png",
    players: "2-10",
    age: 16,
    playTime: "30-180",
    difficulty: 3,
    features: [
      "300 hochwertige Keramik-Chips",
      "Wasserfeste Spielkarten",
      "Eleganter Aluminium-Koffer",
      "Dealer-Button und Blinds",
      "Professionelles Layout",
      "Inklusive Spielanleitung für verschiedene Poker-Varianten",
    ],
    relatedGames: ["card-game-collection", "strategy-board-game"],
  },
  {
    slug: "giant-outdoor-chess",
    title: "Riesen-Outdoor-Schach",
    description:
      "Ein überdimensionales Schachspiel für den Außenbereich. Die großen Figuren machen das Spiel zu einem besonderen Erlebnis für Jung und Alt.",
    category: "Outdoor-Spiele",
    image: "/images/giant-chess.png",
    players: "2",
    age: 6,
    playTime: "30-60",
    difficulty: 4,
    features: [
      "Wetterfeste Figuren aus hochwertigem Kunststoff",
      "Figuren mit einer Höhe von 30-60 cm",
      "Faltbare Spielmatte aus strapazierfähigem Material",
      "Einfacher Auf- und Abbau",
      "Ideal für Gärten, Parks oder Events",
      "Inklusive Tragetasche für die Figuren",
    ],
    relatedGames: ["classic-chess-set", "outdoor-foosball-table"],
  },
]

// Get all games
export function getAllGames(): Game[] {
  return games
}

// Get game by slug
export function getGameBySlug(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug)
}

// Get popular games (for homepage)
export function getPopularGames(): Game[] {
  // In a real application, you might sort by popularity or other metrics
  return games.slice(0, 6)
}
