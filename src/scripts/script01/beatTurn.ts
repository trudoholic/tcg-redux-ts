import {getNumber} from "..";
import {nPlayers} from './players';
import {RED} from "../../utils/solarized";

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
    // console.log(`%c (beatTurn::onNext ${next.done})`, 'color:' + RED)
    if (!next.done) {
        console.log(`%c (beat: ${next.value})`, 'color:' + RED)
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

