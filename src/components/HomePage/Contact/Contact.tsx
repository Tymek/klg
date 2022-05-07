import React, { FC, ReactNode } from "react"
import Wrapper from "../../Wrapper"
import Footer from "../../Footer"
import RevealDetails from "./components/RevealDetails"
import loadable from "@loadable/component"

const BehanceIcon = loadable(() => import("./components/Behance"))
const InstagramIcon = loadable(() => import("./components/Instagram"))

const IconLink: FC<{ href: string; children: ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 block"
  >
    {children}
  </a>
)

const Contact: FC = () => (
  <>
    <Wrapper className="pt-48">
      <section
        id="kontakt"
        tabIndex={-1}
        style={{ paddingBottom: "256px" }}
        className="flex flex-col lg:flex-row-reverse outline-none"
      >
        <h2 className="mb-3 lg:mb-0 text-lg xl:text-xxl uppercase font-bold max-w-3xl leading-none lg:w-1/3 text-right">
          Poznajmy się
        </h2>
        <div className="pb-12 text-base lg:text-lg text-right flex flex-col items-end">
          <div>
            <RevealDetails file="contact" item="email">
              email
            </RevealDetails>
          </div>
          <div>
            <RevealDetails file="contact" item="phone">
              telefon
            </RevealDetails>
          </div>
          <div>
            <IconLink href="//www.behance.net/magdaklag230c7">
              <BehanceIcon />
            </IconLink>
            <IconLink href="//www.instagram.com/magda_klag/">
              <InstagramIcon />
            </IconLink>
          </div>
        </div>
      </section>
    </Wrapper>
    <Footer className="absolute" />
  </>
)

export default Contact
