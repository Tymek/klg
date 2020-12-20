import React, { FC } from "react"
import loadable from "@loadable/component"

export type SVGHoverTextProps = {
  id: string
  children: string
  isOpen?: boolean
  className?: string
}

const SVGHoverText = loadable(() => import("./LazyComponent"))

const SVGHoverTextWithFallback: FC<SVGHoverTextProps> = ({ ...props }) => (
  <SVGHoverText
    {...props}
    fallback={
      <div
        className={props?.className}
        style={{
          fontFamily: "GilroyBlock, Gilroy, sans-serif",
        }}
      >
        {props.children}
      </div>
    }
  />
)

export default SVGHoverTextWithFallback
