import { Link } from "gatsby"
import React, { ComponentProps, FC, forwardRef } from "react"
import "./OutlinedLink.css"

type OutlinedLinkProps = Omit<ComponentProps<typeof Link>, "ref">

const OutlinedLink: FC<OutlinedLinkProps> = ({
  children,
  to,
  className,
  ...props
}) => (
  <Link
    to={to}
    {...props}
    className={`outlined-link uppercase text-3xl font-bold text-white ${
      className || ""
    }`}
  >
    {children}
    {/* TODO: Animation */}
  </Link>
)

export default OutlinedLink
