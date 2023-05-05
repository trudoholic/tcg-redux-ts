import {getNumber} from "..";
import {ORANGE} from "../../utils/solarized";

// export const phases = ["DrawPhase", "PlayPhase", "HandPhase", "KeepPhase"] as const
export const phases = ["PlayPhase"] as const
export const nPhases = phases.length
// export type TPhases = typeof phases[number]

const reset = () => getNumber(nPhases)
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
    console.log(`%c Phase: ${phases[next.value]}`, 'color:' + ORANGE)
    console.group(`%c Phase: ${next.value}`, 'color:' + ORANGE)
  }
}

export function onStart() {
  turnIterator = reset()
}

export function onEnd() {
  console.log(`%c End Phase: ${phases[next.value]}`, 'color:' + ORANGE)
  console.groupEnd()
}
