import {reset} from ".";
import {GREEN} from "../../utils/solarized";

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
    console.log(`%c Раздаёт: ${next.value}`, 'color:' + GREEN)
    console.group(`%c Game Turn: ${next.value}`, 'color:' + GREEN)
  }
}

export function onStart() {
  turnIterator = reset()
}

export function onRound() {
  console.log("-- Round! --")
}

export function onEnd() {
  console.log(`%c End: ${next.value}`, 'color:' + GREEN)
  console.groupEnd()
}
