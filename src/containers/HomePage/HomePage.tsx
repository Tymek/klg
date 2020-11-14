import React from "react"
import AboutMe from "./components/AboutMe"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import "./HomePage.css"

type HomePageProps = {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <AboutMe />
      <Portfolio />
      <Contact />
    </>
  )
}

export default HomePage
