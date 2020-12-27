import React, { FC, ReactNode, useState } from "react"
import { Link } from "gatsby"
import { FluidObject } from "gatsby-image"
import SVGHoverText from "../../../../SVGHoverText"
import Image from "../../../../Image"

export type PortfolioItemProps = {
  image: FluidObject
  link: string
  title: string
  tags?: string[]
  description?: ReactNode
  className?: string
}

const PortfolioItem: FC<PortfolioItemProps> = ({
  title,
  link,
  image,
  description,
  className,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const open = () => {
    setIsOpen(true)
  }
  const close = () => {
    setIsOpen(false)
  }

  return (
    <li className={className}>
      <Link
        to={link}
        onMouseEnter={open}
        onFocus={open}
        onMouseLeave={close}
        onBlur={close}
        className="relative block sm:mr-32 md:mr-0"
      >
        <div className="relative flex flex-col-reverse md:grid md:grid-cols-8 gap-x-15 gap-y-6 mx-auto">
          <div className="flex flex-col justify-center md:col-span-4">
            <div className="font-bold uppercase text-xl xl:text-xxl">
              <SVGHoverText
                id={`svg-${link.replace(/[^\w]/g, "-")}`}
                isOpen={isOpen}
              >
                {title}
              </SVGHoverText>
            </div>
            {description}
          </div>
          <div className="md:col-span-4 lg:col-span-3">
            <Image fluid={image} />
          </div>
        </div>
      </Link>
    </li>
  )
}

export default PortfolioItem
