import { configureStore } from '@reduxjs/toolkit';
import { cardsSlice } from './features';
import { flowSlice } from './features';

const store = configureStore({
  reducer: {
    cards: cardsSlice,
    flow: flowSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store