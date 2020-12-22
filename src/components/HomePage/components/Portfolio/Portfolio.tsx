import React, { FC, useCallback } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Wrapper from "../../../Wrapper"
import PortfolioItem from "./components/PortfolioItem"

import useWindowSize from "../../../../utilities/useWindowSize"
import { P } from "../../../Typo"
import Dot from "../../../Dot"
import Navigation from "./components/PortfolioNavigation"

type PortfolioProps = {}

const Portfolio: FC<PortfolioProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      przeplotki: file(relativePath: { eq: "przeplotki/cover.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1328) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      domki: file(relativePath: { eq: "domek.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1648) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      festiwal: file(relativePath: { eq: "festiwal-kolorow.png" }) {
        childImageSharp {
          fluid(maxWidth: 1648) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      milin: file(relativePath: { eq: "milin/wizytowki-milin.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1648) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const { width } = useWindowSize()

  const mapTextWidth = useCallback(
    (sizes: Record<string, string>): string => {
      const breakpoints = Object.keys(sizes)
        .map(x => Number.parseFloat(x))
        .sort((x, y) => {
          if (x > y) return 1
          if (x < y) return -1
          return 0
        })
        .reverse()
      let i
      for (i = 0; i < breakpoints.length; i++) {
        if ((width || 0) > breakpoints[i]) {
          return sizes[`${breakpoints[i]}`]
        }
      }
      return sizes[`${breakpoints.pop()}`]
    },
    [width]
  )

  return (
    <Wrapper className="mt-32 pt-24 pb-56">
      <section id="portfolio" className="relative">
        <h2 className="sr-only">Portfolio</h2>
        <Navigation>
          <a href="#">zabawki</a>
          <a href="#">ilustracja</a>
          <a href="#">branding</a>
          <a href="#">publikacja</a>
          <a href="#">opakowania</a>
        </Navigation>

        <ul className="ml-16 xl:ml-32">
          <PortfolioItem
            title="Przeplotki"
            link="/portfolio/przeplotki"
            image={{
              ...data?.przeplotki?.childImageSharp?.fluid,
              aspectRatio: 5 / 3,
            }}
            // description={
            //   <P className="mb-4 text-md leading-tight">
            //     zabawki
            //     <Dot />
            //     opakowania
            //     <Dot />
            //     materiały reklamowe
            //     <Dot />
            //     systemy wystawiennicze
            //   </P>
            // }
          />
          <PortfolioItem
            title={mapTextWidth({
              0: "Modułowe\ndomki\ndla lalek",
              1500: "Modułowe domki\ndla lalek",
            })}
            link="/portfolio/modulowe-domki-dla-lalek"
            image={{
              ...data?.domki?.childImageSharp?.fluid,
              aspectRatio: 5 / 3,
            }}
            // description={
            //   <P className="mb-4 text-md leading-tight">
            //     zabawki
            //     <Dot />
            //     opakowania
            //     <Dot />
            //     materiały reklamowe
            //   </P>
            // }
          />
          <PortfolioItem
            title={mapTextWidth({
              0: "Festiwal\nkolorów",
            })}
            link="/portfolio/festiwal-kolorow"
            image={{
              ...data?.festiwal?.childImageSharp?.fluid,
              aspectRatio: 5 / 3,
            }}
            // description={
            //   <P className="mb-4 text-md leading-tight">materiały reklamowe</P>
            // }
          />
          <PortfolioItem
            title={mapTextWidth({
              0: "Milin",
            })}
            link="/portfolio/milin"
            image={{
              ...data?.milin?.childImageSharp?.fluid,
              aspectRatio: 5 / 3,
            }}
            // description={<P className="mb-4 text-md leading-tight">branding</P>}
          />
        </ul>
      </section>
    </Wrapper>
  )
}

export default Portfolio
