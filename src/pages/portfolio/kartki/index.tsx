import React, { useEffect } from "react"
import { Link, navigate } from "gatsby"

export default () => {
  useEffect(() => {
    navigate("/?kategoria=kartki#portfolio")
  }, [])

  return (
    <Link to="/?kategoria=kartki#portfolio">/?kategoria=kartki#portfolio</Link>
  )
}
