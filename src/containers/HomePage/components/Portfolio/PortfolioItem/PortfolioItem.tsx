import React, { FC, ReactNode } from "react"
import Img, { FluidObject } from "gatsby-image"

import OutlinedLink, {
  OutlinedLinkTarget,
} from "../../../../../components/OutlinedLink/OutlinedLink"
import "./PortfolioItem.css"

type PortfolioItemProps = {
  image: FluidObject
  link: string
  title: ReactNode
  description?: ReactNode
}

const PortfolioItem: FC<PortfolioItemProps> = ({
  title,
  link,
  image,
  description,
}) => {
  return (
    <OutlinedLink to={link} className="portfolio-item">
      <div className="relative grid grid-cols-2 gap-6 mx-auto">
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold uppercase">
            <OutlinedLinkTarget>{title}</OutlinedLinkTarget>
          </h3>
          {description}
        </div>
        <div>
          <Img fluid={image} />
        </div>
      </div>
    </OutlinedLink>
  )
}

export default PortfolioItem
