/**
 * Adapted from "A Detailed Explanation of JavaScript Game Loops and Timing" by Isaac Sukin
 * @see http://isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing
 */

let lastFrameTimeMs = 0
let maxFPS = 60
let delta = 0
const timestep = 1000 / 60
let fps = 60
let framesThisSecond = 0
let lastFpsUpdate = 0
let running = false
let started = false
let frameID = 0

type Begin = (timestamp?: number, delta?: number) => void
type Update = (delta?: number) => void
type Draw = (interp?: number) => void
type End = (fps?: number) => void

const beginCallbacks: Record<string, Begin> = {}
const updateCallbacks: Record<string, Update> = {}
const drawCallbacks: Record<string, Draw> = {}
const beforeDrawCallbacks: Record<string, Draw> = {}
const endCallbacks: Record<string, End> = {}

export const add = (
  name: string,
  {
    onBegin,
    onUpdate,
    onBeforeDraw,
    onDraw,
    onEnd,
  }: {
    onBegin?: Begin
    onUpdate?: Update
    onDraw?: Draw
    onBeforeDraw?: Draw
    onEnd?: End
  },
): void => {
  if (onBegin) {
    if (beginCallbacks[name]) {
      throw new Error(`Begin callback already exists: ${name}`)
    }
    beginCallbacks[name] = onBegin
  }
  if (onUpdate) {
    if (updateCallbacks[name]) {
      throw new Error(`Update callback already exists: ${name}`)
    }
    updateCallbacks[name] = onUpdate
  }
  if (onBeforeDraw) {
    if (beforeDrawCallbacks[name]) {
      throw new Error(`Before draw callback already exists: ${name}`)
    }
    beforeDrawCallbacks[name] = onBeforeDraw
  }
  if (onDraw) {
    if (drawCallbacks[name]) {
      throw new Error(`Draw callback already exists: ${name}`)
    }
    drawCallbacks[name] = onDraw
  }
  if (onEnd) {
    if (endCallbacks[name]) {
      throw new Error(`End callback already exists: ${name}`)
    }
    endCallbacks[name] = onEnd
  }
}

export const remove = (name: string): void => {
  if (beginCallbacks[name]) {
    delete beginCallbacks[name]
  }
  if (updateCallbacks[name]) {
    delete updateCallbacks[name]
  }
  if (beforeDrawCallbacks[name]) {
    delete beforeDrawCallbacks[name]
  }
  if (drawCallbacks[name]) {
    delete drawCallbacks[name]
  }
  if (endCallbacks[name]) {
    delete endCallbacks[name]
  }
}

const update = (delta: number) => {
  Object.values(updateCallbacks).forEach((f) => f(delta))
  // boxLastPos = boxPos;
  // boxPos += boxVelocity * delta;
  // // Switch directions if we go too far
  // if (boxPos >= limit || boxPos <= 0) boxVelocity = -boxVelocity;
}

const draw = (interp: number) => {
  Object.values(drawCallbacks).forEach((f) => f(interp))
  // box.style.left = (boxLastPos + (boxPos - boxLastPos) * interp) + 'px';
}
const beforeDraw = (interp: number) => {
  Object.values(beforeDrawCallbacks).forEach((f) => f(interp))
  // box.style.left = (boxLastPos + (boxPos - boxLastPos) * interp) + 'px';
}

const panic = () => {
  delta = 0
}

const begin = (timestamp: number, delta: number) => {
  Object.values(beginCallbacks).forEach((f) => f(timestamp, delta))
}

const end = (fps: number) => {
  Object.values(endCallbacks).forEach((f) => f(fps))
}

export const pause = (): void => {
  running = false
  started = false
  cancelAnimationFrame(frameID)
}

export const play = (fpsLimit = 60): void => {
  maxFPS = fpsLimit
  if (!started) {
    started = true
    frameID = requestAnimationFrame((timestamp) => {
      draw(1)
      running = true
      lastFrameTimeMs = timestamp
      lastFpsUpdate = timestamp
      framesThisSecond = 0
      frameID = requestAnimationFrame(mainLoop)
    })
  }
}

const mainLoop = (timestamp: number) => {
  if (timestamp < lastFrameTimeMs + 1000 / maxFPS) {
    frameID = requestAnimationFrame(mainLoop)
    return
  }
  delta += timestamp - lastFrameTimeMs
  lastFrameTimeMs = timestamp

  begin(timestamp, delta)

  if (timestamp > lastFpsUpdate + 1000) {
    fps = 0.25 * framesThisSecond + 0.75 * fps

    lastFpsUpdate = timestamp
    framesThisSecond = 0
  }
  framesThisSecond++

  let numUpdateSteps = 0
  while (delta >= timestep) {
    update(timestep)
    delta -= timestep
    if (++numUpdateSteps >= 240) {
      panic()
      break
    }
  }

  beforeDraw(delta / timestep)
  draw(delta / timestep)

  end(fps)

  frameID = requestAnimationFrame(mainLoop)
}

const isRunning = (): boolean => running

const loop = {
  add,
  remove,
  play,
  pause,
  isRunning,
}

export default loop
