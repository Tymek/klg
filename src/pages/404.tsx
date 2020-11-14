import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import Wrapper from "../components/Wrapper"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper className="py-12">
      <h1 className="text-xxl font-bold">
        <span className="text-fuchsia">404</span> Nie Znalezionko!
      </h1>
      <p className="text-right">
        Bardzo mi przykro, ale nie ma tu niczego ciekawego&hellip;
      </p>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
