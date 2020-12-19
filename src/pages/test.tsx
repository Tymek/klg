/// <reference types="resize-observer-browser" />
import React, {
  FC,
  Fragment,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import useWindowSize from "../utilities/useWindowSize"
import "./test.css"

type TestProps = {
  id: string
  children: string
}

const Test: FC<TestProps> = ({ id, children }) => {
  const lines = useMemo(() => children.split("\n"), [children])
  const refs = useRef<SVGTSpanElement[]>([])
  const [values, setValues] = useState<Array<number>>(lines.map(() => 0))
  useEffect(() => {
    let sizes = values

    if (refs.current) {
      const recalculate = () => {
        let value = 75
        let total = sizes.reduce((acc, curr) => acc + curr, 0)
        let target = total * (value / 100)

        setValues(
          sizes.reduce((acc, curr) => {
            const fill = Math.min(curr, target)
            const percentage = (100 * fill) / curr || 0
            target -= fill
            total -= curr

            acc.push(percentage)
            return acc
          }, [] as number[])
        )
      }

      const resize = () => {
        sizes = refs.current
          .map(ref => ref.getBoundingClientRect().width)
          .slice(0, lines.length)
        recalculate()
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

  return (
    <div>
      {/* TODO: div to link */}
      <svg className="text-3xl" height={`${lines.length}em`}>
        {lines.map((line, index) => {
          const name = `${id}-${index}`
          return (
            <Fragment key={line}>
              <defs>
                <text id={`${name}`} y="1em" className="text">
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
              <use href={`#${name}`} className="outline" />
              <use
                href={`#${name}`}
                clip-path={`url(#${name}-clip)`}
                className="stroke"
              />
              <use
                href={`#${name}`}
                mask={`url(#${name}-fill)`}
                className="fill"
              />
            </Fragment>
          )
        })}
      </svg>
    </div>
  )
}

const SizedText = () => {
  const { width } = useWindowSize()
  const text = useMemo(() => {
    if (width) {
      if (width > 1000) {
        return "Modułowe domki dla lalek"
      }
      if (width > 700) {
        return "Modułowe domki\ndla lalek"
      }
    }

    return "Modułowe\ndomki\ndla lalek"
  }, [width])

  return (
    <div style={{ color: "#330" }}>
      <div className="m-10" style={{ background: "#dff" }}>
        <Test id="testId">{text}</Test>
      </div>
      <div className="m-10" style={{ background: "#dff" }}>
        <h1 className="text-3xl uppercase font-bold leading-none">{text}</h1>
      </div>
    </div>
  )
}

export default SizedText
