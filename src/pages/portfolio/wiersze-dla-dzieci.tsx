import React, { FC } from "react"

import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import { P } from "../../components/Typo"
import Wrapper from "../../components/Wrapper"
import Footer from "../../components/Footer"
import Image from "../../components/Image"

import svgSpoon from "../../images/wiersze/vector/spoon.svg"
import svgFork from "../../images/wiersze/vector/fork.svg"
import svgBeard from "../../images/wiersze/vector/beard.svg"
import svgMustache from "../../images/wiersze/vector/mustache.svg"
import svgCarpet from "../../images/wiersze/vector/carpet.svg"
import svgLamp from "../../images/wiersze/vector/lamp.svg"
import svgStandingLamp from "../../images/wiersze/vector/standing-lamp.svg"
import svgHangingLamp from "../../images/wiersze/vector/hanging-lamp.svg"
import svgSplash from "../../images/wiersze/vector/splash.svg"

const Container: FC = ({ children }) => (
  <Wrapper>
    <div className="grid grid-cols-9 xl:gap-x-15">
      <div className="relative col-start-2 col-span-7 xl:col-start-3 xl:col-span-5 mb-16 sm:mb-48 xl:mb-56">
        {children}
      </div>
    </div>
  </Wrapper>
)

const PoemsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      cover: file(relativePath: { eq: "wiersze/okladka.jpg" }) {
        ...ImageFragment
      }
      tygrys: file(relativePath: { eq: "wiersze/tygrys.png" }) {
        ...ImageFragment
      }
      marzenie: file(relativePath: { eq: "wiersze/marzenie.png" }) {
        ...ImageFragment
      }
      dywan: file(relativePath: { eq: "wiersze/dywan.jpg" }) {
        ...ImageFragment
      }
      lampy: file(relativePath: { eq: "wiersze/lampy.jpg" }) {
        ...ImageFragment
      }
      zamieszanie: file(relativePath: { eq: "wiersze/zamieszanie.png" }) {
        ...ImageFragment
      }
    }
  `)

  return (
    <>
      <Layout>
        <SEO title="Wiersze dla dzieci" />
        <Wrapper>
          <div className="grid grid-cols-9 xl:gap-x-15 my-8">
            <div className="col-span-9 xl:col-start-2 xl:col-span-7">
              <Image
                fluid={data.cover.childImageSharp.fluid}
                className="mb-4 sm:mb-8 xl:mb-32"
              />
            </div>
            <div className="col-span-9 md:col-span-7 xl:col-start-2">
              <h1 className="text-xl sm:text-3xl lg:text-giant font-bold leading-none uppercase">
                Wier&shy;sze dla dzieci
              </h1>
            </div>
            <div className="col-span-9 xs:col-start-2 xs:col-span-8 md:col-span-7 md:col-start-2 lg:col-start-4 lg:col-span-4">
              <div className="mt-3 mb-6 sm:my-8 xl:my-16">
                <P className="text-sm">
                  Książka zawiera zbiór wierszy pełnych wywarzonego humoru i
                  inteligentnych puent. Chciałam, by ilustracje były równie
                  zabawne, przewrotne, nie zawsze oczywiste.
                </P>
              </div>
              <div className="mb-12 lg:pb-32">
                <p className="text-base sm:text-lg uppercase leading-tight">
                  Ilustracja / Skład tesktu / Publikacja
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
        <Container>
          <Image fluid={data.tygrys.childImageSharp.fluid} />
          <img
            src={svgSpoon}
            alt="Ilustacja łyżki"
            className="absolute top-0 w-1/3 transform -translate-x-2/3"
          />
          <img
            src={svgFork}
            alt="Ilustacja widelca"
            className="absolute bottom-0 right-0 w-1/3 transform translate-x-3/5"
          />
        </Container>
        <Container>
          <Image fluid={data.marzenie.childImageSharp.fluid} />
          <img
            src={svgMustache}
            alt="Ilustacja wąsów"
            className="absolute top-0 right-0 w-4/5 transform translate-x-2/5 -translate-y-1/3"
          />
          <img
            src={svgBeard}
            alt="Ilustacja brody"
            className="absolute bottom-0 left-0 w-1/2 transform -translate-x-2/5 translate-y-1/5"
          />
        </Container>
        <div className="relative">
          <img
            src={svgCarpet}
            alt="Ilustacja dywanu"
            className="absolute right-0 top-0 h-full transform translate-x-32 -translate-y-1/4 z-10"
          />
          <Container>
            <Image
              fluid={data.dywan.childImageSharp.fluid}
              className="relative z-50"
            />
          </Container>
        </div>
        <Container>
          <img
            src={svgLamp}
            alt="Ilustacja lampy"
            className="absolute w-1/3 top-0 left-0 transform -translate-x-2/3 translate-y-1/5 z-10"
          />
          <img
            src={svgStandingLamp}
            alt="Ilustacja lampy stojącej"
            className="absolute w-1/2 bottom-0 right-0 transform translate-x-3/5 translate-y-1/5 z-50"
          />
          <img
            src={svgHangingLamp}
            alt="Ilustacja lampy wiszącej"
            className="absolute w-1/2 top-0 left-0 transform -translate-y-2/3 z-40"
          />
          <Image
            fluid={data.lampy.childImageSharp.fluid}
            className="relative z-30"
          />
        </Container>
        <Container>
          <img
            src={svgSplash}
            alt="Ilustacja lampy"
            className="absolute w-2/3 top-0 left-0 transform -translate-x-2/5 -translate-y-1/3 z-10"
          />
          <Image
            fluid={data.zamieszanie.childImageSharp.fluid}
            className="relative z-30"
          />
        </Container>
        <Footer nextLink />
      </Layout>
    </>
  )
}

export default PoemsPage
