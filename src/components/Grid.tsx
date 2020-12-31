import React, { FC } from "react"

type GridProps = {
  className?: string
  span?: number
}

const Grid: FC<GridProps> = ({ children, className }) => (
  <div
    className={`grid grid-cols-9 sm:gap-x-15${
      className ? ` ${className}` : ""
    }`}
  >
    {children}
  </div>
)

export const Column: FC<GridProps> = ({ children, className }) => (
  <div className={`col-span-9${className ? ` ${className}` : ""}`}>
    {children}
  </div>
)

export default Grid
