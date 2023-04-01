import { useCallback, useEffect, useState } from 'react'

const useCount = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    initialize()
  }, [])

  const initialize = useCallback(() => {
    console.log(">>")
    console.log("initialize")
  }, [])

  return {
    count,
    // initialize,
    setCount,
  }
}

export default useCount