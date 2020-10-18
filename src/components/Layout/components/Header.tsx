import { Link } from "gatsby"
import React from "react"
import Wrapper from "../../Wrapper"
import MenuLink from "./MenuLink"

const Header: React.FC = () => (
  <>
    <div
      style={{
        width: "calc(50% - 442px)",
        height: "95vh",
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: -2,
      }}
      className="bg-lightGray hidden hd:block"
    />
    <div
      style={{
        width: "24.5%",
        height: "95vh",
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: -2,
      }}
      className="bg-lightGray block hd:hidden"
    />
    <Wrapper>
      <header className="pt-12 pb-10">
        <div className="md:w-3/4 z-1 relative">
          <nav className="flex text:md flex-wrap flex-col md:flex-row ml-8 md:ml-0">
            <h1 className="lowercase font-bold text-lg">
              <Link to="/">Magda Klag</Link>
            </h1>
            <ul className="mr-auto md:mr-0 md:ml-auto md:w-auto text-sm grid gap-x-3 grid-flow-col">
              <li>
                <MenuLink className="menuLink" to="/#o-mnie">
                  o mnie
                </MenuLink>
              </li>
              <li>
                <MenuLink className="menuLink" to="/#portfolio">
                  portfolio
                </MenuLink>
              </li>
              <li>
                <MenuLink className="menuLink" to="/#kontakt">
                  kontakt
                </MenuLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Wrapper>
  </>
)

export default Header
