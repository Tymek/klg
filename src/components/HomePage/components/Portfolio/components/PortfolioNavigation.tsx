import React, { Children, FC } from "react"
// import "./PortfolioNavigation.css"

const PortfolioNavigation: FC = ({ children }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <nav
        className="sticky top-0 left-0 uppercase z-30"
        style={{
          height: "75vh",
          width: "1.5em",
        }}
      >
        <ul
          className="absolute"
          style={{
            transformOrigin: "left top",
            transform: "rotate(270deg) translate(-100%, 0%)",
            top: "2vh",
            fontSize: "calc(min(2.8571429vh, 1.25rem)",
          }}
        >
          {Children.toArray(children)
            .reverse() // TODO: reverse with flex & space between
            .map(item => (
              <li className="inline mr-5">{item}</li>
            ))}
        </ul>
      </nav>
    </div>
  )
}

export default PortfolioNavigation
