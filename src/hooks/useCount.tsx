import {useCallback, useEffect, useState} from 'react'

const useCount = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    initialize()
  }, [])

  const initialize = useCallback(() => {
    setCount(0)
  }, [])

  const handleCount = useCallback(() => {
    setCount(count => count + 1)
  }, [count])

  return {
    count,
    // initialize,
    handleCount,
  }
}

export default useCount