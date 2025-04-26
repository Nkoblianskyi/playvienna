import type { Metadata } from "next"
import { getAllArticles } from "@/lib/articles"
import { ArticleCard } from "@/components/article-card"

export const metadata: Metadata = {
  title: "Artikel über Brettspiele & Tischsport | PlayViennaGames",
  description:
    "Lesen Sie unsere neuesten Artikel über Brettspiele, Tischfußball, Airhockey und andere Tischsportarten.",
}

export default function ArticlesPage() {
  const articles = getAllArticles()

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Unsere Artikel</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  )
}
