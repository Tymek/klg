import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Wrapper from "../../components/Wrapper"
import gifLarge from "../../images/zakladki/open-book-full.gif"
import gifSmall from "../../images/zakladki/open-book-small.gif"
import webpLarge from "../../images/zakladki/open-book-full.webp"
import webpSmall from "../../images/zakladki/open-book-small.webp"
import Image from "../../components/Image"
import { P } from "../../components/Typo"

const MilinPage = () => {
  const data = useStaticQuery(graphql`
    query Images {
      cover: file(relativePath: { eq: "zakladki/zakladka-cover.jpg" }) {
        ...ImageFragment
      }
      closedBook: file(relativePath: { eq: "zakladki/closed-book.jpg" }) {
        ...ImageFragment
      }
      allFile(
        filter: { relativeDirectory: { eq: "zakladki/lista" } }
        sort: { fields: absolutePath, order: ASC }
      ) {
        edges {
          node {
            id
            absolutePath
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
      kaktus: file(relativePath: { eq: "zakladki/zakladka-kaktus.jpg" }) {
        ...ImageFragment
      }
      feather: file(relativePath: { eq: "zakladki/bookmark-feather.jpg" }) {
        ...ImageFragment
      }
      abstract: file(relativePath: { eq: "zakladki/bookmark-abstract.jpg" }) {
        ...ImageFragment
      }
    }
  `)

  return (
    <>
      <Layout>
        <SEO title="Zakładka" />
        <Wrapper>
          <div className="mb-20">
            <Image
              fluid={{
                ...data.cover.childImageSharp.fluid,
                aspectRatio: 16 / 7,
              }}
              backgroundColor="#f1f1f1"
            />
          </div>
          <div className="flex flex-wrap items-end py-12 lg:py-20">
            <div className="w-full max-w-xl">
              <Image fluid={data.closedBook.childImageSharp.fluid} />
            </div>
            <div className="lg:px-20 lg:ml-8 mt-20 pb-3">
              <h1 className="text-2xl my-3">drewniane zakładki</h1>
              <P className="text-lg mb-6" style={{ color: "#953F1B" }}>
                ilustracja
              </P>
              <P>Projekt zakładek do książek zrealizowany dla firmy Fabrykat</P>
            </div>
          </div>

          <div className="lg:ml-auto my-12 lg:my-20 lg:pb-10 w-full lg:w-5/6">
            <picture>
              <source
                srcSet={`${webpLarge} 1280w, ${webpSmall} 640w`}
                type="image/webp"
              />
              <source
                srcSet={`${gifLarge} 1280w, ${gifSmall} 422w`}
                type="image/gif"
              />
              <img src={gifLarge} />
            </picture>
          </div>
        </Wrapper>

        <div className="bg-gray-800 py-20 my-12 lg:my-16">
          <Wrapper>
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-20">
              {data.allFile.edges.map(
                ({ node }: { node: { id: string; childImageSharp: any } }) => (
                  <div>
                    <Image fluid={node.childImageSharp.fluid} />
                  </div>
                )
              )}
            </div>
          </Wrapper>
        </div>
        <Wrapper>
          <div className="flex flex-wrap items-end py-16 lg:-mx-16 lg:pb-20">
            <div className="w-full lg:w-7/12 lg:px-16 mb-20">
              <Image fluid={data.abstract.childImageSharp.fluid} />
            </div>
            <div className="w-full lg:w-5/12 lg:px-16 mb-20">
              <Image fluid={data.kaktus.childImageSharp.fluid} />
            </div>
          </div>
          <div className="xxl:w-9/12 pb-20">
            <Image fluid={data.feather.childImageSharp.fluid} />
          </div>
        </Wrapper>
      </Layout>
    </>
  )
}

export default MilinPage
