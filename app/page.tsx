import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { PopularArticlesSection } from "@/components/sections/popular-articles-section"
import { PopularGamesSection } from "@/components/sections/popular-games-section"
import { ContactSection } from "@/components/sections/contact-section"
import { GameInfoSection } from "@/components/sections/game-info-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PlayViennaGames | Brettspiele & Tischsport in Wien",
  description:
    "Entdecken Sie die besten Brettspiele und Tischsportarten wie Airhockey und Tischfußball in Wien. Besuchen Sie unseren Showroom oder kaufen Sie online.",
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PopularGamesSection />
      <GameInfoSection />
      <PopularArticlesSection />
      <ContactSection />
    </>
  )
}
