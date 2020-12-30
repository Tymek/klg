import React, { FC } from "react"

import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import { P } from "../../components/Typo"
import Wrapper from "../../components/Wrapper"
import Footer from "../../components/Footer"
import Image from "../../components/Image"
import { FluidObject } from "gatsby-image"

const Grid: FC<{ className?: string }> = ({ children, className }) => (
  <div className={`grid grid-cols-9 sm:gap-x-15 ${className || ""}`}>
    {children}
  </div>
)

const ChalkBoardsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      cover: file(relativePath: { eq: "tabliczki/cover.jpg" }) {
        ...ImageFragment
      }
      title: file(relativePath: { eq: "tabliczki/title.jpg" }) {
        ...ImageFragment
      }
      preview: file(relativePath: { eq: "tabliczki/preview.jpg" }) {
        ...ImageFragment
      }
      presentation: file(relativePath: { eq: "tabliczki/presentation.jpg" }) {
        ...ImageFragment
      }
      products: allFile(
        filter: { relativeDirectory: { eq: "tabliczki/products" } }
        sort: { fields: absolutePath, order: ASC }
      ) {
        edges {
          node {
            id
            absolutePath
            childImageSharp {
              fluid(maxWidth: 1366, webpQuality: 80) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const products: FluidObject[] = data.products.edges.map(
    (edge: { node: { childImageSharp: { fluid: FluidObject } } }) =>
      edge?.node?.childImageSharp?.fluid
  )

  return (
    <Layout largeDecoration>
      <SEO title="Tabliczki kredowe" />
      <Wrapper>
        <Grid>
          <div className="col-span-9 lg:col-start-2 lg:col-span-7">
            <Image
              fluid={{
                ...data.cover.childImageSharp.fluid,
                aspectRatio: 5 / 3,
              }}
              className="-mx-4 xs:-mx-6 md:mx-0"
            />
          </div>
        </Grid>

        <Grid className="my-16 lg:my-48">
          <div className="col-span-7 col-start-3 lg:col-start-1 lg:col-span-4">
            <Image fluid={data.title.childImageSharp.fluid} />
          </div>
          <div className="relative col-span-9 lg:col-start-5 lg:col-span-4">
            <div className="mt-6 sm:mt-20 lg:absolute bottom-0">
              <div className="xxl:grid xxl:grid-cols-4 xxl:gap-x-15">
                <div className="xxl:col-start-2">
                  <h1 className="text-xl sm:text-3xl lg:text-giant font-bold leading-none uppercase">
                    Tabliczki kredowe
                  </h1>
                </div>
              </div>
              <div className="text-sm mt-10 sm:w-1/2 lg:w-full">
                <P className="mb-12">
                  Zwierzątka z kredą w zestawie to seria zabawek zrealizowanych
                  dla marki Milin. Wykonana są ze sklejki pokrytej farbą
                  tablicową. Zabawki zachęcać mają dzieci do swobodnego
                  rysowania. Pobudzają kreatywność i wyobraźnie, rozwijają
                  umiejętności motoryki małej.
                </P>
                <P className="mb-12">
                  Projekt obejmował wzory zabawek, wykrojniki opakowań
                  indywidualnie dopasowanych do każdej zabawki, nadruki na
                  opakowania, ekspozytory oraz materiały marketingowe.
                </P>
              </div>
              <p className="uppercase leading-snug text-sm md:text-lg">
                zabawki / opakowania / materiały reklamowe
              </p>
            </div>
          </div>
        </Grid>

        <Grid className="my-16 lg:my-48">
          <div className="col-start-3 col-span-7">
            <Image fluid={data.preview.childImageSharp.fluid} />
          </div>
        </Grid>

        <Grid className="my-16 lg:my-48">
          <div className="col-start-2 col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-15">
              {products.map(product => (
                <div className="col-span-1">
                  <Image fluid={product} />
                </div>
              ))}
            </div>
          </div>
        </Grid>

        <Grid className="my-16 lg:my-48 xl:my-64">
          <div className="col-span-9 lg:col-start-2 lg:col-span-7">
            <Image fluid={data.presentation.childImageSharp.fluid} />
          </div>
        </Grid>
      </Wrapper>
      <Footer />
    </Layout>
  )
}

export default ChalkBoardsPage
