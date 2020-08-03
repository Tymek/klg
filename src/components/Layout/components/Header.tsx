import { Link } from "gatsby"
import React from "react"
import Container from "../../Container"

const Header: React.FC = () => (
  <header>
    <Container>
      <nav className="flex text:lg sm:text-xl font-bold flex-wrap">
        <h1 className="font-sans">
          <Link to="/">
            Magda &middot; Klag
          </Link>
        </h1>
        <ul className="ml-auto grid col-gap-2 grid-flow-col">
          <li><Link to="/">o!mnie</Link></li>
          <span className="select-none">&ndash;</span>
          <li><Link to="/#portfolio">portfolio</Link></li>
          <span className="select-none">&ndash;</span>
          <li><Link to="/#kontakt">kontakt</Link></li>
        </ul>
      </nav>
    </Container>
  </header>
)

export default Header
