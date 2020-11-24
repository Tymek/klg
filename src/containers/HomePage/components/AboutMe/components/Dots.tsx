import React, { FC, useEffect, useRef } from "react"
import "./Dots.css"

type DotsProps = {}

const locations = [
  { left: "2vw", top: "6vh" },
  { left: "13vw", top: "0vh" },
  { left: "22vw", top: "9vh" },
  { left: "35vw", top: "5vh" },
  { right: "5vw", top: "7vh" },
  { right: "10vw", top: "17vh" },
  { left: "10vw", top: "18vh" },
  { left: "9vw", top: "40vh" },
  { right: "4vw", top: "50vh" },
]

const Dots: FC<DotsProps> = () => {
  const ref = useRef<Array<HTMLDivElement | null>>([])
  useEffect(() => {
    let [x, y] = [0, 0]

    const updateRotation = () => {
      ref.current.forEach((element, index) => {
        if (!element) return

        const dot = element as HTMLDivElement

        const { top, width, height, left } = dot.getBoundingClientRect()
        const dX = x - left - width / 2
        const dY = y - top - height / 2

        const radians = Math.atan2(dY, dX)

        const angle = (radians * 180) / Math.PI

        dot.style.transform = `rotate(${(index % 2 ? -2 : 3) * angle - 90}deg)`
      })
    }

    const mouseMove = (e: MouseEvent) => {
      x = e.pageX
      y = e.pageY

      updateRotation()
    }

    document.addEventListener("mousemove", mouseMove)
    document.addEventListener("scroll", updateRotation)
    return () => {
      window.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("scroll", updateRotation)
    }
  }, [ref.current])

  return (
    <div>
      {locations.map((style, index) => (
        <div key={index} className="absolute z-20 m-4" style={style}>
          <div
            ref={element => (ref.current[index] = element)}
            className="interactive-dot"
          />
        </div>
      ))}
    </div>
  )
}

export default Dots
