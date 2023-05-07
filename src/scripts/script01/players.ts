export const playerNames = ["0:North", "1:East", "2:South", "3:West"] as const
export const nPlayers = playerNames.length
// export type TPlayers = typeof players[number]
// export type TCallback = (player: IPlayer) => {changes: {score: number}, id: string}

export interface IPlayer {
  id: string
  name: string
  score: number
  totalScore: number
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

export const callbackFn = (player: IPlayer) => {
  return {id: player.id, changes: {score: player.score + 1}}
}
