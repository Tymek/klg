import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Contact from "./components/Contact"
import "./HomePage.css"

type HomePageProps = {}

const HomePage: React.FC<HomePageProps> = () => {
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
    <>
      <section className="h-screen relative">
        <div className="flex flex-row relative">
          <div className="w-1/3 z-0 ml-auto mr-40">
            <Img
              fluid={data.mainCoverPhoto.childImageSharp.fluid}
              className=""
            />
          </div>
          <div className="lg:absolute xxl:w-3/4 flex justify-end mainHeading">
            <h1 className="max-w-4xl leading-none z-10">
              <span className="text-xl md:text-3xl uppercase font-bold">
                Zabawki / Ilustracja / Branding / Publikacja
              </span>
            </h1>
          </div>
        </div>
        <p className="text-xs sm:text-base leading-7 xl:leading-10 relative z-10 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>
      <Contact />
    </>
  )
}

export default HomePage
