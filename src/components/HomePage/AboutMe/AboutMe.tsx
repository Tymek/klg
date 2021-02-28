import React, { FC } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Wrapper from "../../Wrapper"
import { Span } from "../../Typo"
import Image from "../../Image"
import LayoutShift from "../../LayoutShift"
import HoverLink from "../../HoverLink"
import Title from "./components/Title"
import Decoration from "../../Layout/components/Decoration"

const AboutMe: FC = ({ children }) => {
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
    <section id="o-mnie">
      <div className="relative">
        <Decoration
          style={{ height: "100%", bottom: 0 }}
          className="hidden sm:block"
        />
        <Wrapper>
          <LayoutShift>
            <div className="grid grid-cols-1 sm:gap-x-15 sm:grid-cols-9">
              <div
                className={
                  "col-span-1 " +
                  "sm:col-start-4 sm:col-span-6 " +
                  "md:col-start-6 md:col-span-4 " +
                  "lg:col-start-6 lg:col-span-4 " +
                  "xl:col-start-6 xl:col-span-3"
                }
              >
                <Image
                  fluid={{
                    ...data.mainCoverPhoto.childImageSharp.fluid,
                    backgroundColor: "#f1f1f2",
                  }}
                />
              </div>
            </div>
          </LayoutShift>
        </Wrapper>
      </div>
      <Wrapper notRelative className="xxl:absolute xxl:top-1/2">
        <h1 className="relative z-30 mt-4 mb-2">
          <Title />
        </h1>
        <LayoutShift compensateMargin>
          <div className="grid grid-cols-9 sm:gap-x-15 md:absolute md:top-1 md:mt-4">
            <div className="grid grid-cols-9 sm:gap-x-15 md:absolute md:top-0">
              <p className="col-span-9 md:col-start-2 md:col-span-5 xl:col-start-2 xl:col-span-3">
                <Span className="text-xs sm:text-sm leading-6 xl:leading-8 relative z-30">
                  {children}
                </Span>
              </p>
            </div>
          </div>
        </LayoutShift>
      </Wrapper>
      <div className="absolute bottom-0 w-full hidden xl:block">
        <Wrapper>
          <div className="absolute bottom-0 transform z-50 w-64 mb-24">
            <div className="-mb-2 ml-4">
              <HoverLink
                to="/#portfolio"
                className="uppercase transform -rotate-90 -translate-x-1/2 -translate-y-1/2 z-50"
              >
                <span className="text-medium">Zobacz portfolio</span>
              </HoverLink>
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  )
}

export default AboutMe
