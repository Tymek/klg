import React, { FC } from "react"

type FooterProps = {
  className?: string
}

const Footer: FC<FooterProps> = ({ className }) => (
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
)

export default Footer
