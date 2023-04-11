import * as React from 'react'
import useFlow from "../hooks/useFlow";

export default function Flow() {
  const {
    gameOver,
    gameGoal,
    handleStartGame,
    handleEndGame,
    handleNext,
    handleGameGoal,
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
        : gameGoal
          ? <>
            <button onClick={handleEndGame}>
              end
            </button>
          </>
          : <>
            <button onClick={handleNext}>
              {`next: ${curPlay}`}
            </button>
            <button onClick={handleGameGoal}>
              goal
            </button>
          </>
      }
    </div>
  )
}