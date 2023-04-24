import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface FlowState {
  curGame: number
  curPlay: number
  curBeat: number
}

const initialState = {
  curGame: 0,
  curPlay: 0,
  curBeat: 0,
} as FlowState

const flowSlice = createSlice({
  name: 'flow',
  initialState,
  reducers: {
    setCurGame(state, action: PayloadAction<number>) {
      state.curGame = action.payload
    },
    setCurPlay(state, action: PayloadAction<number>) {
      state.curPlay = action.payload
    },
    setCurBeat(state, action: PayloadAction<number>) {
      state.curBeat = action.payload
    },
  },
})

export const {
  setCurGame,
  setCurPlay,
  setCurBeat,
} = flowSlice.actions

export default flowSlice.reducer