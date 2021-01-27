import React, { FC } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Wrapper from "../../Wrapper"
import { Span } from "../../Typo"
import Image from "../../Image"
import LayoutShift from "../../LayoutShift"
import HoverLink from "../../HoverLink"

type AboutMeProps = {}

const AboutMe: FC<AboutMeProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      mainCoverPhoto: file(relativePath: { eq: "magda-klag.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1000
            traceSVG: { background: "#ffffff", color: "#f1f1f1" }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <Wrapper notRelative>
        <section id="o-mnie" className="relative min-h-screen z-10">
          <div className="relative">
            <div className="grid grid-cols-9 sm:gap-x-15">
              <div className="col-span-9 sm:col-start-4 sm:col-span-6 md:col-start-6 md:col-span-4 xl:col-start-6 xl:col-span-3">
                <LayoutShift>
                  <Image
                    fluid={{
                      ...data.mainCoverPhoto.childImageSharp.fluid,
                      backgroundColor: "#f1f1f2",
                    }}
                  />
                </LayoutShift>
              </div>
            </div>
            <div className="md:absolute md:bottom-0 lg:bottom-auto lg:top-1/3">
              <div className="-mt-16 pt-2 pb-6 sm:-mt-48 sm:pt-8 md:mt-0 md:pt-0 md:mb-0 md:pb-0">
                <div className="grid grid-cols-9 sm:gap-x-15">
                  <div className="col-span-9 md:col-span-8 sm:pb-6 md:pb-0 lg:col-span-6 xl:col-start-2 xxl:ml-15">
                    <h1 className="relative leading-none uppercase font-bold z-30">
                      <span className="text-xl sm:text-xxl xl:text-3xl">
                        Zabawki / Ilustracja / Branding / Publikacja
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <LayoutShift compensateMargin>
              <div className="grid grid-cols-9 sm:gap-x-15 md:absolute md:top-1 md:mt-4 xl:top-auto xxl:bottom-0">
                <p className="col-span-9 md:col-start-2 md:col-span-5 xl:col-start-2 xl:col-span-3">
                  <Span className="text-xs sm:text-sm md:text-base leading-7 xl:leading-10 relative z-30">
                    Zajmuję się projektowaniem wzorniczym, ilustruję, tworzę
                    grafikę na potrzeby identyfikacji wizualnej marek oraz
                    projektuję zabawki – przy czym bawię się równie dobrze, jak
                    odbiorcy. Jestem miłośniczką oszczędnej, czystej formy,
                    poprawnej typografi i swobodnej dziecięcej twórczości.
                  </Span>
                </p>
              </div>
            </LayoutShift>
          </div>
        </section>
      </Wrapper>
      <div className="absolute top-0 w-full hidden xl:block">
        <Wrapper className="min-h-screen">
          <div className="absolute bottom-0 transform z-50 w-64 mb-24">
            <div className="mb-12 ml-4">
              <HoverLink
                to="/#portfolio"
                className="uppercase transform -rotate-90 -translate-x-1/2 -translate-y-1/2 z-50"
              >
                Zobacz portfolio
              </HoverLink>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  )
}

export default AboutMe
