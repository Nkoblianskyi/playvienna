"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Logo } from "@/components/logo"
import { getAllGames } from "@/lib/games"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [categories, setCategories] = useState<string[]>([])
  const [games, setGames] = useState<Array<{ slug: string; title: string; category: string }>>([])

  useEffect(() => {
    const allGames = getAllGames()
    // Extrahiere alle einzigartigen Kategorien
    const uniqueCategories = [...new Set(allGames.map((game) => game.category))]
    setCategories(uniqueCategories)

    // Speichere alle Spiele für die Navigation
    setGames(
      allGames.map((game) => ({
        slug: game.slug,
        title: game.title,
        category: game.category,
      })),
    )
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-auto" />
          <span className="font-bold text-xl hidden sm:inline-block">PlayViennaGames</span>
        </Link>

        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Startseite</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Spiele</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                          href="/spiele"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-white">Alle Spiele</div>
                          <p className="text-sm leading-tight text-white/90">
                            Entdecken Sie unsere komplette Auswahl an Brettspielen und Tischsportarten.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>

                    {/* Kategorien anzeigen */}
                    {categories.map((category) => (
                      <li key={category}>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href={`/spiele?category=${category}`}
                          >
                            <div className="text-sm font-medium leading-none">{category}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Alle {category} in unserem Sortiment
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Zweites Dropdown für alle Spiele */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Alle Spiele</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[700px] lg:grid-cols-3">
                    {games.map((game) => (
                      <li key={game.slug}>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href={`/spiele/${game.slug}`}
                          >
                            <div className="text-sm font-medium leading-none">{game.title}</div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">{game.category}</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/artikel" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Artikel</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/kontakt" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Kontakt</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:block">
          <Button asChild>
            <Link href="/kontakt">Kontakt aufnehmen</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Menü öffnen">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Startseite
                </Link>
                <div className="flex flex-col gap-2">
                  <Link href="/spiele" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Spiele
                  </Link>
                  <div className="pl-4 flex flex-col gap-2">
                    {categories.map((category) => (
                      <Link
                        key={category}
                        href={`/spiele?category=${category}`}
                        className="text-base"
                        onClick={() => setIsOpen(false)}
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href="/artikel" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Artikel
                </Link>
                <Link href="/kontakt" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Kontakt
                </Link>
                <Button asChild className="mt-4">
                  <Link href="/kontakt" onClick={() => setIsOpen(false)}>
                    Kontakt aufnehmen
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
