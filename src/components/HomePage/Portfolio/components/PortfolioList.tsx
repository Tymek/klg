import React, { FC, useCallback, useMemo, useState } from "react"
import PortfolioItem from "./PortfolioItem"

import useWindowSize from "../../../../utilities/useWindowSize"
import { PortfolioItemProps } from "./PortfolioItem/PortfolioItem"
import LayoutShift from "../../../LayoutShift"
import { useIsTouchDevice } from "../../../../utilities/isTouchDevice"

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
  const isTouch = useIsTouchDevice()
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set())

  const updateVisibleItems = (link: string, isVisible: boolean) => {
    const items = new Set(visibleItems)
    if (isVisible) {
      if (!items.has(link)) {
        items.add(link)
        setVisibleItems(items)
      }
    } else if (items.has(link)) {
      items.delete(link)
      setVisibleItems(items)
    }
  }

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

  const highlightedItem = useMemo(() => {
    if (!isTouch) return undefined

    const item = items.find(({ link }) => visibleItems.has(link))
    return item?.link
  }, [items, visibleItems])

  return (
    <LayoutShift>
      <ul
        data-test="portfolio-list"
        className="grid gap-y-15 md:gap-y-12 grid-cols-9"
      >
        {parsedItems.map(item => (
          <PortfolioItem
            key={item.link}
            isOpen={item.link === highlightedItem}
            className="ml-12 -mr-4 xs:mx-0 col-span-9 md:col-start-2 md:col-span-7"
            onVisibilityChange={
              isTouch
                ? isVisible => updateVisibleItems(item.link, isVisible)
                : undefined
            }
            {...item}
          />
        ))}
      </ul>
    </LayoutShift>
  )
}

export default PortfolioList
