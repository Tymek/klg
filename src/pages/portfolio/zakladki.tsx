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
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kamienica: file(relativePath: { eq: "zakladka-kamienica.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
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
    <>
      <Layout>
        <SEO title="Zakładka" />
        <div className="flex flex-wrap justify-around">
          <section className="px-10 py-6 w-2/5">
            <header className="mb-4 mt-24">
              <h1 className="mt-6 font-bold text-2xl">Zakładki do książki</h1>
            </header>
            <p className="text-gray-700 mb-2">
              drewniane
            </p>

            <div className="w-full max-w-md mt-20">
              <Img fluid={data.kamienica.childImageSharp.fluid} />
            </div>
          </section>

          <div className="w-3/5 max-w-lg p-20 pl-10 self-end">
            <Img fluid={data.kaktus.childImageSharp.fluid} />
          </div>

          <div className="w-full max-w-3xl mx-16 ml-auto pl-16 mt-2">
            <Img fluid={data.wieloryb.childImageSharp.fluid} />
          </div>
          <div className="w-full mt-8">
            <Img fluid={data.choinki.childImageSharp.fluid} />
          </div>
        </div>
      </Layout>
      <div className="w-full max-w-2xl pr-24 mx-auto mb-24 mt-8">
        <div className="px-10">
          <Img fluid={data.ptaszek.childImageSharp.fluid} />
        </div>
      </div>
    </>
  )
}

export default MilinPage
