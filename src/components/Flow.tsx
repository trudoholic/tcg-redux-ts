import * as React from 'react'
import useFlow from "../hooks/useFlow";

export default function Flow() {
  const {
    gameOver,
    flow,
    handleStartGame,
    handleNext,
    handleEndGame,
  } = useFlow()

  return (
    <div className="card">
      {gameOver
        ? <>
          <button onClick={handleStartGame}>
            start
          </button>
        </>
        : <>
          <button onClick={handleNext}>
            count is {flow}
          </button>
          <button onClick={handleEndGame}>
            end
          </button>
        </>
      }
    </div>
  )
}