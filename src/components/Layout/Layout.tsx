import React from "react"

import Header from "./components/Header"
import "./styles.css"

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <main className="px-4 sm:px-6">{children}</main>
  </>
)

export default Layout
