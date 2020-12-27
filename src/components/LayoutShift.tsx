import React, { FC } from "react"

type LayoutShiftProps = {
  compensateMargin?: boolean
}

const LayoutShift: FC<LayoutShiftProps> = ({ children, compensateMargin }) => {
  return (
    <div className="grid grid-cols-9">
      <div className="col-span-9 xs:col-start-2 xs:col-span-8 md:col-start-1 md:col-span-9">
        <div className={compensateMargin ? "mr-4 sm:mr-0" : ""}>
          <div className="-mr-4 sm:mr-0">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default LayoutShift
