import * as React from 'react';
import {players} from "../utils/constants";
import useFlow from "../hooks/useFlow";
import Player from "./Player";
import FlexRow from "./FlexRow";

export default function Flow() {
  const {
    curGame,
    curPlay,
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
                key={it} idx={i} name={it}
              />)}
            </FlexRow>
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