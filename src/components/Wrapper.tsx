import React, { FC, ReactNode } from "react"

const Wrapper: FC<{
  children: ReactNode
  className?: string
  fullWidth?: boolean
  notRelative?: true
  customWidth?: string
}> = ({ children, fullWidth, notRelative, customWidth, ...props }) => (
  <div
    {...props}
    data-component="wrapper"
    className={`mx-auto px-4 sm:px-6 md:px-10 ${props.className || ""} ${
      notRelative ? "" : "relative"
    } ${customWidth || "max-w-8xl"}`}
  >
    {children}
  </div>
)

export default Wrapper
