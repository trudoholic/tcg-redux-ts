import {useCallback, useState} from 'react';
import {nPlayers} from '../utils/constants';

/* Solarized */
// const BLUE    = '#268bd2'
// const CYAN    = '#2aa198'
const GREEN   = '#859900'
// const MAGENTA = '#d33682'
// const ORANGE  = '#cb4b16'
// const RED     = '#dc322f'
// const VIOLET  = '#6c71c4'
// const YELLOW  = '#b58900'

function* getNumber(max: number): Iterator<number> {
  let i = 0
  while (i < max) {
    yield i++
  }
}
const reset = () => getNumber(nPlayers)

let gameTurnIterator = reset()
let playTurnIterator = reset()

const useFlow = () => {
  const [gameOver, setGameOver] = useState(true)
  const [, setGameTurn] = useState(0) //gameTurn
  const [, setPlayTurn] = useState(0) //playTurn

  // const handleFlow = useCallback(() => {
  //   setFlow(p => (p + 1) % nPlayers)
  // }, [])
  // const handleFlow = useCallback(() => {
  //   setFlow(p => (nPlayers + p - 1) % nPlayers)
  // }, [])

  // ====== Game ======

  const handleStartGame = useCallback(() => {
    console.log("Start Game")
    setGameOver(false)
    handleStartGameTurn()
  }, [])

  const handleEndGame = useCallback(() => {
    setGameOver(true)
    handleEndGameTurn()
    console.log("Game Over!")
  }, [])

  // ====== Game Turn ======

  const handleStartGameTurn = useCallback(() => {
    let gameTurn = gameTurnIterator.next()
    if (gameTurn.done) {
      console.log("Round!")
      gameTurnIterator = reset()
      gameTurn = gameTurnIterator.next()
    }
    console.group(`%c Game Turn: ${gameTurn.value}`, 'color:' + GREEN)

    playTurnIterator = reset()
    const playTurn = playTurnIterator.next()
    setPlayTurn(playTurn.value)
    console.log(">", playTurn.value)
  }, [])

  const handleEndGameTurn = useCallback(() => {
    console.groupEnd()
  }, [])

  // ====== Next ======

  const handleNext = useCallback(() => {
    // const next = gameTurnIterator.next()
    const playTurn = playTurnIterator.next()
    if (playTurn.done) {
      handleEndGameTurn()
      handleStartGameTurn()
      return
    }
    console.log(">", playTurn.value)
    // setGameTurn(next.value)
    setPlayTurn(playTurn.value)
  }, [])



  return {
    gameOver,
    handleStartGame,
    handleNext,
    handleEndGame,
  }
}

export default useFlow