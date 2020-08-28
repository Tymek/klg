import React from "react"

import Header from "./components/Header"
import "./styles.css"

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <main className="bg-gray-200 text-gray-600">{children}</main>
  </>
)
export default Layout
