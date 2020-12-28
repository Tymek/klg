import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import { P } from "../../components/Typo"
import Wrapper from "../../components/Wrapper"
import Footer from "../../components/Footer"
import Image from "../../components/Image"

const PocztowkiPage = () => {
  const data = useStaticQuery(graphql`
    query {
      krk: file(relativePath: { eq: "kartki/kartkak.jpg" }) {
        ...ImageFragment
      }
    }
  `)

  return (
    <>
      <Layout largeDecoration>
        <SEO title="Festiwal kolorów – Obóz wakacyjny dla dzieci" />
        <Wrapper>
          <div className="grid grid-cols-9 mt-8">
            <div
              className="col-span-9 xl:col-start-7 xl:col-span-2 mt-16 mb-16"
              style={{
                transform: "rotate(-5deg)",
                maxHeight: "50vh",
              }}
            >
              <Image
                fluid={data.krk.childImageSharp.fluid}
                className="mb-4 sm:mb-8 xl:mb-32"
              />
            </div>
          </div>
          <div>
            <div className="inline-flex flex-col justify-start">
              <div className="ml-auto pb-4">
                <span className="uppercase text-lg">Ilustracja</span>
              </div>
              <h1 className="font-bold uppercase text-giant leading-none">
                Pocztówki
              </h1>
            </div>
            <P>
              Ilustracje na drewniane kartki okolicznościowe zrealizowane dla
              marki Fabrykat.
            </P>
          </div>
          {/* <div className="grid grid-cols-9 xl:gap-x-15 mt-8">
            <div className="col-span-9 xl:col-start-3 xl:col-span-5 mt-16 mb-16">
              <Image
                fluid={data.krk.childImageSharp.fluid}
                className="mb-4 sm:mb-8 xl:mb-32"
              />
            </div>
          </div> */}
        </Wrapper>
        <Footer />
      </Layout>
    </>
  )
}

export default PocztowkiPage
