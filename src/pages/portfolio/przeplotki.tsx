import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import { P } from '../../components/Typo'
import Container from "../../components/Container"
import Cover from "../../components/Cover"

const MilinPage = () => {
  const data = useStaticQuery(graphql`
    query {
      przeplotki: file(relativePath: { eq: "przeplotki.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      placeholder: file(relativePath: { eq: "placeholder.png" }) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      przeplotki2: file(relativePath: { eq: "przeplotki2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Przeplotki" />
      <Cover fluid={data.przeplotki.childImageSharp.fluid} />
      <Container>
        <section className="mt-10">
            <header>
              <h1 className="text-3xl text-gray-800 font-medium leading-tight">
                Przeplotki
              </h1>
              <P className="text-gray-800 font-normal mt-3 mb-6">
                projekt zabawek
              </P>
            </header>
            <P className="text-gray-700 mb-2">
              Przeplotki to seria drewnianych zabawek z dziurkami i sznurówką w zestawie,
              stworzonych pod marką <Link className="underline" to="/portfolio/milin/">Milin</Link>.
            </P>
            <P className="text-gray-700 mb-2">
              Przeplatanie sznurówki przez dziurki rozwija motorykę małą, pomaga w wyciszeniu i skupieniu uwagi, ćwiczy koordynację ręka-oko.
            </P>
            <P className="text-gray-700 mb-2">
              Zaprojektowałam 18 wzorów oraz zestawy dla zaawansowanych przeplataczy – Panna Miś i Pan Miś z ubrankami.
              Ponadto projekt obejmował wykrojniki opakowań indywidualnie dopasowanych do każdej zabawki,
              nadruki na opakowania, ekspozytor oraz materiały marketingowe.
            </P>
        </section>
      </Container>
      <Container>
        <section className="my-8 grid gap-4 lg:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 grid-flow-row-dense">
          {/* TODO: lightbox? */}
          <Img fluid={data.placeholder.childImageSharp.fluid} className="col-span-1" />
          <Img fluid={data.placeholder.childImageSharp.fluid} className="col-span-1" />
          <Img fluid={data.placeholder.childImageSharp.fluid} className="col-span-1" />
          <Img fluid={data.placeholder.childImageSharp.fluid} className="col-span-1" />
          <Img fluid={data.placeholder.childImageSharp.fluid} className="col-span-2 row-span-2" />
          <Img fluid={data.placeholder.childImageSharp.fluid} className="col-span-1" />
          <Img fluid={data.placeholder.childImageSharp.fluid} className="col-span-1" />
          <Img fluid={data.placeholder.childImageSharp.fluid} className="col-span-1" />
          <Img fluid={data.placeholder.childImageSharp.fluid} className="col-span-1" />
          <Img fluid={data.placeholder.childImageSharp.fluid} className="col-span-1" />
          <Img fluid={data.placeholder.childImageSharp.fluid} className="col-span-1" />
          <Img fluid={data.placeholder.childImageSharp.fluid} className="col-span-1" />
          <Img fluid={data.placeholder.childImageSharp.fluid} className="col-span-1" />
          <Img fluid={data.placeholder.childImageSharp.fluid} className="col-span-1" />
          <Img fluid={data.placeholder.childImageSharp.fluid} className="col-span-1" />
          <Img fluid={data.placeholder.childImageSharp.fluid} className="col-span-2 row-span-2" />
          <Img fluid={data.placeholder.childImageSharp.fluid} className="col-span-1" />
          <Img fluid={data.placeholder.childImageSharp.fluid} className="col-span-1" />
        </section>
      </Container>

      <Img className="mt-6" fluid={data.przeplotki2.childImageSharp.fluid} />
    </Layout>
  )
}

export default MilinPage
