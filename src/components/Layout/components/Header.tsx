import { Link } from "gatsby"
import React from "react"
import Container from "../../Container"
import MenuLink from "./MenuLink"

const Header: React.FC = () => (
  <>
    <div style={{
      width: 'calc(50% - 440px)',
      height: '95vh',
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: -2,
    }} className="bg-lightGray" />
    <Container>
      <header className="pt-12 pb-10">
        <div className="hd:w-3/4 z-1 relative">
          <nav className="flex text:md flex-wrap">
            <h1 className="lowercase font-bold text-lg">
              <Link to="/">
                Magda Klag
              </Link>
            </h1>
            <ul className="ml-auto text-sm grid gap-x-5 grid-flow-col hd:mr-8">
              <li><MenuLink className="menuLink" to="/#o-mnie">o mnie</MenuLink></li>
              <li><MenuLink className="menuLink" to="/#portfolio">portfolio</MenuLink></li>
              <li><MenuLink className="menuLink" to="/#kontakt">kontakt</MenuLink></li>
            </ul>
          </nav>
        </div>
      </header>
    </Container>
  </>
)

export default Header
