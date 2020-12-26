// For fixing SVG text line height rendering issue

import { useEffect, useState } from "react"

const useIsMobileFirefox = () => {
  const [state, setState] = useState<boolean>()

  useEffect(() => {
    const ua = navigator?.userAgent?.toLowerCase()
    const isFirefox = ua?.indexOf("firefox") > -1
    const isAndroid = ua?.indexOf("android") > -1

    setState(isFirefox && isAndroid)
  }, [setState])

  return state
}

export default useIsMobileFirefox
