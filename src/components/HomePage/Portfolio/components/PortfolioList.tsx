import React, { FC, useCallback, useMemo } from "react"
import PortfolioItem from "./PortfolioItem"

import useWindowSize from "../../../../utilities/useWindowSize"
import { PortfolioItemProps } from "./PortfolioItem/PortfolioItem"

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
    <ul
      data-test="portfolio-list"
      className="grid md:grid-cols-9 gap-x-15 gap-y-15 md:gap-y-12 pb-12 md:pb-0"
    >
      {parsedItems.map(item => (
        <PortfolioItem
          key={item.link}
          className="ml-12 md:ml-0 md:col-start-2 md:col-span-8"
          {...item}
        />
      ))}
    </ul>
  )
}

export default PortfolioList
