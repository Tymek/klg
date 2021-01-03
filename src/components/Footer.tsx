import React, { ComponentProps, FC, useState } from "react"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import SVGHoverText from "./SVGHoverText"
import Wrapper from "./Wrapper"

type FooterProps = {
  className?: string
  nextLink?: boolean
}

const routes = [
  "/portfolio/przeplotki/",
  "/portfolio/wiersze-dla-dzieci/",
  "/portfolio/modulowe-domki-dla-lalek/",
  "/portfolio/kartki/pocztowki/",
  "/portfolio/festiwal-kolorow/",
  "/portfolio/milin/",
  "/portfolio/kartki/urodzinowe/",
  "/portfolio/tabliczki-kredowe/",
  "/portfolio/zakladki/",
]

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

const Footer: FC<FooterProps> = ({ className }) => {
  const location = useLocation()
  const index = routes.findIndex(route => route === location.pathname)
  const nextLink = index >= 0 ? routes[(index + 1) % routes.length] : null

  return (
    <>
      {nextLink && <NextLink to={nextLink} />}
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
