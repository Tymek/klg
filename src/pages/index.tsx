import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Wrapper from "../components/Wrapper"
import HomePage from "../containers/HomePage"

const IndexPage = () => (
  <>
    <SEO />
    <Layout largeDecoration>
      <Wrapper>
        <HomePage />
      </Wrapper>
    </Layout>
  </>
)

export default IndexPage
