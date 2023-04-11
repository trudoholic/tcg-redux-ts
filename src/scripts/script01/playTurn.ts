import {reset} from ".";
import {BLUE} from "../../utils/solarized";

let playTurnIterator = reset()
let next = playTurnIterator.next()

export function isDone() {
  return next.done
}

export function getValue() {
  return next.value
}

export function onNext() {
  next = playTurnIterator.next()
  if (!next.done) {
    console.log(`%c > ${next.value}`, 'color:' + BLUE)
  }
}

export function onStart() {
  playTurnIterator = reset()
  onNext()
}

// export function onEnd() {
//   console.groupEnd()
// }
