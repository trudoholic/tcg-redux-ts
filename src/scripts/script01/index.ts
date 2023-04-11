import {nPlayers} from '../../utils/constants';

function* getNumber(max: number): Iterator<number> {
  let i = 0
  while (i < max) {
    yield i++
  }
}
export const reset = () => getNumber(nPlayers)
