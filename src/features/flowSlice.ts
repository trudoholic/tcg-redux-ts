import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface FlowState {
  flowReverse: boolean
  gameGoal: boolean
  curGame: number
  curPlay: number
  curPhase: number
  curBeat: number
}

const initialState = {
  flowReverse: false,
  gameGoal: false,
  curGame: 0,
  curPlay: 0,
  curPhase: 0,
  curBeat: 0,
} as FlowState

const flowSlice = createSlice({
  name: 'flow',
  initialState,
  reducers: {
    setFlowReverse(state, action: PayloadAction<boolean>) {
      state.flowReverse = action.payload
    },
    setGameGoal(state, action: PayloadAction<boolean>) {
      state.gameGoal = action.payload
    },
    setCurGame(state, action: PayloadAction<number>) {
      state.curGame = action.payload
    },
    setCurPlay(state, action: PayloadAction<number>) {
      state.curPlay = action.payload
    },
    setCurPhase(state, action: PayloadAction<number>) {
      state.curPhase = action.payload
    },
    setCurBeat(state, action: PayloadAction<number>) {
      state.curBeat = action.payload
    },
  },
})

export const {
  setFlowReverse,
  setGameGoal,
  setCurGame,
  setCurPlay,
  setCurPhase,
  setCurBeat,
} = flowSlice.actions

export default flowSlice.reducer