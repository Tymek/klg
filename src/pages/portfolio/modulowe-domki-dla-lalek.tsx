import React, { useMemo } from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import { P } from "../../components/Typo"
import Wrapper from "../../components/Wrapper"
import Dot from "../../components/Dot"
import Footer from "../../components/Footer"
import OutlinedLink, {
  OutlinedLinkTarget,
} from "../../components/OutlinedLink/OutlinedLink"

const sortByBaseName = (
  a: { node: { base: string } },
  b: { node: { base: string } }
) => {
  if (a?.node?.base < b?.node?.base) {
    return -1
  }
  if (a?.node?.base > b?.node?.base) {
    return 1
  }
  return 0
}

const DollhousePage = () => {
  const data = useStaticQuery(graphql`
    query {
      cover: file(relativePath: { eq: "domek/domek-skladany.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1648) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      showcase: file(
        relativePath: { eq: "domek/domek-dla-lalek-prezentacja.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1648) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      showcase3: file(relativePath: { eq: "domek/domek-skladany-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1648) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      showcase4: file(relativePath: { eq: "domek/domek-skladany-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1648) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      showcase5: file(relativePath: { eq: "domek/domek-skladany-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1648) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <SEO title="Modułowe domki dla lalek" />
        <Wrapper>
          <div className="grid grid-cols-9 xl:gap-x-15 mt-8">
            <div className="col-span-9 xl:col-start-2 xl:col-span-7">
              <Img
                fluid={data.cover.childImageSharp.fluid}
                className="mb-4 sm:mb-8 xl:mb-32"
              />
            </div>
            <div className="col-span-9 sm:col-span-7 sm:col-start-2 xl:col-span-3 xl:col-start-1 xxl:col-start-2 xxl:col-span-3">
              <Img
                fluid={data.showcase.childImageSharp.fluid}
                className="mb-6 sm:mb-12"
              />
            </div>
            <div className="col-span-9 md:col-span-7 md:col-start-2 lg:col-span-7 xl:col-span-5 xl:col-start-4 xxl:col-start-5 xxl:col-span-4">
              <p className="text-md sm: text-lg uppercase leading-tight mb-8 lg:pl-10">
                Zabawki / Opakowania / Materiały
                <span className="hidden"> reklamowe</span>
              </p>
              <h1 className="text-xl sm:text-3xl lg:text-giant font-bold leading-none uppercase mb-12 lg:pl-16">
                Mo&shy;du&shy;ło&shy;we domki dla lalek
              </h1>
              <div className="md:col-span-8 md:col-start-3">
                <div className="xxl:grid xxl:grid-cols-4">
                  <div className="xxl:col-span-3">
                    <P className="mb-6">
                      Celem projektu było stworzenie modułowego domku, którego
                      złożenie nie wymaga użycia kleju ani śrubek. Łączenie
                      elementów domku miało być łatwe, a konstrukcja stabilna,
                      jednocześnie zachowując minimalistyczną estetykę.
                      Rozwiązania konstrukcyjne powstały przy wsparciu stolarza.
                    </P>
                    <P className="mb-6">
                      Dzięki modułowej konstrukcji, domek zapakowany jest w
                      płaskie opakowanie co znacznie ułatwia i obniża koszty
                      transportu.
                    </P>
                    <P className="mb-6">
                      Willa Zuzanna to domek o nowoczesnej formie, z tarasem i
                      huśtawką. Willa Maja jest klasycznym domkiem dla lalek
                      ozdobionym serduszkami, kwiatami i oknami z okiennicami.
                    </P>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-9 xl:col-span-6">
              <Img
                fluid={data.showcase3.childImageSharp.fluid}
                className="mb-4 md:mb-20 md:mt-16"
              />
            </div>
            <div className="col-span-9 xl:col-span-7 xl:col-start-2">
              <Img
                fluid={data.showcase4.childImageSharp.fluid}
                className="mb-4 md:mb-20"
              />
            </div>
            <div className="col-span-9 xl:col-span-6 xl:col-start-3">
              <Img
                fluid={data.showcase5.childImageSharp.fluid}
                className="mb-4 md:mb-20"
              />
            </div>
          </div>
        </Wrapper>
        <Footer />
      </Layout>
    </>
  )
}

export default DollhousePage
