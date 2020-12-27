import React, { FC } from "react"
import HoverLink from "../../../HoverLink"

type PortfolioNavigationProps = {
  tags: string[]
  active?: string
}

const PortfolioNavigation: FC<PortfolioNavigationProps> = ({
  active,
  tags,
}) => (
  <div className="absolute top-0 left-0 w-full h-full">
    <nav className="sticky top-0 left-0 uppercase z-30 w-6 h-screen">
      <ul
        className="absolute flex flex-row-reverse justify-start"
        style={{
          transformOrigin: "left top",
          transform: "rotate(270deg) translate(-100%, 0%)",
          top: "2vh",
          width: "100vh",
          fontSize: "calc(min(2.8571429vh, 1.25rem)",
        }}
        data-test="portfolio-navigation"
      >
        {tags.map(tag => (
          <li
            className="inline mr-5"
            style={{
              marginRight: "calc(min(1.5rem, 2vh))",
            }}
          >
            <div>
              <HoverLink
                active={active === tag}
                to={
                  active === tag
                    ? "/#portfolio"
                    : `/?kategoria=${tag}#portfolio`
                }
              >
                {tag}
              </HoverLink>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  </div>
)

export default PortfolioNavigation
