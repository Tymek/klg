import React from "react"

const Wrapper: React.FC<{
  className?: string
  fullWidth?: boolean
}> = ({ children, fullWidth, ...props }) => (
  <div
    {...props}
    data-component="wrapper"
    className={`relative mx-auto max-w-7xl px-4 sm:px-6 md:px-10 xxl:px-4 ${
      props.className || ""
    }`}
  >
    {children}
  </div>
)

export default Wrapper
