import React, { FC, ReactNode, useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Wrapper from "../../Wrapper"
import Image from "../../Image"
import routes from "./routes.json"
import Navigation from "./components/PortfolioNavigation"
import PortfolioList, { PortfolioListProps } from "./components/PortfolioList"

type PortfolioProps = {
  tag?: string
}

const Portfolio: FC<PortfolioProps> = ({ tag }) => {
  const data = useStaticQuery(graphql`
    query {
      przeplotki: file(relativePath: { eq: "cover-portfolio/przeplotki.jpg" }) {
        ...PortfolioImage
      }
      domki: file(relativePath: { eq: "cover-portfolio/domek.jpg" }) {
        ...PortfolioImage
      }
      festiwal: file(
        relativePath: { eq: "cover-portfolio/festiwal-kolorow.jpg" }
      ) {
        ...PortfolioImage
      }
      milin: file(relativePath: { eq: "cover-portfolio/wizytowki-milin.jpg" }) {
        ...PortfolioImage
      }
      pocztowki: file(relativePath: { eq: "cover-portfolio/pocztowki.png" }) {
        ...PortfolioImage
      }
      wiersze: file(relativePath: { eq: "cover-portfolio/wiersze.jpg" }) {
        ...PortfolioImage
      }
      kartkiUrodzinowe: file(
        relativePath: { eq: "cover-portfolio/kartki_urodzinowe.png" }
      ) {
        ...PortfolioImage
      }
      tabliczki: file(relativePath: { eq: "cover-portfolio/tabliczki.jpg" }) {
        ...PortfolioImage
      }
      zakladki: file(relativePath: { eq: "cover-portfolio/zakladka.jpg" }) {
        ...PortfolioImage
      }
      toyContestBadge: file(
        relativePath: { eq: "zabawkaroku_logo_contrast.png" }
      ) {
        childImageSharp {
          fluid {
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `)

  const badges: Record<string, ReactNode> = {
    przeplotki: (
      <div className="absolute right-0 top-0 md:left-0 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 w-32 xl:w-40 xxl:w-48">
        <Image fluid={data?.toyContestBadge?.childImageSharp?.fluid} />
      </div>
    ),
  }

  const items: PortfolioListProps["items"] = routes.map(item => ({
    ...item,
    title: item.title as string | Record<string, string>,
    link: `/portfolio/${item.link}`,
    image: data[item.image].childImageSharp?.fluid,
    badge: Object.keys(badges).includes(item.link)
      ? badges[item.link]
      : undefined,
  }))

  const filteredItems = useMemo(() => {
    if (!tag) return items

    const filtered = items.filter(item => item.tags?.includes(tag))
    if (tag !== "branding" && tag !== "opakowania") return filtered

    return filtered.reverse()
  }, [tag])

  return (
    <section
      id="portfolio"
      tabIndex={-1}
      className="bg-lightGray outline-none focus:shadow-outline"
    >
      <Wrapper>
        <div className="relative min-h-screen">
          <h2 className="sr-only">Portfolio</h2>
          <Navigation
            active={tag}
            tags={[
              "zabawki",
              "ilustracja",
              "branding",
              "publikacja",
              "opakowania",
            ]}
          />

          <div className="pb-12 md:pb-0">
            {filteredItems.length > 0 ? (
              <PortfolioList items={filteredItems} />
            ) : (
              <div className="text-center p-16">Brak prac w tej kategorii</div>
            )}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Portfolio
