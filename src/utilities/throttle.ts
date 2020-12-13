const throttle = (func: (...args: unknown[]) => unknown, limit = 1) => {
  let lastFunc: NodeJS.Timeout
  let lastRan: number
  return (...args: Parameters<typeof func>) => {
    const context = this
    if (!lastRan) {
      func(...args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          func(...args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}

export default throttle
