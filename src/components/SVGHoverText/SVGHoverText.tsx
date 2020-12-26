import React, { FC, useMemo } from "react"
import loadable from "@loadable/component"

export type SVGHoverTextProps = {
  id: string
  children: string
  isOpen?: boolean
  className?: string
}

const SVGHoverText = loadable(() => import("./LazyComponent"))

const SVGHoverTextWithFallback: FC<SVGHoverTextProps> = ({
  children,
  ...props
}) => {
  const lines = useMemo(() => children.split("\n"), [children])

  return (
    <div className={props?.className}>
      <SVGHoverText
        {...props}
        lines={lines}
        fallback={
          <div
            style={{
              fontFamily: "GilroyBlock, Gilroy, sans-serif",
            }}
          >
            {children}
          </div>
        }
      />
    </div>
  )
}

export default SVGHoverTextWithFallback
