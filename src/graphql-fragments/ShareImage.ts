import { graphql } from "gatsby"

export const ShareImage = graphql`
  fragment ShareImage on File {
    sharp: childImageSharp {
      shareImage: resize(width: 1200, toFormat: JPG) {
        src
        width
        height
      }
    }
  }
`
