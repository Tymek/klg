import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
// import Wrapper from "../components/Wrapper"
import HomePage from "../components/HomePage"
import SimulationCanvas from "../components/SimulationCanvas"

const IndexPage = () => (
  <>
    <SEO />
    <SimulationCanvas />
    <Layout largeDecoration>
      <HomePage />
    </Layout>
  </>
)

export default IndexPage
