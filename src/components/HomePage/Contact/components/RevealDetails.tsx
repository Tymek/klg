import React, {
  FC,
  ReactNode,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react"
import isTouchDevice from "is-touch-device"
import "./RevealDetails.css"

type RevealDetailsProps = {
  children: ReactNode
  file: string
  item: string
}

type RevealDetailsState = {
  isOpen: boolean
  isLockedOpen: boolean
  isAllowed: boolean
  isHovered: boolean
}

type RevealDetailsStateActions =
  | "allow"
  | "mouseOver"
  | "mouseOut"
  | "click"
  | "show"
  | "hide"

const reducer = (
  state: RevealDetailsState,
  action: RevealDetailsStateActions
) => {
  switch (action) {
    case "allow":
      return { ...state, isAllowed: true }
    case "click":
      if (state.isOpen && !state.isLockedOpen) {
        return {
          ...state,
          isLockedOpen: true,
        }
      }

      return {
        ...state,
        isOpen: !state.isOpen || (!isTouchDevice() && state.isHovered),
        isLockedOpen: !state.isLockedOpen,
      }
    case "mouseOver": {
      return {
        ...state,
        isOpen: true,
        isHovered: true,
      }
    }
    case "mouseOut": {
      if (state.isLockedOpen) {
        return {
          ...state,
          isHovered: false,
        }
      }

      return {
        ...state,
        isOpen: false,
        isHovered: false,
      }
    }
    case "show": {
      if (isTouchDevice()) {
        return {
          ...state,
          isHovered: true,
          isOpen: true,
        }
      }

      return { ...state }
    }
    case "hide": {
      if (!state.isLockedOpen) {
        return {
          ...state,
          isHovered: false,
          isOpen: false,
        }
      }

      return { ...state }
    }
    default:
      return state
  }
}

const fetchData = async (file: string, key: string): Promise<string> => {
  try {
    const response = await fetch(`/${file}.json`)
    const json = await response.json()
    const value = json ? json[key] : ""

    return value
  } catch {
    return ""
  }
}

const RevealDetails: FC<RevealDetailsProps> = ({ children, file, item }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [state, dispatch] = useReducer(reducer, {
    isOpen: false,
    isLockedOpen: false,
    isAllowed: false,
    isHovered: false,
  })
  const [value, setValue] = useState<string>("")
  const showValue = state.isOpen && value

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        (entities: IntersectionObserverEntry[]) => {
          if (entities?.length) {
            dispatch(
              entities[0].intersectionRatio === 1 || false ? "show" : "hide"
            )
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
  }, [ref.current])

  useEffect(() => {
    // delay before allowing to open
    const t = setTimeout(() => {
      dispatch("allow")
    }, 2500)

    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (state.isOpen && state.isAllowed && !value) {
      fetchData(file, item).then(setValue)
    }
  }, [state.isOpen, state.isAllowed])

  return (
    <div
      ref={ref}
      onMouseOver={() => dispatch("mouseOver")}
      onMouseOut={() => dispatch("mouseOut")}
      onFocus={() => dispatch("mouseOver")}
      onBlur={() => dispatch("mouseOut")}
      onClick={() => dispatch("click")}
      tabIndex={state.isAllowed ? 0 : -1}
      className="revealDetails flex justify-end outline-none"
    >
      <div className="cursor-pointer">{children}</div>
      <div className={`value ${showValue ? "open" : "closed"}`}>
        <span className="ml-2 px-2 text-white bg-black">{value}</span>
      </div>
    </div>
  )
}

export default RevealDetails
