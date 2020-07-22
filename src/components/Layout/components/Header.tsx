import { Link } from "gatsby"
import React from "react"

export type HeaderProps = {
  siteTitle?: string,
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header>
    <div className="mx-auto px-4 py-6 max-w-5xl">
      {/* <h1 style={{ margin: 0 }}>
        <Link to="/">
          {siteTitle || ''}
        </Link>
      </h1> */}
      <nav className="flex text-xl font-bold">
        <ul className="ml-auto mr-4 grid col-gap-5 grid-flow-col">
          <li><Link to="/">o!mnie</Link></li>
          <li><Link to="/portfolio">portfolio</Link></li>
          <li>kontakt</li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
