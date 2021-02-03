import React, { ComponentProps, FC, useState } from "react"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import SVGHoverText from "./SVGHoverText"
import Wrapper from "./Wrapper"
import routes from "./HomePage/Portfolio/routes.json"

type FooterProps = {
  className?: string
  nextLink?: boolean
}

const links = routes.map(({ link }) => `/portfolio/${link}/`)

const NextLink: FC<{ to: ComponentProps<typeof Link>["to"] }> = ({ to }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const open = () => {
    setIsOpen(true)
  }
  const close = () => {
    setIsOpen(false)
  }

  return (
    <Wrapper className="text-right uppercase text-xl sm:text-xxl lg:text-3xl mt-16 lg:mt-24 mb-8">
      <Link
        to={to}
        onMouseEnter={open}
        onFocus={open}
        onMouseLeave={close}
        onBlur={close}
        className="relative block sm:mr-32 md:mr-0 outline-none"
      >
        <SVGHoverText
          id={`svg-${to.replace(/[^\w]/g, "-")}`}
          isOpen={isOpen}
          alignRight
        >
          Następny
        </SVGHoverText>
      </Link>
    </Wrapper>
  )
}

const Footer: FC<FooterProps> = ({ nextLink, className }) => {
  const location = useLocation()
  const index = links.findIndex(route => route.includes(location.pathname))
  const nextLinkIndex = index >= 0 ? links[(index + 1) % links.length] : null

  return (
    <>
      {nextLink && nextLinkIndex !== null && <NextLink to={nextLinkIndex} />}
      <div
        style={{
          width: "66%",
          height: "256px",
          bottom: 0,
          left: 0,
          zIndex: -2,
        }}
        className={`bg-lightGray ${className}`}
      />
    </>
  )
}

export default Footer
