import React, { FC, useEffect, useState } from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SimulationCanvas from "../components/SimulationCanvas"
import { graphql, PageProps, useStaticQuery } from "gatsby"
import AboutMe from "../components/HomePage/AboutMe"
import Portfolio from "../components/HomePage/Portfolio"
import Contact from "../components/HomePage/Contact"

const tagKey = "kategoria"

const IndexPage: FC<PageProps> = ({ location }) => {
  const [tag, setTag] = useState<string>()
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

  useEffect(() => {
    // Not working with SSG - Gatsby bug -- see https://www.joshwcomeau.com/react/the-perils-of-rehydration/
    if (typeof window === "undefined") return

    const params = new URLSearchParams(location?.search)
    setTag(params?.get(tagKey) || undefined)
  })

  const description =
    "Zajmuję się projektowaniem wzorniczym, ilustruję, tworzę grafikę na potrzeby identyfikacji wizualnej marek " +
    "oraz projektuję zabawki – przy czym bawię się równie dobrze, jak odbiorcy. Jestem miłośniczką oszczędnej, " +
    "czystej formy, poprawnej typografi i swobodnej dziecięcej twórczości."

  return (
    <>
      <SEO
        image={data.mainCoverPhoto.childImageSharp.fluid}
        description={description}
      />
      <SimulationCanvas />
      <Layout largeDecoration nonRelative>
        <AboutMe>{description}</AboutMe>
        <Portfolio tag={tag} />
        <Contact />
      </Layout>
    </>
  )
}
export default IndexPage
