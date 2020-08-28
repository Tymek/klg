import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Container from "../../components/Container"
import gifLarge from "../../images/zakladki/open-book-full.gif"
import gifSmall from "../../images/zakladki/open-book-small.gif"
import webpLarge from "../../images/zakladki/open-book-full.webp"
import webpSmall from "../../images/zakladki/open-book-small.webp"
import { P } from "../../components/Typo"

const MilinPage = () => {
  const data = useStaticQuery(graphql`
    query Images {
      cover: file(relativePath: { eq: "zakladki/zakladka-cover.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      closedBook: file(relativePath: { eq: "zakladki/closed-book.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      allFile(filter: {relativeDirectory: {eq: "zakladki/lista"}}, sort: {fields: absolutePath, order: ASC}) {
        edges {
          node {
            id
            absolutePath
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      kaktus: file(relativePath: { eq: "zakladki/zakladka-kaktus.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      feather: file(relativePath: { eq: "zakladki/bookmark-feather.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      abstract: file(relativePath: { eq: "zakladki/bookmark-abstract.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <SEO title="Zakładka" />
        <Container>
          <div className="mb-20">
            <Img fluid={{ ...data.cover.childImageSharp.fluid, aspectRatio: 16/7 }} />
          </div>
          <div className="flex flex-wrap items-end py-12 lg:py-20">
            <div className="w-full max-w-xl">
              <Img fluid={data.closedBook.childImageSharp.fluid} />
            </div>
            <div className="lg:px-20 lg:ml-8 mt-20 pb-3">
              <h1 className="text-2xl my-3">drewniane zakładki</h1>
              <P className="text-lg mb-6" style={{ color: '#953F1B' }}>ilustracja</P>
              <P>Projekt zakładek do książek zrealizowany dla firmy Fabrykat</P>
            </div>
          </div>

          <div className="lg:ml-auto my-12 lg:my-20 lg:pb-10 w-full lg:w-5/6">
            <picture>
              <source srcSet={`${webpLarge} 1280w, ${webpSmall} 640w`} type="image/webp" />
              <source srcSet={`${gifLarge} 1280w, ${gifSmall} 422w`} type="image/gif" />
              <img src={gifLarge} />
            </picture>
          </div>
        </Container>

        <div className="bg-gray-800 py-20 my-12 lg:my-16">
          <Container>
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-20">
              {
                data.allFile.edges.map(({ node }: { node: { id: string, childImageSharp: any }}) => (
                  <div>
                    <Img fluid={node.childImageSharp.fluid} />
                  </div>
                ))
              }
            </div>
          </Container>
        </div>
        <Container>
          <div className="flex flex-wrap items-end py-16 lg:-mx-16 lg:pb-20">
            <div className="w-full lg:w-7/12 lg:px-16 mb-20">
              <Img fluid={data.abstract.childImageSharp.fluid} />
            </div>
            <div className="w-full lg:w-5/12 lg:px-16 mb-20">
              <Img fluid={data.kaktus.childImageSharp.fluid} />
            </div>
          </div>
          <div className="hd:w-9/12 pb-20">
            <Img fluid={data.feather.childImageSharp.fluid} />
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default MilinPage
