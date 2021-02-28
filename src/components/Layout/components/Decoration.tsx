import React, { CSSProperties, FC } from "react"

const decorationStyles: CSSProperties = {
  position: "absolute",
  right: 0,
  zIndex: -2,
}

export type DecorationProps = {
  style: CSSProperties
  className?: string
}

const Decoration: FC<DecorationProps> = ({ style, className }) => (
  <>
    <div
      style={{
        width: "calc(50% - 442px)",
        ...decorationStyles,
        ...style,
      }}
      className={`bg-lightGray hidden xxl:block ${className || ""}`}
    />
    <div
      style={{
        width: "24.5%",
        ...decorationStyles,
        ...style,
      }}
      className={`bg-lightGray block xxl:hidden ${className || ""}`}
    />
  </>
)

export default Decoration
