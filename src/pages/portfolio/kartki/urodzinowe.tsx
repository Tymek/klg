import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../../components/Layout"
import SEO from "../../../components/seo"
import { P } from "../../../components/Typo"
import Wrapper from "../../../components/Wrapper"
import Footer from "../../../components/Footer"
import Image, { ImageType } from "../../../components/Image"
import "../../../global/portfolio-cards.css"

const BirthdayCardsPage = () => {
  const data = useStaticQuery(graphql`
    {
      cards: allFile(
        filter: { dir: { regex: "/kartki/urodzinowe/" } }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              gatsbyImageData(
                quality: 90
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
  `)

  const images: ImageType[] = data.cards.edges.map(
    (edge: { node: ImageType }) => edge?.node
  )

  return (
    <>
      <Layout largeDecoration>
        <SEO title="Kartki urodzinowe" />
        <Wrapper className="pb-16">
          <div className="min-h-screen">
            <div className="relative">
              <div className="grid grid-cols-12">
                <div className="col-start-2 col-span-10">
                  <Image
                    image={images[0]}
                    alt=""
                    className="transform rotate-5 portfolioCard ml-auto"
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
                      Kartki urodzinowe
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
                  <Image image={images[1]} alt="" className="portfolioCard" />
                </div>
                <div className="col-span-7">
                  <div className="my-12 sm:my-32 xxl:my-0">
                    <Image
                      image={images[2]}
                      alt=""
                      className="horizontalPortfolioCard ml-auto transform xxl:-translate-y-1/2"
                    />
                  </div>
                </div>
                <div className="col-span-7">
                  <div className="my-12 sm:my-32 xxl:my-32">
                    <Image image={images[3]} alt="" className="portfolioCard" />
                  </div>
                </div>
                <div className="col-span-7 lg:col-span-6 xxl:-mt-56">
                  <div className="my-12 sm:my-32 xxl:my-0">
                    <Image
                      image={images[4]}
                      alt=""
                      className="portfolioCard ml-auto xxl:-mt-64"
                    />
                  </div>
                </div>
                <div className="col-span-7">
                  <div className="my-12 sm:my-32 xxl:my-64">
                    <Image
                      image={images[5]}
                      alt=""
                      className="portfolioCard mx-auto"
                    />
                  </div>
                </div>
                <div className="col-span-7">
                  <div className="my-12 sm:my-32 xxl:my-32">
                    <Image
                      image={images[6]}
                      alt=""
                      className="horizontalPortfolioCard mx-auto transform rotate-3"
                    />
                  </div>
                </div>
                <div className="col-span-7">
                  <div className="my-12 sm:my-32">
                    <Image
                      image={images[7]}
                      alt=""
                      className="horizontalPortfolioCard"
                    />
                  </div>
                </div>
                <div className="col-span-7 xxl:pt-32">
                  <div className="my-12 sm:my-32 xxl:my-32">
                    <Image image={images[8]} alt="" className="portfolioCard" />
                  </div>
                </div>
                <div className="col-span-7 lg:col-span-6 xxl:-mt-56">
                  <div className="my-12 sm:my-32 xxl:my-0">
                    <Image
                      image={images[9]}
                      alt=""
                      className="portfolioCard ml-auto xxl:-mt-64"
                    />
                  </div>
                </div>
                <div className="col-span-7 xxl:pt-32">
                  <div className="my-12 sm:my-32 xxl:my-32">
                    <Image
                      image={images[10]}
                      alt=""
                      className="portfolioCard"
                    />
                  </div>
                </div>
                <div className="col-span-7 lg:col-span-6 xxl:-mt-56">
                  <div className="my-12 sm:my-32 xxl:my-0">
                    <Image
                      image={images[11]}
                      alt=""
                      className="portfolioCard ml-auto xxl:-mt-64 transform rotate-5"
                    />
                  </div>
                </div>
                <div className="col-span-7 xxl:pt-32 xxl:mt-64">
                  <div className="my-12 sm:my-32 xxl:my-0">
                    <Image
                      image={images[13]}
                      alt=""
                      className="portfolioCard"
                    />
                  </div>
                </div>
                <div className="col-span-7 lg:col-span-6 xxl:mt-0 xxl:-mb-64">
                  <div className="my-12 sm:my-16 xxl:my-0">
                    <Image
                      image={images[14]}
                      alt=""
                      className="portfolioCard ml-auto transform xxl:-translate-y-full"
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
