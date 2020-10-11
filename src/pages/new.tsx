import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Container from "../components/Container"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      mainCoverPhoto: file(relativePath: { eq: "domek.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Container>
      <SEO />
      <h1 className="text-xl uppercase font-bold max-w-3xl">
        Zabawki / Ilustracja / Branding / Publikacja
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Img fluid={data.mainCoverPhoto.childImageSharp.fluid} className="w-64" />
      </Container>
    </Layout>
  )
}

export default IndexPage
