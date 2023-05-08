import {
  IPlayer,
  TAction,
  playersList,
  nPlayers,
  callbackFn,
  random,
} from "./script01/players"

import * as gameSession from "./script01/gameSession"
import * as gameTurn from "./script01/gameTurn"
import * as playTurn from "./script01/playTurn"
import * as playPhase from "./script01/playPhase"
import * as beatTurn from "./script01/beatTurn"

export type {IPlayer as TPlayer, TAction}
export {playersList, nPlayers, callbackFn, random}
export {gameSession, gameTurn, playTurn, playPhase, beatTurn}

export function* getNumber(max: number): Iterator<number> {
  let i = 0
  while (i < max) {
    yield i++
  }
}