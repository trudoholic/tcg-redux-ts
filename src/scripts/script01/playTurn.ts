import {reset} from ".";
import {BLUE} from "../../utils/solarized";

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
  // console.log(`%c (playTurn::onNext ${next.done})`, 'color:' + BLUE)
  if (!next.done) {
    // console.log(`%c (wait: ${next.value})`, 'color:' + BLUE)
    console.log(`%c Заходит: ${next.value}`, 'color:' + BLUE)
    console.group(`%c Play Turn: ${next.value}`, 'color:' + BLUE)
  }
}

export function onStart() {
  turnIterator = reset()
  // console.log(`%c (playTurn::reset)`, 'color:' + BLUE)
  // onNext()
}

export function onEnd() {
  console.log(`%c End Play Turn: ${next.value}`, 'color:' + BLUE)
  console.groupEnd()
}
