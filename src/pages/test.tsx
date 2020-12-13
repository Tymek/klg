/// <reference types="resize-observer-browser" />
import React, { FC, Fragment, useEffect, useMemo, useRef } from "react"
import useWindowSize from "../utilities/useWindowSize"
import "./test.css"

type TestProps = {
  id: string
  children: string
}

const Test: FC<TestProps> = ({ id, children }) => {
  const lines = useMemo(() => children.split("\n"), [children])
  const refs = useRef<SVGTSpanElement[]>([])
  useEffect(() => {
    if (refs.current) {
      refs.current.forEach(ref => {
        const { width } = ref.getBoundingClientRect()
        console.log(width)
      })
    }
  }, [refs.current])

  return (
    <div>
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
                  <stop stopColor="white" offset="75%" />
                  <stop stopColor="black" offset="75%" />
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

export default () => {
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
