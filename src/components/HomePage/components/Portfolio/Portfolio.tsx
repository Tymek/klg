import React, { FC } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Wrapper from "../../../Wrapper"
import PortfolioItem from "./PortfolioItem"

import { P } from "../../../Typo"
import Dot from "../../../Dot"

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
      domki: file(relativePath: { eq: "domek/domek-skladany.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1648) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <section id="portfolio" className="pt-24 pb-56">
        <h2 className="sr-only">Portfolio</h2>
        <PortfolioItem
          title="Przeplotki"
          link="/portfolio/przeplotki"
          image={{
            ...data?.przeplotki?.childImageSharp?.fluid,
            aspectRatio: 5 / 3,
          }}
          description={
            <P className="mb-4 text-lg leading-tight">
              zabawki
              <Dot />
              opakowania
              <Dot />
              materiały reklamowe
              <Dot />
              systemy wystawiennicze
            </P>
          }
        />
        <PortfolioItem
          title={"Modułowe domki\ndla lalek"}
          link="/portfolio/modulowe-domki-dla-lalek"
          image={{
            ...data?.domki?.childImageSharp?.fluid,
            aspectRatio: 5 / 3,
          }}
          description={
            <P className="mb-4 text-lg leading-tight">
              zabawki
              <Dot />
              opakowania
              <Dot />
              materiały reklamowe
            </P>
          }
        />
      </section>
    </Wrapper>
  )
}

export default Portfolio
