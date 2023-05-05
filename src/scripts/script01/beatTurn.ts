import {getNumber} from "..";
import {nPlayers} from './players';
import {RED} from "../../utils/solarized";

const reset = () => getNumber(nPlayers)
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
        console.log(`%c (beat: ${getValue()})`, 'color:' + RED)
    }
}

export function onStart() {
    turnIterator = reset()
    // console.log(`%c (beatTurn::reset)`, 'color:' + RED)
    onNext()
}

// export function onEnd() {
//   console.groupEnd()
// }

export function setStartValue(value: number) {
    startValue = value
}

export function setReverse(value: boolean) {
    flowReverse = value
}
