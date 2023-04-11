import * as React from 'react'
import useFlow from "../hooks/useFlow";

export default function Flow() {
  const {
    gameOver,
    handleStartGame,
    handleNext,
    handleEndGame,
    curPlay,
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
            {`next: ${curPlay}`}
          </button>
          <button onClick={handleEndGame}>
            end
          </button>
        </>
      }
    </div>
  )
}