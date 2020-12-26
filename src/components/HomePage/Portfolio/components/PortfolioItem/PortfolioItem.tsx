import React, { FC, ReactNode, useState } from "react"
import { Link } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import SVGHoverText from "../../../../SVGHoverText"

import "./PortfolioItem.css"

export type PortfolioItemProps = {
  image: FluidObject
  link: string
  title: string
  tags?: string[]
  description?: ReactNode
}

const PortfolioItem: FC<PortfolioItemProps> = ({
  title,
  link,
  image,
  description,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const open = () => {
    setIsOpen(true)
  }
  const close = () => {
    setIsOpen(false)
  }

  return (
    <li>
      <Link
        to={link}
        onMouseEnter={open}
        onFocus={open}
        onMouseLeave={close}
        onBlur={close}
        className="portfolio-item relative block"
      >
        <div className="relative flex flex-col-reverse md:grid md:grid-cols-2 gap-6 mx-auto">
          <div className="flex flex-col justify-center">
            <div className="font-bold uppercase text-xl xl:text-3xl">
              <SVGHoverText
                id={`svg-${link.replace(/[^\w]/g, "-")}`}
                isOpen={isOpen}
              >
                {title}
              </SVGHoverText>
            </div>
            {description}
          </div>
          <div>
            <Img fluid={image} />
          </div>
        </div>
      </Link>
    </li>
  )
}

export default PortfolioItem
