import {useCallback, useState} from 'react';
import {nPlayers} from '../utils/constants';

/* Solarized */
const BLUE    = '#268bd2'
const CYAN    = '#2aa198'
const GREEN   = '#859900'
const MAGENTA = '#d33682'
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

let flowIterator = getNumber(nPlayers)

const useFlow = () => {
  const [gameOver, setGameOver] = useState(true)
  const [flow, setFlow] = useState(0)

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
    flowIterator = getNumber(nPlayers)
    const next = flowIterator.next()
    console.group(`%c Game Turn: ${next.value}`, 'color:' + GREEN)
    console.log(">", next.value)
    setFlow(next.value)
  }, [])

  const handleEndGameTurn = useCallback(() => {
    console.groupEnd()
  }, [])

  // ====== Next ======

  const handleNext = useCallback(() => {
    const next = flowIterator.next()
    if (next.done) {
      handleEndGameTurn()
      handleStartGameTurn()
      return
    }
    console.log(">", next.value)
    setFlow(next.value)
  }, [])



  return {
    gameOver,
    flow,
    handleStartGame,
    handleNext,
    handleEndGame,
  }
}

export default useFlow