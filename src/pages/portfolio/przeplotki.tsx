import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import { P } from '../../components/Typo'

const MilinPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholder: file(relativePath: { eq: "placeholder.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout background="transparent">
      <SEO title="Przeplotki" />
      <section>
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
    </Layout>
  )
}

export default MilinPage
