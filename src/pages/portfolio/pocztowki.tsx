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
      krk2: file(relativePath: { eq: "kartki/kartkal.jpg" }) {
        childImageSharp {
          fluid(
            maxHeight: 1400
            traceSVG: { background: "transparent", color: "#f1f1f1" }
            rotate: 90
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <Layout largeDecoration>
        <SEO title="Festiwal kolorów – Obóz wakacyjny dla dzieci" />
        <Wrapper>
          <div className="relative grid grid-cols-12 mt-8">
            <div className="col-start-2 col-span-10 xs:col-start-3 xs:col-span-8 sm:col-start-6 sm:col-span-6 xl:col-start-8 xl:col-span-3 mb-16">
              <Image
                fluid={data.krk.childImageSharp.fluid}
                className="xl:mb-32 transform-gpu -rotate-5"
              />
            </div>
          </div>
          <div>
            <div className="inline-flex flex-col justify-start">
              <div className="ml-auto pb-4">
                <span className="uppercase text-md md:text-lg">Ilustracja</span>
              </div>
              <h1 className="font-bold uppercase leading-none text-xl sm:text-xxl lg:text-3xl xl:text-giant">
                Pocztówki
              </h1>
            </div>
            <P className="text-sm mt-6">
              Ilustracje na drewniane kartki okolicznościowe zrealizowane dla
              marki&nbsp;
              <a
                href="http://fabrykat.eu/?dr=https%3A%2F%2Fmagdaklag.pl"
                className="underline"
                rel="noopener noreferrer"
              >
                Fabrykat
              </a>
              .
            </P>
          </div>
          <div className="relative grid-12">
            <Image
              fluid={{
                ...data.krk2.childImageSharp.fluid,
                aspectRatio: 3 / 2,
              }}
            />
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
