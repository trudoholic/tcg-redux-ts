export const playerNames = ["0:North", "1:East", "2:South", "3:West"] as const
export const nPlayers = playerNames.length
// export type TPlayers = typeof players[number]
// export type TCallback = (player: IPlayer) => {changes: {score: number}, id: string}

// export function at(idx: number) {
//   return playerNames.at(idx)
// }

export function random() {
  return playerNames.at(Math.floor(Math.random() * playerNames.length))
}

export interface IPlayer {
  id: string
  name: string
  score: number
  totalScore: number
}

export interface TAction {
  type: string
  id?: string
}

function getPlayer(t: string): IPlayer {
  return {
    id: t,
    name: t,
    score: 0,
    totalScore: 0,
  }
}

export const playersList = playerNames.map(playerName => getPlayer(playerName))

export const callbackFn = (action: TAction) => {
  return (player: IPlayer) => {
    switch (action.type) {
      case "onPlayTurn": {
        return player.id === action.id ?
          {id: player.id, changes: {
            score: player.score + 1
          }}
          : {id: player.id, changes: {}}
      }
      case "onGameTurn": {
        return {id: player.id, changes: {
          score: 0,
          totalScore: player.totalScore + player.score
        }}
      }
      default:
        return {id: player.id, changes: {}}
    }
  }
}
