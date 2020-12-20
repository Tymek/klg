import React, { FC, ComponentProps } from "react"
import { Link } from "gatsby"
import "./HoverLink.css"

type HoverLinkProps = Pick<ComponentProps<typeof Link>, "children" | "to">

const HoverLink: FC<HoverLinkProps> = ({ children, to }) => {
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
    <a href={to} className="relative hoverLink inline-block">
      {contents}
    </a>
  ) : (
    <Link to={to} className="relative hoverLink inline-block">
      {contents}
    </Link>
  )
}

export default HoverLink
