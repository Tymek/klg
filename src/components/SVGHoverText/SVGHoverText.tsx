/// <reference types="resize-observer-browser" />
import React, {
  FC,
  Fragment,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import "./SVGHoverText.css"

const settings = {
  lineSpacing: 250,
  mass: 10,
  stiffness: 1.2,
  dumping: 0.5,
  restingVelocity: 0.05,
  delta: 0.025,
}

type SVGHoverTextProps = {
  id: string
  children: string
  isOpen?: boolean
  className?: string
}

/**
 * Example:
 * ``` ts
 * const SizedText = () => {
 *   const { width } = useWindowSize()
 *   const text = useMemo(() => {
 *     if (width) {
 *       if (width > 1000) {
 *         return "Modułowe domki dla lalek"
 *       }
 *     }
 *
 *     return "Modułowe\ndomki\ndla lalek"
 *   }, [width])
 *
 *   return (
 *     <SVGTextWithHover id="testId">{text}</SVGTextWithHover>
 *   )
 * }
 * ```
 */
const SVGHoverText: FC<SVGHoverTextProps> = ({ id, children, isOpen }) => {
  const lines = useMemo(() => children.split("\n"), [children])
  const refs = useRef<SVGTSpanElement[]>([])
  const [values, setValues] = useState<Array<number>>(lines.map(() => 0))
  const [sizes, setSizes] = useState<Array<number>>(values)
  const width = useMemo(
    () =>
      sizes.reduce((acc, curr) => acc + curr + settings.lineSpacing, 0) -
      settings.lineSpacing,
    [sizes]
  )
  const [position, setPosition] = useState<number>(0)
  const [velocity, setVelocity] = useState<number>(0)

  // Line sizes
  useEffect(() => {
    if (refs.current) {
      const resize = () => {
        setSizes(
          refs.current
            .map(ref => ref.getBoundingClientRect().width)
            .slice(0, lines.length)
        )
      }

      resize()
      const resizeObserver = new ResizeObserver(resize)

      refs.current.forEach(ref => {
        resizeObserver.observe(ref)
      })

      return () => {
        resizeObserver.disconnect()
      }
    }
  }, [refs.current, lines.length])

  // Animation
  useEffect(() => {
    let target = position

    setValues(
      sizes.reduce((acc, curr) => {
        const fill = Math.min(curr, target)
        const percentage = (100 * fill) / curr || 0
        target -= curr + settings.lineSpacing

        acc.push(percentage)
        return acc
      }, [] as number[])
    )
  }, [position, sizes])

  // Simulation
  useEffect(() => {
    let newVelocity = velocity
    let newPosition = position
    let requestId: number

    const update = () => {
      const { stiffness: k, dumping, mass, restingVelocity, delta } = settings
      const anchor = isOpen ? width : 0
      const tension = -k * (newPosition - anchor)
      const friction = -dumping * newVelocity
      const forces = tension + friction
      const acceleration = forces / (1 / (mass * lines.length))
      newVelocity = newVelocity + acceleration * delta
      newPosition = newPosition + newVelocity * delta

      setVelocity(newVelocity)
      setPosition(newPosition)

      if (Math.abs(newVelocity) > restingVelocity) {
        requestId = requestAnimationFrame(update)
      }
    }

    update()

    return () => {
      cancelAnimationFrame(requestId)
    }
  }, [isOpen])

  return (
    <svg className="text-3xl svgHover" height={`${lines.length}em`}>
      {lines.map((line, index) => {
        const name = `${id}-${index}`
        return (
          <Fragment key={line}>
            <defs>
              <text id={`${name}`} y="1em" className="svgHoverText">
                <tspan
                  y={`${index + 0.85}em`}
                  x="0"
                  ref={ref => {
                    if (ref) {
                      refs.current[index] = ref
                    }
                  }}
                >
                  {line}{" "}
                </tspan>
              </text>
              <clipPath id={`${name}-clip`}>
                {/* clip text with itself – inset stroke fix */}
                <use href={`#${name}`} />
              </clipPath>
              <linearGradient
                y1="0%"
                x1="0%"
                y2="0%"
                x2="100%"
                id={`${name}-gradient`}
              >
                <stop stopColor="white" offset="0%" />
                <stop stopColor="white" offset={`${values[index] || 0}%`} />
                <stop stopColor="black" offset={`${values[index] || 0}%`} />
              </linearGradient>
              <mask id={`${name}-fill`} maskContentUnits="objectBoundingBox">
                <rect width="1" height="1" fill={`url(#${name}-gradient)`} />
              </mask>
            </defs>
            <use href={`#${name}`} className="svgHoverOutline" />
            <use
              href={`#${name}`}
              clip-path={`url(#${name}-clip)`}
              className="svgHoverStroke"
            />
            <use
              href={`#${name}`}
              mask={`url(#${name}-fill)`}
              className="svgHoverFill"
            />
          </Fragment>
        )
      })}
    </svg>
  )
}

export default SVGHoverText
