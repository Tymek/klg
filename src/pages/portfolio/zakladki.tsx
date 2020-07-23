import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MilinPage = () => {
  const data = useStaticQuery(graphql`
    query {
      kaktus: file(relativePath: { eq: "zakladka-kaktus.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kamienica: file(relativePath: { eq: "zakladka-kamienica.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wieloryb: file(relativePath: { eq: "zakladka-wieloryb.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      choinki: file(relativePath: { eq: "zakladka-choinki.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ptaszek: file(relativePath: { eq: "zakladka-ptaszek.jpg" }) {
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
      <SEO title="Zakładka" />
      <div className="max-w-md">
        <Img fluid={data.kaktus.childImageSharp.fluid} />
      </div>

      <section className="px-4">
        <header className="mb-4">
          <h1 className="mt-6 font-bold text-2xl">Zakładki do książki</h1>
        </header>
        <p className="text-gray-700 mb-2">
          drewniane
        </p>
      </section>

      <div className="max-w-md">
        <Img className="mt-6" fluid={data.kamienica.childImageSharp.fluid} />
      </div>

      <div className="max-w-lg">
        <Img className="mt-6" fluid={data.wieloryb.childImageSharp.fluid} />
      </div>
      <div>
        <Img className="mt-6" fluid={data.choinki.childImageSharp.fluid} />
      </div>
      <div className="max-w-lg">
        <Img className="mt-6" fluid={data.ptaszek.childImageSharp.fluid} />
      </div>
    </Layout>
  )
}

export default MilinPage
