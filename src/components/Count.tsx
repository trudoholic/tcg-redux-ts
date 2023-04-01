import * as React from 'react'
import useCount from "../hooks/useCount";

export default function Count() {
  const {
    count,
    // initialize,
    handleCount,
  } = useCount()

  return (
    <div className="card">
      <button onClick={handleCount}>
        count is {count}
      </button>
    </div>
  )
}