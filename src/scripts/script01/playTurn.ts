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
  if (!next.done) {
    console.log(`%c -> ${next.value}`, 'color:' + BLUE)
  }
}

export function onStart() {
  turnIterator = reset()
  onNext()
}

// export function onEnd() {
//   console.groupEnd()
// }
