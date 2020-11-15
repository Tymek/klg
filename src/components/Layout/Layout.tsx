import React, { FC } from "react"

import Header, { HeaderProps } from "./components/Header"
import "../../global/styles.css"
import "../../global/fonts.css"

export type LayoutProps = HeaderProps

const Layout: FC<LayoutProps> = ({ children, largeDecoration }) => (
  <>
    <Header largeDecoration={largeDecoration} />
    <main className="relative">{children}</main>
  </>
)

export default Layout
