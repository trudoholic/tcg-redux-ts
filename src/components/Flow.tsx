import * as React from "react";
import useFlow from "../hooks/useFlow";
import usePlayers from "../hooks/usePlayers";
import Player from "./Player";
import FlexRow from "./FlexRow";

export default function Flow() {
  const {
    curGame,
    curPlay,
    curPhase,
    curBeat,
    flowReverse,
    gameOver,
    gameGoal,
    handleStartGame,
    handleEndGame,
    handleNext,
    handleGameGoal,
    handleReverse,
  } = useFlow()

  const {
    players,
  } = usePlayers()

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
            <FlexRow>
              {players.map((it, i) => <Player
                key={it.id} idx={i} name={it.name}
              />)}
            </FlexRow>
            <p>Phase: {curPhase}</p>
            <button onClick={handleNext}>
              {`GT: ${curGame} PT: ${curPlay} next: ${curBeat}`}
            </button>
            <button onClick={handleReverse}>
              {`Reverse: ${flowReverse}`}
            </button>
            <button onClick={handleGameGoal}>
              goal
            </button>
          </>
      }
    </div>
  )
}