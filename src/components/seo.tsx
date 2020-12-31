/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export type MetaItem = {
  name: string
  content: string
}

export type SEOProps = {
  lang?: string
  title?: string
  description?: string
  url?: string
  author?: string
  keywords?: string[]
  meta?: MetaItem[]
  image?: {
    src: string
    width: number
    height: number
  }
}

const SEO: React.FC<SEOProps> = ({ description, lang, meta, title, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author
            creator
            publisher
            repository
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaImage =
    image && image.src
      ? [
          {
            property: "og:image",
            content: `${site.siteMetadata.siteUrl}${image.src}`,
          },
          {
            property: "og:image:width",
            content: image.width,
          },
          {
            property: "og:image:height",
            content: image.height,
          },
          {
            name: "twitter:card",
            content: "summary_large_image",
          },
        ]
      : [
          {
            name: "twitter:card",
            content: "summary",
          },
        ]

  return (
    <Helmet
      htmlAttributes={{
        lang: lang || `pl`,
      }}
      title={title || `Magda Klag`}
      titleTemplate={title ? `%s | ${site.siteMetadata.title}` : `%s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `designer`,
          content: site.siteMetadata.author,
        },
        {
          name: `creator`,
          content: site.siteMetadata.creator,
        },
        {
          name: `publisher`,
          content: site.siteMetadata.publisher,
        },
        {
          name: `repository`,
          content: site.siteMetadata.repository,
        },
      ]
        .concat(metaImage)
        .concat(meta || [])}
    />
  )
}

export default SEO
