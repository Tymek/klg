import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO />
    Projekty:
    <ul>
      <li>
        <Link to="/milin/">Milin</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
