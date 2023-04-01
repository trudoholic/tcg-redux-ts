import { configureStore } from '@reduxjs/toolkit';
import { cardsSlice } from './features';

const store = configureStore({
  reducer: {
    cards: cardsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store