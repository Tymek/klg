import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Nie znaleziono</h1>
    <p>Bardzo mi przykro, ale nie ma tu niczego ciekawego.</p>
  </Layout>
)

export default NotFoundPage
