import React, {
  CSSProperties,
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react"
import { Link } from "gatsby"
import SVGHoverText from "../../../../SVGHoverText"
import Image, { ImageType } from "../../../../Image"
import { useIsTouchDevice } from "../../../../../utilities/isTouchDevice"

export type PortfolioItemProps = {
  image: ImageType
  link: string
  title: string
  tags?: string[]
  description?: ReactNode
  badge?: ReactNode
  className?: string
  style?: CSSProperties
}

const PortfolioItem: FC<PortfolioItemProps> = ({
  title,
  link,
  image,
  description,
  badge,
  className,
  style = {},
}) => {
  const isTouch = useIsTouchDevice()
  const ref = useRef<HTMLLIElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isHighlighted, setIsHighlighted] = useState<boolean>(false)
  const open = () => {
    setIsOpen(true)
  }
  const close = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (ref.current && isTouch) {
      const observer = new IntersectionObserver(
        (entities: IntersectionObserverEntry[]) => {
          if (entities?.length) {
            if (entities[0].boundingClientRect.top > 0) {
              const isFullyVisible =
                entities[0].intersectionRatio === 1 || false
              setIsHighlighted(isFullyVisible)
            } else {
              // scrolled past -- is "above" viewpoint
              setIsHighlighted(true)
            }
          }
        },
        {
          threshold: [0, 1], // only trigger when 0% and 100% visible
        }
      )

      observer.observe(ref.current)

      return () => {
        observer.disconnect()
      }
    }
  }, [ref.current, isTouch])

  return (
    <li ref={ref} className={className} style={style}>
      <div className="grid grid-cols-9 pb-16 lg:pb-0 lg:flex">
        <Link
          to={link}
          onMouseEnter={open}
          onFocus={open}
          onMouseLeave={close}
          onBlur={close}
          className="relative block sm:mr-32 md:mr-0 outline-none col-start-2 col-span-8 lg:w-full"
        >
          <div className="relative flex flex-col-reverse md:grid md:grid-cols-7 gap-x-15 gap-y-6 mx-auto lg:flex">
            <div className="flex flex-col justify-center md:col-span-4 lg:w-full">
              <div className="font-bold uppercase text-lg xs:text-xl xl:text-2xl">
                <SVGHoverText
                  id={`svg-${link.replace(/[^\w]/g, "-")}`}
                  isOpen={isHighlighted || isOpen}
                >
                  {title}
                </SVGHoverText>
              </div>
              {description}
            </div>
            <div className="relative md:col-span-3 lg:w-full">
              <Image image={image} alt="" />
              {badge}
            </div>
          </div>
        </Link>
      </div>
    </li>
  )
}

export default PortfolioItem
