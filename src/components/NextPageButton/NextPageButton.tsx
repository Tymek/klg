import React, { FC } from "react"
import "./NextPageButton.css"

type NextPageButtonProps = {}

const NextPageButton: FC<NextPageButtonProps> = () => (
  <button
    type="button"
    className="next-page-button uppercase text-3xl font-bold text-white"
  >
    Następny
  </button>
)

export default NextPageButton
