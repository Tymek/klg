import React, { FC } from "react"
import { GatsbyImage, GatsbyImageProps, getImage } from "gatsby-plugin-image"

export type ImageType = Parameters<typeof getImage>[0]

type ImageProps = Omit<GatsbyImageProps, "image"> & {
  image: ImageType
}

const Image: FC<ImageProps> = ({ ...props }) => {
  const image = getImage(props?.image)
  if (!image) return null
  return <GatsbyImage {...props} image={image} loading="eager" />
}

export default Image
