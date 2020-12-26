import React, { FC } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Wrapper from "../../Wrapper"
import { Span } from "../../Typo"
import Image from "../../Image"
import "./AboutMe.css"

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
    <Wrapper notRelative>
      <section id="o-mnie" className="about-me relative">
        <div className="flex flex-col lg:flex-row relative">
          <div className="ml-10 -mr-4 sm:ml-auto sm:mr-6 md:mr-0 lg:ml-auto xl:mr-40 w-auto sm:w-2/3 lg:w-1/2 xl:w-1/3 z-0">
            <Image
              fluid={{
                ...data.mainCoverPhoto.childImageSharp.fluid,
                backgroundColor: "#f1f1f2",
              }}
            />
          </div>
          <div className="-mt-24 md:mt-0 mb-6 sm:mb-0 sm:pr-24 sm:absolute sm:bottom-1/3 md:bottom-1/3 xl:bottom-1/2 xxl:w-3/4 flex justify-end">
            <h1 className="max-w-4xl leading-none z-30 relative">
              <span className="text-xl sm:text-xxl md:text-3xl uppercase font-bold">
                Zabawki / Ilustracja / Branding / Publikacja
              </span>
            </h1>
          </div>
        </div>
        <p className="relative z-30 xxl:ml-48 max-w-lg sm:mt-8 lg:mt-12 xl:-mt-48 xxl:-mt-56">
          <Span className="text-xs sm:text-sm md:text-base leading-7 xl:leading-10">
            Tutaj powinien znaleźć się krótki opis na mój temat, ale jeszcze go
            nie zredagowałam. Ta strona nie jest skończona. Możesz oczekiwać
            ostatecznej wersji przed końcem roku.
          </Span>
        </p>
      </section>
    </Wrapper>
  )
}

export default AboutMe
