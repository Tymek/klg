import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Container from "../components/Container"


const IndexPage = () => {
  
  const data = useStaticQuery(graphql`
    query {
      milin: file(relativePath: { eq: "wizytowki-milin.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      zakladki: file(relativePath: { eq: "zakladka-ptaszek.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      przeplotki: file(relativePath: { eq: "przeplotki2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO />
      <section id="portfolio">
        <Container>
          <h2 className="text-xl font-medium">Portfolio</h2>
          <ul className="grid grid-cols-3 gap-4">
            <li>
              <Link className="underline" to="/portfolio/milin/">
                <Img fluid={data.milin.childImageSharp.fluid} />
              </Link>
            </li>
            <li>
              <Link className="underline" to="/portfolio/zakladki/">
                <Img fluid={data.zakladki.childImageSharp.fluid} />
              </Link>
            </li>
            <li>
              <Link className="underline" to="/portfolio/przeplotki/">
                <Img fluid={data.przeplotki.childImageSharp.fluid} />
              </Link>
            </li>
          </ul>
        </Container>
      </section>
    </Layout>
  )
}

export default IndexPage
