import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Wrapper from "../../components/Wrapper"
import Contact from "./components/Contact"

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
      <section className="h-screen">
        <h1 className="text-lg lg:text-xl uppercase font-bold max-w-3xl leading-none">
          Zabawki / Ilustracja / Branding / Publikacja
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Img
          fluid={data.mainCoverPhoto.childImageSharp.fluid}
          className="w-64"
        />
      </section>
      <Contact />
    </>
  )
}

export default HomePage
