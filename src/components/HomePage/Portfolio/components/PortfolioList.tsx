import React, { FC, useCallback, useMemo, useState } from "react"
import PortfolioItem from "./PortfolioItem"

import useWindowSize from "../../../../utilities/useWindowSize"
import { PortfolioItemProps } from "./PortfolioItem/PortfolioItem"
import LayoutShift from "../../../LayoutShift"

const aspectRatio = 1

export type PortfolioListProps = {
  items: Array<
    Omit<PortfolioItemProps, "title"> & {
      title: string | Record<string, string>
    }
  >
}

const PortfolioList: FC<PortfolioListProps> = ({ items }) => {
  const { width } = useWindowSize()

  const mapTextWidth = useCallback(
    (sizes: Record<string, string>): string => {
      const breakpoints = Object.keys(sizes)
        .map(x => Number.parseFloat(x))
        .sort((x, y) => {
          if (x > y) return 1
          if (x < y) return -1
          return 0
        })
        .reverse()
      let i
      for (i = 0; i < breakpoints.length; i++) {
        if ((width || 0) > breakpoints[i]) {
          return sizes[`${breakpoints[i]}`]
        }
      }
      return sizes[`${breakpoints.pop()}`]
    },
    [width]
  )

  const parsedItems = useMemo(
    () =>
      items.map(item => ({
        ...item,
        title:
          typeof item.title === "string"
            ? item.title
            : mapTextWidth(item.title),
        image: {
          ...item.image,
          aspectRatio,
        },
      })),
    [items, mapTextWidth]
  )

  return (
    <LayoutShift>
      <ul
        data-test="portfolio-list"
        className="lg:grid gap-y-24 gap-x-15 xxl:gap-y-32 grid-cols-9 lg:pb-24"
      >
        {parsedItems.map((item, index) => (
          <PortfolioItem
            key={item.link}
            className={
              (index % 2 ? "lg:col-start-2" : "lg:col-start-6") +
              " lg:col-span-3"
            }
            style={{ gridRow: `${index + 1} / span 2` }}
            {...item}
          />
        ))}
      </ul>
    </LayoutShift>
  )
}

export default PortfolioList
