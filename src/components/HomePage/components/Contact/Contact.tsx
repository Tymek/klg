import React from "react"
import Wrapper from "../../../Wrapper"
import Footer from "../../../Footer"
import RevealDetails from "./components/RevealDetails"

const Contact: React.FC = () => (
  <>
    <Wrapper className="pt-48">
      <section
        id="kontakt"
        style={{ paddingBottom: "256px" }}
        className="flex flex-col lg:flex-row-reverse"
      >
        <h2 className="mb-3 lg:mb-0 text-lg xl:text-xxl uppercase font-bold max-w-3xl leading-none lg:w-1/3 text-right">
          Poznajmy się
        </h2>
        <div className="pb-12 text-md lg:text-lg text-right flex flex-col items-end">
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
        </div>
      </section>
    </Wrapper>
    <Footer className="absolute" />
  </>
)

export default Contact
