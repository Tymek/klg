import React, { FC, useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Wrapper from "../../Wrapper"
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
      kartkiUrodzinowe: file(
        relativePath: { eq: "cover-portfolio/kartki_urodzinowe.png" }
      ) {
        ...PortfolioImage
      }
    }
  `)

  const items: PortfolioListProps["items"] = [
    {
      link: "/portfolio/modulowe-domki-dla-lalek",
      title: {
        0: "Modułowe\ndomki\ndla lalek",
        1500: "Modułowe domki\ndla lalek",
      },
      image: {
        ...data?.domki?.childImageSharp?.fluid,
      },
      tags: ["zabawki", "opakowania", "systemy wystawiennicze", "branding"],
    },
    {
      link: "/portfolio/kartki/pocztowki",
      title: "Pocztówki",
      image: {
        ...data?.pocztowki?.childImageSharp?.fluid,
      },
      tags: ["ilustracja", "kartki"],
    },
    {
      link: "/portfolio/przeplotki",
      title: "Przeplotki",
      image: {
        ...data?.przeplotki?.childImageSharp?.fluid,
      },
      tags: ["zabawki", "opakowania", "branding", "systemy wystawiennicze"],
    },
    {
      link: "/portfolio/festiwal-kolorow",
      title: {
        0: "Festiwal\nkolorów",
      },
      image: {
        ...data?.festiwal?.childImageSharp?.fluid,
      },
      tags: ["branding"],
    },
    {
      link: "/portfolio/milin",
      title: {
        0: "Milin",
      },
      image: {
        ...data?.milin?.childImageSharp?.fluid,
      },
      tags: ["branding"],
    },
    {
      link: "/portfolio/kartki/urodzinowe",
      title: "Kartki\nurodzinowe",
      image: {
        ...data?.kartkiUrodzinowe?.childImageSharp?.fluid,
      },
      tags: ["ilustracja", "kartki"],
    },
  ]

  const filteredItems = useMemo(() => {
    if (!tag) return items

    return items.filter(item => item.tags?.includes(tag))
  }, [tag])

  return (
    <section id="portfolio" className="mt-48 mb-56 bg-lightGray">
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
