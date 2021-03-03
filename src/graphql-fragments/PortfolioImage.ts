import { graphql } from "gatsby"

export const PortfolioImage = graphql`
  fragment PortfolioImage on File {
    childImageSharp {
      gatsbyImageData(
        width: 700
        placeholder: DOMINANT_COLOR
        layout: CONSTRAINED
        formats: [AUTO, WEBP, AVIF]
        aspectRatio: 1
      )
    }
  }
`
