import {getNumber} from "..";
import {nPlayers} from './players';
import {GREEN} from "../../utils/solarized";

const reset = () => getNumber(nPlayers)
let turnIterator = reset()
let next = turnIterator.next()

export function isDone() {
  return next.done
}

export function getValue() {
  return next.value
}

export function onNext() {
  next = turnIterator.next()
  if (!next.done) {
    console.log(`%c Играет: ${next.value}`, 'color:' + GREEN)
    console.group(`%c Game Turn: ${next.value}`, 'color:' + GREEN)
  }
}

export function onStart() {
  turnIterator = reset()
}

export function onRound(round: number) {
  console.log(`%c *** Round: ${round} ***`, 'color:' + GREEN)
}

export function onEnd() {
  console.log(`%c End Game Turn: ${next.value}`, 'color:' + GREEN)
  console.groupEnd()
}
