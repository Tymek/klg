import React, { FC } from "react"

import Grid, { Column } from "./Grid"
import Image, { ImageType } from "./Image"

type CoverProps = {
  image: ImageType
  className?: string
}

const Cover: FC<CoverProps> = ({ image, className }) => (
  <Grid className={className}>
    <Column className="lg:col-start-2 lg:col-span-7">
      <Image image={image} className="-mx-4 xs:-mx-6 md:mx-0 mt-4" alt="" />
    </Column>
  </Grid>
)

export default Cover
