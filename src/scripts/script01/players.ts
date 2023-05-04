export const playerNames = ["North", "East", "South", "West"] as const
export const nPlayers = playerNames.length
// export type TPlayers = typeof players[number]

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