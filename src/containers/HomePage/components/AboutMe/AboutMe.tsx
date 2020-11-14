import React, { FC } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import "./AboutMe.css"

type AboutMeProps = {}

const AboutMe: FC<AboutMeProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      mainCoverPhoto: file(relativePath: { eq: "domek.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section id="o-mnie" className="about-me relative">
      <div className="flex flex-col lg:flex-row relative">
        <div className="ml-10 -mr-4 sm:ml-auto sm:mr-6 md:mr-0 lg:ml-auto xl:mr-40 w-auto sm:w-1/2 xl:w-1/3 z-0">
          <Img fluid={data.mainCoverPhoto.childImageSharp.fluid} className="" />
        </div>
        <div className="-mt-24 md:mt-0 mb-6 md:absolute xxl:w-3/4 flex justify-end">
          <h1 className="max-w-4xl leading-none z-10">
            <span className="text-xl md:text-3xl uppercase font-bold">
              Zabawki / Ilustracja / Branding / Publikacja
            </span>
          </h1>
        </div>
      </div>
      <p className="text-xs sm:text-base leading-7 xl:leading-10 relative z-10 max-w-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </section>
  )
}

export default AboutMe
