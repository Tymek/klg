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
      przeplotki: file(relativePath: { eq: "przeplotki/cover.jpg" }) {
        ...ImageFragment
      }
      domki: file(relativePath: { eq: "domek.jpg" }) {
        ...ImageFragment
      }
      festiwal: file(relativePath: { eq: "festiwal-kolorow.png" }) {
        ...ImageFragment
      }
      milin: file(relativePath: { eq: "milin/wizytowki-milin.jpg" }) {
        ...ImageFragment
      }
    }
  `)

  const items: PortfolioListProps["items"] = [
    {
      link: "/portfolio/przeplotki",
      title: "Przeplotki",
      image: {
        ...data?.przeplotki?.childImageSharp?.fluid,
      },
      tags: ["zabawki", "opakowania", "branding", "systemy wystawiennicze"],
    },
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
  ]

  const filteredItems = useMemo(() => {
    if (!tag) return items

    return items.filter(item => item.tags?.includes(tag))
  }, [tag])

  return (
    <Wrapper className="mt-32 pt-24 pb-56">
      <section id="portfolio" className="relative pt-10 min-h-screen">
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

        <div className="ml-16 md:ml-24 xl:ml-32">
          {filteredItems.length > 0 ? (
            <PortfolioList items={filteredItems} />
          ) : (
            <div>Brak prac w tej kategorii</div>
          )}
        </div>
      </section>
    </Wrapper>
  )
}

export default Portfolio
