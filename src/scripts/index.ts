import {IPlayer, playersList, nPlayers} from "./script01/players"
import * as gameSession from "./script01/gameSession"
import * as gameTurn from "./script01/gameTurn"
import * as playTurn from "./script01/playTurn"
import * as playPhase from "./script01/playPhase"
import * as beatTurn from "./script01/beatTurn"

export type {IPlayer as TPlayer}
export {playersList, nPlayers}
export {gameSession, gameTurn, playTurn, playPhase, beatTurn}
