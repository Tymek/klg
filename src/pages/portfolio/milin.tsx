import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import milinLogo from "../../images/milin-logo.svg"
import { P } from '../../components/Typo'
import Container from "../../components/Container"

const MilinPage = () => {
  const data = useStaticQuery(graphql`
    query {
      branding: file(relativePath: { eq: "milin-branding.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      businessCards: file(relativePath: { eq: "wizytowki-milin.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Milin" />
      <Img
        fluid={data.branding.childImageSharp.fluid} 
        style={{ maxHeight: 'calc(88vh - 5rem)' }}
        imgStyle={{ objectFit: 'cover' }}
        className="w-full"
      />

      <Container>
        <section className="md:grid gap-4 grid-cols-12 flex flex-wrap justify-between items-center">
          <div className="mt-16 mb-8 col-span-7">
            <header>
              <h1 className="text-3xl text-gray-800 font-medium leading-tight">
                Milin
              </h1>
              <P className="text-gray-800 font-normal mt-3 mb-6">
                logo, branding, materiały reklamowe
              </P>
            </header>
            <P className="text-gray-700 mb-2">
              Milin to marka, która tworzy drewniane zabawki, wykorzystując ekologiczne materiały.
              Działa w duchu less waste. Założeniem marki Milin jest tworzenie zabawek o prostych formaci i dobrym designie,
              jednocześnie rozwijających, pobudzających wyobraźnie, tak by w pełni wykorzystywać potencjał dzieci
              i kształtować wrażliwość wizualną.
            </P>
            <P className="text-gray-700 mb-2">
              Logo ma lekką, minimalistyczną formę, by podkreślić charakter marki. Kolory użyte w identyfikacji pasować miały
              do odcieni drawna, biei oraz opakowań ekologicznych materiałów.
            </P>
          </div>
          <div className="w-full col-start-8 col-end-13">
            <img src={milinLogo} alt="Logo Milin Toys"/>
          </div>
        </section>
      </Container>

      <Img className="mt-6" fluid={data.businessCards.childImageSharp.fluid} />
    </Layout>
  )
}

export default MilinPage
