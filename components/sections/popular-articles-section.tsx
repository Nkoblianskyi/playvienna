"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArticleCard } from "@/components/article-card"
import { getPopularArticles } from "@/lib/articles"
import { motion } from "framer-motion"

export function PopularArticlesSection() {
  const articles = getPopularArticles()

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
            Unser Blog
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Beliebte Artikel</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lesen Sie unsere neuesten Artikel über Brettspiele, Tischfußball, Airhockey und andere Tischsportarten.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {articles.map((article) => (
            <motion.div key={article.slug} variants={itemVariants}>
              <ArticleCard article={article} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button asChild>
            <Link href="/artikel">Alle Artikel lesen</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
