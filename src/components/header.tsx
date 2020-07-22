import { Link } from "gatsby"
import React from "react"

export type HeaderProps = {
  siteTitle?: string,
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header
    className="mb-6"
    style={{
      background: `gray`,
    }}
  >
    <div
      className="mx-auto px-4 py-6 max-w-5xl"
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle || ''}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
