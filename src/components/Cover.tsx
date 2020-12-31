import React, { FC } from "react"
import { FluidObject } from "gatsby-image"

import Grid, { Column } from "./Grid"
import Image from "./Image"

type CoverProps = {
  image: FluidObject
  className?: string
}

const Cover: FC<CoverProps> = ({ image, className }) => (
  <Grid className={className}>
    <Column className="lg:col-start-2 lg:col-span-7">
      <Image fluid={image} className="-mx-4 xs:-mx-6 md:mx-0 mt-4" />
    </Column>
  </Grid>
)

export default Cover
