import React from "react"
import Wrapper from "../../../../components/Wrapper"
import RevealDetails from "./components/RevealDetails"

const Contact: React.FC = () => (
  <>
    <Wrapper>
      <section
        id="kontakt"
        style={{ paddingBottom: "256px" }}
        className="flex flex-col lg:flex-row-reverse"
      >
        <h2 className="mb-3 lg:mb-0 text-lg xl:text-xl uppercase font-bold max-w-3xl leading-none lg:w-1/3 text-right">
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
    <div
      style={{
        width: "67%",
        height: "256px",
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: -2,
      }}
      className="bg-lightGray"
    />
  </>
)

export default Contact
