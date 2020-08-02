import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Container from "../components/Container"

const IndexPage = () => (
  <Layout>
    <SEO />
    <section id="portfolio">
      <Container>
        <ul>
          <li>
            <Link className="underline" to="/portfolio/milin/">Milin</Link>
          </li>
          <li>
            <Link className="underline" to="/portfolio/zakladki/">Zakładki</Link>
          </li>
          <li>
            <Link className="underline" to="/portfolio/przeplotki/">Przeplotki</Link>
          </li>
        </ul>
      </Container>
    </section>
  </Layout>
)

export default IndexPage
