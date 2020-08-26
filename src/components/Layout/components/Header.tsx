import { Link } from "gatsby"
import React from "react"
import Container from "../../Container"

const Header: React.FC = () => (
  <header className="bg-white pt-8 pb-6">
    <Container>
      <nav className="flex text:lg sm:text-xl flex-wrap">
        <h1 className="uppercase text-gray-600">
          <Link to="/">
            Magda <span className="text-black" aria-hidden="true">&#x2981; </span>Klag
          </Link>
        </h1>
        <ul className="ml-auto grid gap-x-6 grid-flow-col text-gray-600">
          <li><Link className="hover:underline" to="/">o!mnie</Link></li>
          <li><Link className="hover:underline" to="/#portfolio">portfolio</Link></li>
          <li><Link className="hover:underline" to="/#kontakt">kontakt</Link></li>
        </ul>
      </nav>
    </Container>
  </header>
)

export default Header
