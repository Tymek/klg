import React, { FC } from "react"

import Header, { HeaderProps } from "./components/Header"
import "./styles.css"
import "./fonts.css"

export type LayoutProps = HeaderProps

const Layout: FC<LayoutProps> = ({ children, largeDecoration }) => (
  <>
    <Header largeDecoration={largeDecoration} />
    <main className="relative">{children}</main>
  </>
)

export default Layout
