import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import milinLogo from "../../images/milin/milin-logo.svg"
import { P } from "../../components/Typo"
import Wrapper from "../../components/Wrapper"
import Cover from "../../components/Cover"
import Dot from "../../components/Dot"

const MilinPage = () => {
  const data = useStaticQuery(graphql`
    query {
      branding: file(relativePath: { eq: "milin/milin-branding.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      businessCards: file(relativePath: { eq: "milin/wizytowki-milin.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      catalogFront: file(relativePath: { eq: "milin/katalog-front.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      catalogInside: file(relativePath: { eq: "milin/katalog-wnetrze.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Milin" />

      <Wrapper fullWidth>
        <Cover fluid={data.branding.childImageSharp.fluid} />
      </Wrapper>
      <Wrapper>
        <section className="lg:pt-20 pt-16 text-center max-w-4xl mx-auto">
          <header>
            <h1 className="text-3xl leading-tight">milin</h1>
            <P className="mt-3 mb-6 text-xl" style={{ color: "#92CBBF" }}>
              logo
              <Dot />
              branding
              <Dot />
              materiały reklamowe
            </P>
          </header>
          <P className="mb-4">
            Milin to marka, która tworzy drewniane zabawki, wykorzystując
            ekologiczne materiały. Działa w duchu less waste. Założeniem marki
            Milin jest tworzenie zabawek o prostych formaci i dobrym designie,
            jednocześnie rozwijających, pobudzających wyobraźnie, tak by w pełni
            wykorzystywać potencjał dzieci i kształtować wrażliwość wizualną.
          </P>
          <P className="mb-4">
            Logo ma lekką, minimalistyczną formę, by podkreślić charakter marki.
            Kolory użyte w identyfikacji pasować miały do odcieni drawna, biei
            oraz opakowań ekologicznych materiałów.
          </P>
          <div className="lg:pt-16 pt-12 lg:pb-20 pb-16 max-w-xl mx-auto">
            <img src={milinLogo} alt="Logo Milin Toys" />
          </div>
        </section>
      </Wrapper>

      <Img className="mt-6" fluid={data.businessCards.childImageSharp.fluid} />

      <Wrapper>
        <div className="my-24 md:py-16 grid gap-x-8 xl:gap-x-24 gap-y-8 grid-cols-1 md:grid-cols-2">
          <Img
            fluid={data.catalogFront.childImageSharp.fluid}
            alt="Katalog Milin – okładka"
          />
          <Img
            fluid={data.catalogInside.childImageSharp.fluid}
            alt="Katalog Milin – wnętrze"
          />
        </div>
      </Wrapper>
    </Layout>
  )
}

export default MilinPage
