import * as React from 'react'
import useCount from "../hooks/useCount";

export default function Count() {
  const {
    count,
    // initialize,
    setCount,
  } = useCount()

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}