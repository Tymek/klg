import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Container from "../components/Container"


const IndexPage = () => {
  
  const data = useStaticQuery(graphql`
    query {
      milin: file(relativePath: { eq: "milin/wizytowki-milin.jpg" }) {
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
          <ul className="grid grid-cols-3 gap-4 mt-6">
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
