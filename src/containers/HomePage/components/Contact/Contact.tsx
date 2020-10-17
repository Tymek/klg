import React from "react"
import RevealDetails from "./components/RevealDetails"

const Contact: React.FC = () => (
  <>
    <section
      id="kontakt"
      style={{ paddingBottom: "256px" }}
      className="flex flex-row-reverse"
    >
      <h2 className="text-xl uppercase font-bold max-w-3xl leading-none w-1/3 text-right">
        Poznajmy się
      </h2>
      <div className="pb-12 text-lg text-right flex flex-col items-end">
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
