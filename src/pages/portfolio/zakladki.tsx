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
import Grid, { Column } from "../../components/Grid"
import { P } from "../../components/Typo"
import Footer from "../../components/Footer"

const BookmarksPage = () => {
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
              fluid(
                maxWidth: 420
                traceSVG: { background: "#f1f1f1", color: "#31343e" }
              ) {
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
      <Layout largeDecoration>
        <SEO title="Zakładka" />
        <Wrapper>
          <Grid>
            <Column className="lg:col-start-2 lg:col-span-7">
              <Image
                fluid={{
                  ...data.cover.childImageSharp.fluid,
                  aspectRatio: 5 / 3,
                }}
                className="-mx-4 sm:-mx-6 md:mx-0 mt-4"
              />
            </Column>
          </Grid>

          <Grid className="my-16 lg:my-32">
            <div className="col-span-7 col-start-3 sm:col-start-5 sm:col-span-5 lg:col-start-2 lg:col-span-4">
              <Image fluid={data.closedBook.childImageSharp.fluid} />
            </div>
            <Column className="relative lg:col-start-6 lg:col-span-4 self-end">
              <div className="mt-6 sm:mt-24 lg:mt-0">
                <div className="grid grid-cols-4 sm:gap-x-15">
                  <div className="col-span-4 xl:col-span-3">
                    <div className="sm:w-2/3 lg:w-full">
                      <p className="uppercase leading-snug text-base xl:text-lg text-right mb-10">
                        ilustracja
                      </p>
                      <P className="mb-12 text-sm xl:text-base leading-relaxed">
                        Zwierzątka z kredą w zestawie to seria zabawek
                        zrealizowanych dla marki Milin. Wykonana są ze sklejki
                        pokrytej farbą tablicową. Zabawki zachęcać mają dzieci
                        do swobodnego rysowania. Pobudzają kreatywność i
                        wyobraźnie, rozwijają umiejętności motoryki małej.
                      </P>
                      <P className="mb-12 text-sm xl:text-base leading-relaxed">
                        Projekt obejmował wzory zabawek, wykrojniki opakowań
                        indywidualnie dopasowanych do każdej zabawki, nadruki na
                        opakowania, ekspozytory oraz materiały marketingowe.
                      </P>
                    </div>
                  </div>
                </div>
                <div className="xl:pt-4">
                  <h1 className="text-xl sm:text-xxl lg:text-3xl font-bold leading-none uppercase">
                    Drewniane zakładki
                  </h1>
                </div>
              </div>
            </Column>
          </Grid>

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

        <Wrapper>
          <Grid className="py-20 my-12 lg:my-16">
            <Column className="lg:col-start-2 lg:col-span-7 -mx-4 sm:-mx-6 md:mx-0">
              <div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-2 py-16"
                style={{ background: "#31343e" }}
              >
                {data.allFile.edges.map(
                  ({
                    node,
                  }: {
                    node: { id: string; childImageSharp: any }
                  }) => (
                    <div>
                      <Image fluid={node.childImageSharp.fluid} />
                    </div>
                  )
                )}
              </div>
            </Column>
          </Grid>
        </Wrapper>
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
        <Footer />
      </Layout>
    </>
  )
}

export default BookmarksPage
