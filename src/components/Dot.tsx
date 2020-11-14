import React, { FC, HTMLProps } from "react"

const Dot: FC<HTMLProps<HTMLSpanElement>> = ({ ...props }) => (
  <span aria-label=", " {...props}>
    <span aria-hidden="true"> &#x2981; </span>
  </span>
)

export default Dot
