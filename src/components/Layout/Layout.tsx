import React from "react"

import Header from "./components/Header"
import "./styles.css"

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

export default Layout
