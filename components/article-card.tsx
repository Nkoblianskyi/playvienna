"use client"

import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import type { Article } from "@/types/article"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col group">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="pt-6 flex-grow">
        <div className="text-sm text-muted-foreground mb-2">
          {formatDate(article.date)} • {article.readingTime} Min. Lesezeit
        </div>
        <Link href={`/artikel/${article.slug}`} className="group">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
        </Link>
        <p className="text-muted-foreground line-clamp-3">{article.excerpt}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link href={`/artikel/${article.slug}`} className="text-primary hover:underline">
          Weiterlesen
        </Link>
      </CardFooter>
    </Card>
  )
}
