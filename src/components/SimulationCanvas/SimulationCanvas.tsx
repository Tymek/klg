import React, { FC, useEffect, useRef } from "react"
import useWindowSize from "../../utilities/useWindowSize"
import "./SimulationCanvas.css"
import loop from "./utilities/loop"
import createParticle from "./utilities/createParticle"
import { Vector } from "./utilities/vectorMath"

const anchors = [
  [0.21, 0.17],
  [0.03, 0.28],
  [0.16, 0.47],
  [0.09, 0.77],
  [0.47, 0.22],
  [0.95, 0.25],
  [0.91, 0.48],
  [0.96, 0.86],
  [0.51, 0.61],
  [0.38, 0.91],
]

const clear = (ctx: CanvasRenderingContext2D) => () =>
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

const SimulationCanvas: FC = () => {
  const ref = useRef<HTMLCanvasElement>(null)
  const { width: windowWidth } = useWindowSize()

  useEffect(() => {
    if (!ref?.current) return

    const { width, height } = ref?.current?.getBoundingClientRect()
    const ctx = ref?.current?.getContext("2d")

    if (!ctx) return

    ctx.canvas.width = windowWidth || width
    ctx.canvas.height = height

    loop.add("clear", {
      onBeforeDraw: clear(ctx),
    })

    const particles = anchors.map((anchor, index) => {
      const position: Vector = [anchor[0] * width, anchor[1] * height]
      const { onUpdate, onDraw, onCleanup } = createParticle(ctx, position)
      loop.add(`particle-${index}`, {
        onUpdate,
        onDraw,
      })

      return onCleanup
    })

    loop.play()

    return () => {
      loop.pause()

      loop.remove("clear")
      particles.forEach((removeParticle, index) => {
        loop.remove(`particle-${index}`)
        removeParticle()
      })
    }
  }, [ref.current, windowWidth])

  return <canvas className="sumulationCanvas" ref={ref} />
}

export default SimulationCanvas
