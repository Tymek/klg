import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../../components/Layout"
import SEO from "../../../components/seo"
import { P } from "../../../components/Typo"
import Wrapper from "../../../components/Wrapper"
import Footer from "../../../components/Footer"
import Image from "../../../components/Image"
import { FluidObject } from "gatsby-image"
import "../../../global/portfolio-cards.css"

const BirthdayCardsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      cards: allFile(
        filter: { dir: { regex: "/kartki/wielkanoc/" } }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              fluid(maxWidth: 1366, webpQuality: 90) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const images: FluidObject[] = data.cards.edges.map(
    (edge: { node: { childImageSharp: { fluid: FluidObject } } }) =>
      edge?.node?.childImageSharp?.fluid
  )

  return (
    <>
      <Layout largeDecoration>
        <SEO title="Kartki Wielkanocne" />
        <Wrapper className="pb-16">
          <div className="min-h-screen">
            <div className="relative">
              <div className="grid grid-cols-12">
                <div className="col-start-2 col-span-10">
                  <Image
                    fluid={images[0]}
                    className="transform rotate-1 portfolioCard ml-auto"
                  />
                </div>
              </div>
              <div className="lg:absolute lg:bottom-1/3 xl:bottom-0 xl:pb-16 w-full">
                <div className="mt-8 mb-16 sm:mt-4 sm:mb-24 lg:mb-0 lg:mt-0">
                  <div className="grid grid-cols-9 sm:gap-x-15">
                    <div className="col-span-9 sm:col-start-2 sm:col-span-8">
                      <div className="ml-auto pb-4">
                        <span className="uppercase text-base md:text-lg">
                          Ilustracja
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <h1 className="font-bold uppercase leading-none text-xl sm:text-xxl lg:text-3xl xl:text-giant">
                      Kartki Wielkanocne
                    </h1>
                    <P className="text-sm mt-6 xl:mt-12">
                      Ilustracje na drewniane kartki okolicznościowe
                      zrealizowane dla marki&nbsp;
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
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-9 sm:gap-x-15">
            <div className="col-span-9 lg:col-start-2 lg:col-span-7">
              <div className="grid grid-cols-7 sm:gap-x-15">
                <div className="col-span-7">
                  <Image fluid={images[1]} className="portfolioCard" />
                </div>
                <div className="col-span-6">
                  <div className="my-12 sm:my-32 xxl:my-0">
                    <Image
                      fluid={images[2]}
                      className="portfolioCard ml-auto transform xxl:-translate-y-2/3"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="my-12 sm:my-32 xxl:my-0">
                    <Image
                      fluid={images[3]}
                      className="horizontalPortfolioCard ml-auto transform xxl:-translate-y-1/2"
                    />
                  </div>
                </div>
                <div className="col-span-7">
                  <Image fluid={images[4]} className="portfolioCard" />
                </div>
                <div className="col-span-6">
                  <div className="my-12 sm:my-32 xxl:my-0">
                    <Image
                      fluid={images[5]}
                      className="portfolioCard ml-auto transform xxl:-translate-y-2/3"
                    />
                  </div>
                </div>
                <div className="col-span-7 xxl:-mt-48">
                  <Image
                    fluid={images[6]}
                    className="portfolioCard transform -rotate-5"
                  />
                </div>
                <div className="col-span-6">
                  <div className="my-12 sm:my-32 xxl:my-0">
                    <Image
                      fluid={images[7]}
                      className="portfolioCard ml-auto transform xxl:-translate-y-2/3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
        <Footer nextLink />
      </Layout>
    </>
  )
}

export default BirthdayCardsPage
