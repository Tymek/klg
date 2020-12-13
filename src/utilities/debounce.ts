const debounce = (func: (...args: unknown[]) => unknown, delay = 1) => {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<typeof func>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

export default debounce
