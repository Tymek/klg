import React, { FC } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Wrapper from "../../Wrapper"
import { Span } from "../../Typo"
import LayoutShift from "../../LayoutShift"
import HoverLink from "../../HoverLink"
import Title from "./components/Title"
import Decoration from "../../Layout/components/Decoration"
import Grid, { Column } from "../../Grid"
import Image from "../../Image"

const AboutMe: FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      mainCoverPhoto: file(relativePath: { eq: "magda-klag.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: TRACED_SVG
            tracedSVGOptions: {
              turnPolicy: TURNPOLICY_WHITE
              threshold: 120
              background: "#ffffff"
              color: "#f1f1f2"
            }
            layout: FULL_WIDTH
            formats: [AUTO, WEBP, AVIF]
          )
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
                <Image image={data.mainCoverPhoto} alt="Magda Klag" />
              </div>
            </div>
          </LayoutShift>
        </Wrapper>
      </div>
      <div className="w-full lg:transform lg:absolute lg:top-1/2 lg:-translate-y-1/2">
        <Wrapper notRelative>
          <h1 className="relative z-30 mt-4 sm:mt-2 sm:absolute top-0 lg:relative">
            <Grid>
              <Column
                className={
                  "col-span-9 " +
                  "sm:col-span-4 " +
                  "lg:col-span-7 " +
                  "xl:col-span-7 xl:col-start-2 xl:max-w-4xl"
                }
              >
                <Title />
              </Column>
            </Grid>
          </h1>
          {/* <div className="lg:absolute lg:bottom-0"> */}
          <LayoutShift compensateMargin>
            <div className="grid grid-cols-9 mt-2 sm:mt-8 sm:gap-x-15 xl:pb-16">
              <p
                className={
                  "col-span-9 " +
                  "sm:col-span-8 " +
                  "md:col-start-2 md:col-span-6 " +
                  "lg:col-start-2 lg:col-span-4 " +
                  "xl:col-start-3 xl:col-span-3"
                }
              >
                <Span className="text-xs sm:text-sm leading-normal md:leading-relaxed xl:leading-loose relative z-30">
                  {children}
                </Span>
              </p>
            </div>
          </LayoutShift>
        </Wrapper>
      </div>
      <div className="absolute bottom-0 w-full hidden sm:block">
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
