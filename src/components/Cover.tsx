import React from 'react';
import Img, { GatsbyImageProps } from "gatsby-image"

const Cover: React.FC<GatsbyImageProps> = ({ ...props }) => (
  <Img
    style={{ maxHeight: 'calc(88vh - 5rem)' }}
    imgStyle={{ objectFit: 'cover' }}
    className="w-full mb-12"
    {...props}
  />
)

export default Cover
