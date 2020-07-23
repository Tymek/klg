/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./components/Header"
import "./styles.css"

const Layout: React.FC<{ background?: string }> = ({ children, background }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        className="mx-auto px-4 py-6 max-w-5xl"
      >
        <main className="bg-gray-200" style={background ? { background } : {}}>{children}</main>
      </div>
    </>
  )
}

export default Layout
