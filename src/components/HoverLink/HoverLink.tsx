import React, { FC, ComponentProps, useRef, useMemo, MouseEvent } from "react"
import { Link } from "gatsby"
import "./HoverLink.css"

type HoverLinkProps = Pick<
  ComponentProps<typeof Link>,
  "children" | "to" | "className"
> & {
  active?: boolean
}

const HoverLink: FC<HoverLinkProps> = ({ children, to, className, active }) => {
  const contents = useMemo(
    () => (
      <>
        <span className="pb-1 px-1">{children}</span>
        <div aria-hidden className="absolute text-white h-full left-0 top-0">
          <span className="px-1">{children}</span>
        </div>
      </>
    ),
    [children]
  )

  // Unfortunate workaround for Gatsby - Smooth scroll on anchor links
  const onAnchorClick = (event: MouseEvent) => {
    event.preventDefault()

    const element = document.querySelector(to)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }

    if (history.pushState) {
      history.pushState(null, document.title, to)
    } else {
      location.hash = to
    }
  }

  const classList = `relative hoverLink inline-block ${
    active ? "active" : ""
  } ${className ? className : ""}`.trim()

  return to.startsWith("#") ? ( // Anchor link
    <a href={to} className={classList} onClick={onAnchorClick}>
      {contents}
    </a>
  ) : (
    <Link to={to} className={classList}>
      {contents}
    </Link>
  )
}

export default HoverLink
