import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import { P } from "../../components/Typo"
import Wrapper from "../../components/Wrapper"
// import Cover from "../../components/Cover"
import Dot from "../../components/Dot"

export const photo = graphql`
  fragment photo on File {
    childImageSharp {
      fluid(maxWidth: 2560) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export const productImage = graphql`
  fragment productImage on File {
    childImageSharp {
      fluid(maxWidth: 1000, webpQuality: 75) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

const MilinPage = () => {
  const data = useStaticQuery(graphql`
    query {
      cover: file(relativePath: { eq: "przeplotki/cover.jpg" }) {
        ...photo
      }
      empty: file(relativePath: { eq: "empty.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      # placeholder: file(relativePath: { eq: "placeholder.png" }) {
      #   ...productImage
      # }
      aleks: file(relativePath: { eq: "przeplotki/aleks.jpg" }) {
        ...productImage
      }
      antek: file(relativePath: { eq: "przeplotki/antek.jpg" }) {
        ...productImage
      }
      felek: file(relativePath: { eq: "przeplotki/felek.jpg" }) {
        ...productImage
      }
      jezyk: file(relativePath: { eq: "przeplotki/jezyk.jpg" }) {
        ...productImage
      }
      maks: file(relativePath: { eq: "przeplotki/maks.jpg" }) {
        ...productImage
      }
      stefan: file(relativePath: { eq: "przeplotki/stefan.jpg" }) {
        ...productImage
      }
      tosia: file(relativePath: { eq: "przeplotki/tosia.jpg" }) {
        ...productImage
      }
      trzeszczyk: file(relativePath: { eq: "przeplotki/trzeszczyk.jpg" }) {
        ...productImage
      }
      zezik: file(relativePath: { eq: "przeplotki/zezik.jpg" }) {
        ...productImage
      }
      alfred: file(relativePath: { eq: "przeplotki/alfred.jpg" }) {
        ...productImage
      }
      henio: file(relativePath: { eq: "przeplotki/henio.jpg" }) {
        ...productImage
      }
      kotka: file(relativePath: { eq: "przeplotki/kotka.jpg" }) {
        ...productImage
      }
      mis: file(relativePath: { eq: "przeplotki/mis.jpg" }) {
        ...productImage
      }
      misia: file(relativePath: { eq: "przeplotki/misia.jpg" }) {
        ...productImage
      }
      oskar: file(relativePath: { eq: "przeplotki/oskar.jpg" }) {
        ...productImage
      }
      sarenka: file(relativePath: { eq: "przeplotki/sarenka.jpg" }) {
        ...productImage
      }
      szczezyk: file(relativePath: { eq: "przeplotki/szczezyk.jpg" }) {
        ...productImage
      }
      wieloryb: file(relativePath: { eq: "przeplotki/wieloryb.jpg" }) {
        ...productImage
      }
      przeplotki2: file(relativePath: { eq: "przeplotki2.jpg" }) {
        ...photo
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Przeplotki" />
      {/* <Cover fluid={data.przeplotki.childImageSharp.fluid} /> */}
      <Wrapper>
        <div className="flex flex-wrap items-end pb-20">
          <div className="w-full max-w-3xl md:w-1/2">
            <Img
              fluid={{
                ...data.cover.childImageSharp.fluid,
                aspectRatio: 4 / 5,
              }}
            />
          </div>
          <section className="w-full lg:w-1/2 lg:px-16 pt-16 lg:pt-0">
            <header>
              <h1 className="text-2xl leading-tight">przeplotki</h1>
              <P className="mt-5 mb-8 text-lg" style={{ color: "#00BDD9" }}>
                zabawki
                <Dot />
                opakowanie
                <Dot />
                materiały reklamowe
                <Dot />
                systemy wystawiennicze
              </P>
            </header>
            <P className="mb-4">
              Przeplotki to seria drewnianych zabawek z dziurkami i sznurówką w
              zestawie, stworzonych pod marką{" "}
              <Link className="underline" to="/portfolio/milin/">
                Milin
              </Link>
              .
            </P>
            <P className="mb-4">
              Przeplatanie sznurówki przez dziurki rozwija motorykę małą, pomaga
              w wyciszeniu i skupieniu uwagi, ćwiczy koordynację ręka-oko.
            </P>
            <P className="mb-4">
              Zaprojektowałam 18 wzorów oraz zestawy dla zaawansowanych
              przeplataczy – Panna Miś i Pan Miś z ubrankami. Ponadto projekt
              obejmował wykrojniki opakowań indywidualnie dopasowanych do każdej
              zabawki, nadruki na opakowania, ekspozytor oraz materiały
              marketingowe.
            </P>
          </section>
        </div>
      </Wrapper>
      <Wrapper className="py-10 lg:py-20">
        <section className="my-8 grid gap-4 md:gap-6 lg:gap-8 grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 grid-flow-row-dense">
          <Img
            fluid={data.stefan.childImageSharp.fluid}
            className="col-span-4 row-span-4"
          />
          <Img
            fluid={data.empty.childImageSharp.fluid}
            className="col-span-2 row-span-2 empty-block"
          />
          <Img
            fluid={data.sarenka.childImageSharp.fluid}
            className="col-span-2 row-span-2"
          />
          <Img
            fluid={data.kotka.childImageSharp.fluid}
            className="col-span-3 row-span-3"
          />
          <Img
            fluid={data.wieloryb.childImageSharp.fluid}
            className="col-span-3 row-span-3"
          />
          <Img
            fluid={data.maks.childImageSharp.fluid}
            className="col-span-2 row-span-2"
          />
          <Img
            fluid={data.antek.childImageSharp.fluid}
            className="col-span-2 row-span-2"
          />
          <Img
            fluid={data.aleks.childImageSharp.fluid}
            className="col-span-2 row-span-2"
          />
          <Img
            fluid={data.empty.childImageSharp.fluid}
            className="col-span-2 row-span-2 empty-block"
          />
          <Img
            fluid={data.szczezyk.childImageSharp.fluid}
            className="col-span-4 row-span-4"
          />
          <Img
            fluid={data.zezik.childImageSharp.fluid}
            className="col-span-2 row-span-2"
          />
          <Img
            fluid={data.trzeszczyk.childImageSharp.fluid}
            className="col-span-2 row-span-2"
          />
          <Img
            fluid={data.empty.childImageSharp.fluid}
            className="col-span-2 row-span-2 empty-block"
          />
          <Img
            fluid={data.empty.childImageSharp.fluid}
            className="col-span-2 row-span-2 empty-block"
          />
          <Img
            fluid={data.tosia.childImageSharp.fluid}
            className="col-span-4 row-span-4"
          />
          <Img
            fluid={data.alfred.childImageSharp.fluid}
            className="col-span-2 row-span-2"
          />
          <Img
            fluid={data.felek.childImageSharp.fluid}
            className="col-span-2 row-span-2"
          />

          <Img
            fluid={data.oskar.childImageSharp.fluid}
            className="col-span-2 row-span-2"
          />
          <Img
            fluid={data.henio.childImageSharp.fluid}
            className="col-span-2 row-span-2"
          />
          <Img
            fluid={data.jezyk.childImageSharp.fluid}
            className="col-span-2 row-span-2"
          />
          <Img
            fluid={data.mis.childImageSharp.fluid}
            className="col-span-3 row-span-3"
          />
          <Img
            fluid={data.misia.childImageSharp.fluid}
            className="col-span-3 row-span-3"
          />
        </section>
      </Wrapper>

      <Img className="my-20" fluid={data.przeplotki2.childImageSharp.fluid} />
    </Layout>
  )
}

export default MilinPage
