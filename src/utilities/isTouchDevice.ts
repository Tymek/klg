import { useEffect, useState } from "react"

/**
 * Source: https://git.io/JL1Nm
 */
const isTouchDevice = () => {
  const extendedWindow = window as Window & {
    DocumentTouch?: any
  }

  return (
    !!(
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        (extendedWindow.DocumentTouch &&
          typeof document !== "undefined" &&
          document instanceof extendedWindow.DocumentTouch))
    ) ||
    !!(
      typeof navigator !== "undefined" &&
      (navigator.maxTouchPoints || navigator.msMaxTouchPoints)
    )
  )
}

export const useIsTouchDevice = () => {
  const [state, setState] = useState<boolean>()

  useEffect(() => {
    setState(isTouchDevice())
  })

  return state
}

export default isTouchDevice
