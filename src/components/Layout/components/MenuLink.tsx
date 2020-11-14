import React, { FC, ComponentProps } from "react"
import { Link } from "gatsby"
import "./MenuLink.css"

const MenuLink: FC<ComponentProps<typeof Link>> = ({ children, to }) => {
  const contents = (
    <>
      <span className="pb-1 px-1">{children}</span>
      <div
        aria-hidden
        className="absolute text-white bg-black h-full left-0 top-0"
      >
        <span className="px-1">{children}</span>
      </div>
    </>
  )

  return to.startsWith("#") ? ( // Anchor link
    <a href={to} className="relative menuLink inline-block">
      {contents}
    </a>
  ) : (
    <Link to={to} className="relative menuLink inline-block">
      {contents}
    </Link>
  )
}

export default MenuLink
