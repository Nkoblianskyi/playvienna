"use client"

import { motion } from "framer-motion"
import { Clock, Users, Brain, Trophy, Lightbulb, Heart, Puzzle, Dices } from "lucide-react"

export function GameInfoSection() {
  const infoCards = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Kognitive Vorteile",
      description:
        "Brettspiele fördern das logische Denken, die Problemlösungsfähigkeit und verbessern die Konzentration bei Kindern und Erwachsenen.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Soziale Bindungen",
      description:
        "Gemeinsames Spielen stärkt Familienbande und Freundschaften durch geteilte Erlebnisse und direkte Kommunikation.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Digitale Auszeit",
      description:
        "Tischspiele bieten eine wertvolle Pause von Bildschirmen und fördern echte zwischenmenschliche Interaktionen.",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Stressabbau",
      description:
        "Regelmäßiges Spielen kann Stress reduzieren und zur allgemeinen Entspannung und zum Wohlbefinden beitragen.",
    },
  ]

  const funFacts = [
    {
      icon: <Trophy className="h-6 w-6 text-primary" />,
      fact: "Das älteste bekannte Brettspiel ist über 5.000 Jahre alt und stammt aus dem alten Ägypten.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      fact: "Tischfußball wurde in den 1880er Jahren erfunden, um Menschen zu helfen, die nicht Fußball spielen konnten.",
    },
    {
      icon: <Puzzle className="h-6 w-6 text-primary" />,
      fact: "Das teuerste Schachspiel der Welt ist mit Diamanten und Gold besetzt und kostet über 4 Millionen Euro.",
    },
    {
      icon: <Dices className="h-6 w-6 text-primary" />,
      fact: "In Österreich verbringen Menschen durchschnittlich 3,5 Stunden pro Woche mit Gesellschaftsspielen.",
    },
  ]

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
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            Wissenswertes
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Die Welt der Spiele</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie interessante Fakten und Informationen über Brettspiele und Tischsportarten und warum sie so
            wichtig für unser soziales Leben sind.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-lg p-6 shadow-sm border flex flex-col items-center text-center"
            >
              <div className="bg-primary/10 p-3 rounded-full mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-muted-foreground">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="bg-muted/50 rounded-lg p-8">
          <motion.h3
            className="text-2xl font-semibold mb-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Wussten Sie schon?
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {funFacts.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="flex items-start gap-3">
                <div className="bg-background rounded-full p-2 shrink-0">{item.icon}</div>
                <p>{item.fact}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <div className="text-3xl font-bold text-primary mb-1">60%</div>
              <p className="text-sm text-muted-foreground">
                der Österreicher spielen mindestens einmal pro Woche Brettspiele
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">8.500+</div>
              <p className="text-sm text-muted-foreground">neue Brettspiele werden jährlich weltweit veröffentlicht</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">45 Min.</div>
              <p className="text-sm text-muted-foreground">
                beträgt die durchschnittliche Spielzeit eines modernen Brettspiels
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
