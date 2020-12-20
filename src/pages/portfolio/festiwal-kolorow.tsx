import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import { P } from "../../components/Typo"
import Wrapper from "../../components/Wrapper"
import Footer from "../../components/Footer"

const ColorFestivalPage = () => {
  const data = useStaticQuery(graphql`
    query {
      cover: file(
        relativePath: { eq: "festiwal-kolorow/festiwal-kolorow-logo-1.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 889) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      secondary: file(
        relativePath: { eq: "festiwal-kolorow/festiwal-logo-2.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 506) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      businessCards: file(
        relativePath: { eq: "festiwal-kolorow/business-cards.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1326) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <SEO title="Festiwal kolorów – Obóz wakacyjny dla dzieci" />
        <Wrapper>
          <div className="grid grid-cols-9 xl:gap-x-15 mt-8">
            <div className="col-span-9 xl:col-start-3 xl:col-span-5 mt-16 mb-16">
              <Img
                fluid={data.cover.childImageSharp.fluid}
                className="mb-4 sm:mb-8 xl:mb-32"
              />
            </div>
            <div className="col-span-9 xl:col-start-4 xl:col-span-3 mb-16">
              <Img
                fluid={data.secondary.childImageSharp.fluid}
                className="mb-4 sm:mb-8 xl:mb-32"
              />
            </div>
            <div className="col-span-9 xl:col-start-2 xl:col-span-7">
              <Img
                fluid={data.businessCards.childImageSharp.fluid}
                className="mb-4 sm:mb-8 xl:mb-32"
              />
            </div>
            <div className="col-span-9 xl:col-span-4 xl:col-start-3 pb-16">
              <h1 className="text-3xl font-bold uppercase leading-none mb-16 mt-10">
                Festiwal
                <br />
                kolorów
              </h1>
              <P>
                Festiwal kolorów to program edukacyjny przeznaczony na letnie
                obozy i zajęcia dla dzieci, zrealizowany przez wydawnictwo Misja
                Pokoleń. Program zawiera 7 lekcji, do każdej przypisany jest
                kolor o znaczeniu nawiązującym do treści lekcji.
              </P>
              <P>
                Projekt obejmował identyfikacje wizualną, skład podręcznika dla
                nauczyciela oraz materiały pomocne podczas pracy z dziećmi m.in.
                kolorowanki, ćwiczenia, ilustracje.
              </P>
            </div>
          </div>
        </Wrapper>
        <Footer />
      </Layout>
    </>
  )
}

export default ColorFestivalPage
