import { notFound } from "next/navigation"
import Image from "next/image"
import type { Metadata } from "next"
import { getAllArticles, getArticleBySlug } from "@/lib/articles"
import { formatDate } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: "Artikel nicht gefunden",
    }
  }

  return {
    title: `${article.title} | PlayViennaGames`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: ["PlayViennaGames"],
    },
  }
}

export function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <article className="container py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/artikel" className="text-primary hover:underline mb-6 inline-block">
          ← Zurück zu allen Artikeln
        </Link>

        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

        <div className="flex items-center text-muted-foreground mb-8">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span className="mx-2">•</span>
          <span>{article.readingTime} Min. Lesezeit</span>
        </div>

        {article.image && (
          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-semibold mb-4">Teilen Sie diesen Artikel</h3>
          <div className="flex gap-4">
            <Button variant="outline" size="sm">
              Facebook
            </Button>
            <Button variant="outline" size="sm">
              Twitter
            </Button>
            <Button variant="outline" size="sm">
              LinkedIn
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-semibold mb-6">Newsletter abonnieren</h3>
          <p className="mb-4">Erhalten Sie die neuesten Artikel und Updates direkt in Ihren Posteingang.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button>Abonnieren</Button>
          </div>
        </div>
      </div>
    </article>
  )
}
