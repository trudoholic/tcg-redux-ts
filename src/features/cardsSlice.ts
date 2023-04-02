import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface Card {
  id: string
  name: string
  flag: boolean
}

const cardAdapter = createEntityAdapter<Card>({
  selectId: it => it.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
})

const { selectAll } = cardAdapter.getSelectors((state: RootState) => state.cards)
export const selectAllCards = selectAll
// const { selectAll, selectById } = cardAdapter.getSelectors((state: RootState) => state.cards)
// export const selectCardById = selectById

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: cardAdapter.getInitialState(),
  reducers: {
    cardsAddOne: cardAdapter.addOne,
    cardsAddMany: cardAdapter.addMany,
    cardUpdate: cardAdapter.updateOne,
    cardRemove: cardAdapter.removeOne,
  },
})

export const {
  cardsAddOne,
  // cardsAddMany,
  cardUpdate,
  cardRemove
} = cardsSlice.actions

export default cardsSlice.reducer