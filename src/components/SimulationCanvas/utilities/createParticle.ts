import {
  Vector,
  vectorAdd,
  vectorMultiply,
  vectorSubstract,
} from "./vectorMath"

const settings = {
  size: 4,
  mass: 20,
  stiffness: 100,
  dumping: 150,
  charge: 1000,
  chargeLimit: 750,
  time: 100,
}

const createParticle = (
  ctx: CanvasRenderingContext2D,
  anchor: Vector
): {
  onUpdate: (delta?: number) => void
  onDraw: (interp?: number) => void
  onCleanup: () => void
} => {
  const { left, top } = ctx.canvas.getBoundingClientRect()
  let prevPosition: Vector = anchor
  let position: Vector = prevPosition
  let velocity: Vector = [0, 0]
  let forces: Array<Vector> = []
  let cursorX: number
  let cursorY: number

  const updateCursorPosition = (e: MouseEvent) => {
    cursorX = e.pageX - left
    cursorY = e.pageY - top
  }
  document.addEventListener("mousemove", updateCursorPosition)

  const drawCircle = (x: number, y: number, radius: number) => {
    ctx.beginPath()
    ctx.fillStyle = "#f12185"
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
    ctx.fill()
    ctx.closePath()
  }

  const onUpdate = (delta?: number) => {
    // constants
    const {
      mass,
      charge: chargeMagnitude,
      chargeLimit,
      dumping,
      time,
      stiffness: k,
    } = settings
    const charge = Math.pow(chargeMagnitude, 2)

    // spring
    const displacement = vectorSubstract(position, anchor)
    const springForce: Vector = vectorMultiply(displacement, -k) // Hooke's Law
    const dumpingForce = vectorMultiply(velocity, -dumping)

    // charge
    const distance = vectorSubstract([cursorX, cursorY], position)
    let r = Math.sqrt(Math.pow(distance[0], 2) + Math.pow(distance[1], 2))
    if (r < 1) {
      r = 0
    }
    const theta = Math.atan2(distance[0], distance[1]) || 0
    const attraction =
      charge / (r < chargeLimit ? chargeLimit : Math.pow(r, 1.1)) || 0
    const chargeForce: Vector = [
      attraction * Math.sin(theta),
      attraction * Math.cos(theta),
    ]

    forces = [springForce, dumpingForce, chargeForce]
    const force = forces.reduce(vectorAdd, [0, 0]) as Vector
    const acceleration = vectorMultiply(force, 1 / mass)
    prevPosition = position
    velocity = vectorAdd(velocity, vectorMultiply(acceleration, 1 / time))
    position = vectorAdd(
      position,
      vectorMultiply(velocity, (delta !== undefined ? delta : 1) / time)
    )
  }

  const onDraw = (interp?: number) => {
    const { size } = settings
    const progress = interp !== undefined ? interp : 1
    const x = prevPosition[0] + (position[0] - prevPosition[0]) * progress
    const y = prevPosition[1] + (position[1] - prevPosition[1]) * progress
    drawCircle(x, y, size)
  }

  return {
    onUpdate,
    onDraw,
    onCleanup: () => {
      document.removeEventListener("mousemove", updateCursorPosition)
    },
  }
}

export default createParticle
