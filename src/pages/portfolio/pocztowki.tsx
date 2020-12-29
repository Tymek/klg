import React, { FC } from "react"

import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import { P } from "../../components/Typo"
import Wrapper from "../../components/Wrapper"
import Footer from "../../components/Footer"
import Image from "../../components/Image"
import { FluidObject } from "gatsby-image"

const GenericWrapper: FC = ({ children }) => (
  <div className="mt-32 sm:mt-48 xl:mt-64">{children}</div>
)

const Illustration: FC<{ image: FluidObject }> = ({ image }) => (
  <GenericWrapper>
    <div className="grid grid-cols-12">
      <div className="relative col-span-12 xl:col-start-3 xl:col-span-8">
        <div className="-mx-4 sm:-mx-6 md:mx-0">
          <Image fluid={image} />
        </div>
      </div>
    </div>
  </GenericWrapper>
)

const HorizontalPostcardWrapper: FC = ({ children }) => (
  <GenericWrapper>
    <div className="grid grid-cols-9">
      <div className="relative col-start-1 col-span-9 sm:col-start-2 sm:col-span-7 lg:col-start-4 lg:col-span-3">
        {children}
      </div>
    </div>
  </GenericWrapper>
)

const VerticalPostcardWrapper: FC = ({ children }) => (
  <GenericWrapper>
    <div className="grid grid-cols-10">
      <div className="relative col-start-3 col-span-6 sm:col-start-4 sm:col-span-4 lg:col-start-5 lg:col-span-2">
        {children}
      </div>
    </div>
  </GenericWrapper>
)

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
      trn: file(relativePath: { eq: "kartki/kartka_Tarnów.jpg" }) {
        ...ImageFragment
      }
      tarnowRynek: file(
        relativePath: { eq: "kartki/tarnow-rynek-pocztowka.png" }
      ) {
        childImageSharp {
          fluid(
            maxWidth: 1326
            traceSVG: { background: "transparent", color: "#f1f1f1" }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      trnDworzec: file(
        relativePath: { eq: "kartki/kartka_Tarnów_dworzec.jpg" }
      ) {
        ...ImageFragment
      }
      tarnowDworzec: file(
        relativePath: { eq: "kartki/tarnow-dworzec-pocztowka.png" }
      ) {
        childImageSharp {
          fluid(
            maxWidth: 1326
            traceSVG: { background: "transparent", color: "#f1f1f1" }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      waw: file(relativePath: { eq: "kartki/kartka_pałac_kultury.jpg" }) {
        ...ImageFragment
      }
      syrenka: file(relativePath: { eq: "kartki/kartka_syrenka.jpg" }) {
        ...ImageFragment
      }
      wawStarowka: file(
        relativePath: { eq: "kartki/kartka_warszawa_kamienice.jpg" }
      ) {
        ...ImageFragment
      }
      warszawaStarowka: file(
        relativePath: { eq: "kartki/warszawa-starowka-pocztowka.png" }
      ) {
        childImageSharp {
          fluid(
            maxWidth: 1326
            traceSVG: { background: "transparent", color: "#f1f1f1" }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      dom: file(
        relativePath: {
          eq: "kartki/kartka_wszędzie_dobrze_ale_w_domu_najlepiej.jpg"
        }
      ) {
        ...ImageFragment
      }
    }
  `)

  return (
    <>
      <Layout largeDecoration>
        <SEO title="Festiwal kolorów – Obóz wakacyjny dla dzieci" />
        <Wrapper className="pb-16">
          <div className="relative">
            <div className="relative grid grid-cols-12 mt-8">
              <div className="col-start-2 col-span-10 xs:col-start-3 xs:col-span-8 sm:col-start-6 sm:col-span-6 xl:col-start-8 xl:col-span-3 mb-16">
                <Image
                  fluid={data.krk.childImageSharp.fluid}
                  className="xl:mb-32 transform -rotate-5"
                />
              </div>
            </div>
            <div className="xl:absolute xl:top-1/3">
              <div className="inline-flex flex-col justify-start">
                <div className="ml-auto pb-4">
                  <span className="uppercase text-md md:text-lg">
                    Ilustracja
                  </span>
                </div>
                <h1 className="font-bold uppercase leading-none text-xl sm:text-xxl lg:text-3xl xl:text-giant">
                  Pocztówki
                </h1>
              </div>
              <P className="text-sm mt-6 xl:mt-16">
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
          </div>
          <HorizontalPostcardWrapper>
            <Image
              fluid={{
                ...data.krk2.childImageSharp.fluid,
                aspectRatio: 3 / 2,
              }}
              className="transform -rotate-1"
            />
          </HorizontalPostcardWrapper>

          <HorizontalPostcardWrapper>
            <Image
              fluid={{
                ...data.trn.childImageSharp.fluid,
              }}
              className="transform rotate-2"
            />
          </HorizontalPostcardWrapper>
          <Illustration image={data.tarnowRynek.childImageSharp.fluid} />

          <HorizontalPostcardWrapper>
            <Image
              fluid={{
                ...data.trnDworzec.childImageSharp.fluid,
              }}
              className="transform -rotate-2"
            />
          </HorizontalPostcardWrapper>
          <Illustration image={data.tarnowDworzec.childImageSharp.fluid} />

          <VerticalPostcardWrapper>
            <Image
              fluid={{
                ...data.waw.childImageSharp.fluid,
              }}
              className="transform -rotate-1"
            />
          </VerticalPostcardWrapper>
          <VerticalPostcardWrapper>
            <Image
              fluid={{
                ...data.syrenka.childImageSharp.fluid,
              }}
              className="transform rotate-3"
            />
          </VerticalPostcardWrapper>
          <HorizontalPostcardWrapper>
            <Image
              fluid={{
                ...data.wawStarowka.childImageSharp.fluid,
              }}
            />
          </HorizontalPostcardWrapper>
          <Illustration image={data.warszawaStarowka.childImageSharp.fluid} />
          <VerticalPostcardWrapper>
            <Image
              fluid={{
                ...data.dom.childImageSharp.fluid,
              }}
            />
          </VerticalPostcardWrapper>
        </Wrapper>
        <Footer />
      </Layout>
    </>
  )
}

export default PocztowkiPage
