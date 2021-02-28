import React, { FC } from "react"

const Title: FC = () => (
  <span className="leading-tight text-xl sm:text-xxl xl:text-xxl xxl:text-3xl font-bold tracking-wider">
    <span className="inline-flex flex-wrap">
      <span className="order-1 md:order-1 mr-8">ilustracja</span>
      <span className="order-2 md:order-1 mr-8">
        gra<span className="tracking-normal">fi</span>ka
      </span>
      <span className="order-1 md:order-1 mr-8">wzornictwo</span>
      <span className="order-1 md:order-1 mr-8">publikacja</span>
    </span>
  </span>
)

export default Title
