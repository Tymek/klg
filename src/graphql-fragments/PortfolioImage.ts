import { graphql } from "gatsby"

export const PortfolioImage = graphql`
  fragment PortfolioImage on File {
    childImageSharp {
      fluid(
        maxWidth: 700,
        traceSVG: { background: "transparent", color: "#fff" }
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`
