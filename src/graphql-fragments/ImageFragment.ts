import { graphql } from "gatsby"

export const ImageFragment = graphql`
  fragment ImageFragment on File {
    childImageSharp {
      fluid(
        maxWidth: 1648,
        traceSVG: { background: "transparent", color: "#f1f1f1" }
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`
