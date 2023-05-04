import {IPlayer, playersList} from "./script01/players"

export type {IPlayer as TPlayer}
export {playersList}

import * as gameSession from "./script01/gameSession"
import * as gameTurn from "./script01/gameTurn"
import * as playTurn from "./script01/playTurn"
import * as playPhase from "./script01/playPhase"
import * as beatTurn from "./script01/beatTurn"

export {gameSession, gameTurn, playTurn, playPhase, beatTurn}
