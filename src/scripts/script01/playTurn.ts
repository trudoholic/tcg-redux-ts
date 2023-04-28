import {reset} from ".";
import {nPlayers} from '../../utils/constants';
import {BLUE} from "../../utils/solarized";

let turnIterator = reset()
let next = turnIterator.next()
let startValue = 0
let flowReverse = false

export function isDone() {
  return next.done
}

export function getValue() {
  if (flowReverse) {
    return (startValue + nPlayers - next.value) % nPlayers
  }
  return (startValue + next.value) % nPlayers
}

export function onNext() {
  next = turnIterator.next()
  if (!next.done) {
    console.log(`%c Заходит: ${getValue()}`, 'color:' + BLUE)
    console.group(`%c Play Turn: ${getValue()}`, 'color:' + BLUE)
  }
}

export function onStart() {
  turnIterator = reset()
}

export function onEnd() {
  console.log(`%c End Play Turn: ${getValue()}`, 'color:' + BLUE)
  console.groupEnd()
}

export function setStartValue(value: number) {
  startValue = value
}

export function setReverse(value: boolean) {
  flowReverse = value
}
