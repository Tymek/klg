import React, { FC, ReactNode } from "react"

import Header, { HeaderProps } from "./components/Header"
import "../../global/styles.css"
import "../../global/fonts.css"
import Decoration from "./components/Decoration"

export type LayoutProps = HeaderProps & {
  children: ReactNode
  nonRelative?: boolean
  heroContent?: ReactNode
}

const Layout: FC<LayoutProps> = ({
  children,
  largeDecoration,
  nonRelative,
  heroContent,
}) =>
  heroContent ? (
    <>
      <div className="min-h-screen flex flex-col pb-8 mb-16">
        <div>
          <Header homePage />
        </div>
        <div className="my-auto relative">{heroContent}</div>
      </div>
      <div>{children}</div>
    </>
  ) : (
    <>
      <Header largeDecoration={largeDecoration} />
      <main className={`overflow-x-hidden ${nonRelative ? "" : " relative"}`}>
        {children}
      </main>
    </>
  )

export default Layout
