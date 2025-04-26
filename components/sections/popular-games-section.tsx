"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GameCard } from "@/components/game-card"
import { getPopularGames } from "@/lib/games"
import { motion } from "framer-motion"

export function PopularGamesSection() {
  const games = getPopularGames()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            Unsere Spiele
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Beliebte Tischspiele</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie unsere beliebtesten Brettspiele und Tischsportarten. Von klassischen Familienspielen bis zu
            professionellen Tischfußballtischen.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {games.map((game) => (
            <motion.div key={game.slug} variants={itemVariants}>
              <GameCard game={game} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button asChild>
            <Link href="/spiele">Alle Spiele ansehen</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
