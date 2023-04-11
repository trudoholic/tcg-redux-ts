import {reset} from ".";
import {GREEN} from "../../utils/solarized";

let gameTurnIterator = reset()

export function onStart() {
  let gt = gameTurnIterator.next()
  if (gt.done) {
    console.log("-- Round! --")
    gameTurnIterator = reset()
    gt = gameTurnIterator.next()
  }

  console.log(`Раздаёт ${gt.value}`)
  console.group(`%c Game Turn: ${gt.value}`, 'color:' + GREEN)
}

export function onEnd() {
  console.groupEnd()
}
