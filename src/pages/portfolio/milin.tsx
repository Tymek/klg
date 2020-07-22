import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MilinPage = () => {
  const data = useStaticQuery(graphql`
    query {
      branding: file(relativePath: { eq: "milin-branding.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      businessCards: file(relativePath: { eq: "wizytowki-milin.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Milin" />
      <Img fluid={data.branding.childImageSharp.fluid} />

      <section className="px-4">
        <header className="mb-4">
          <h1 className="mt-6 font-bold text-2xl">Milin</h1>
          <p>logo, branding, materiały reklamowe</p>
        </header>
        <p className="text-gray-700 mb-2">
          Milin to marka, która tworzy drewniane zabawki, wykorzystując ekologiczne materiały.
          Działa w duchu less waste. Założeniem marki Milin jest tworzenie zabawek o prostych formaci i dobrym designie,
          jednocześnie rozwijających, pobudzających wyobraźnie, tak by w pełni wykorzystywać potencjał dzieci
          i kształtować wrażliwość wizualną.
        </p>
        <p className="text-gray-700 mb-2">
          Logo ma lekką, minimalistyczną formę, by podkreślić charakter marki. Kolory użyte w identyfikacji pasować miały
          do odcieni drawna, biei oraz opakowań ekologicznych materiałów.
        </p>
      </section>

      <Img className="mt-6" fluid={data.businessCards.childImageSharp.fluid} />
    </Layout>
  )
}

export default MilinPage
