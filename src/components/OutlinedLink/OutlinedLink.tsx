import { Link } from "gatsby"
import React, { ComponentProps, FC, ReactNode } from "react"
import "./OutlinedLink.css"

type OutlinedLinkProps = Pick<
  ComponentProps<typeof Link>,
  "to" | "className" | "children"
>

const OutlinedLink: FC<OutlinedLinkProps> = ({
  children,
  to,
  className,
  ...props
}) => (
  <Link to={to} {...props} className={`outlined-link ${className || ""}`}>
    {typeof children === "string" ? (
      <OutlinedLinkTarget>{children}</OutlinedLinkTarget>
    ) : (
      children
    )}
  </Link>
)

export const OutlinedLinkTarget: FC<{
  children: ReactNode
  className?: string
}> = ({ children, className }) => (
  <span className={`outlined-link__target ${className || ""}`}>
    <span className="outlined-link__target__text">{children}</span>
    <div aria-hidden className="outlined-link__target--plain">
      <div>{children}</div>
    </div>
    <div aria-hidden className="outlined-link__target--hover">
      {children}
    </div>
  </span>
)

export default OutlinedLink
