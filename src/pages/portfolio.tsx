import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO />
    Projekty:
    <ul>
      <li>
        <Link className="underline" to="/portfolio/milin/">Milin</Link>
      </li>
      <li>
        <Link className="underline" to="/portfolio/zakladki/">Zakładki</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
