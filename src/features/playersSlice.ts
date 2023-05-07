import {
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {TPlayer, playersList, callbackFn} from "../scripts";

const playersAdapter = createEntityAdapter<TPlayer>({
  selectId: it => it.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
})

const emptyInitialState = playersAdapter.getInitialState();
const filledState = playersAdapter.upsertMany(emptyInitialState, playersList);

export const playersSlice = createSlice({
  name: 'players',
  initialState: filledState,
  reducers: {
    playersAdd: playersAdapter.addMany,
    playersUpdate: (state) => {
      const players = playersAdapter.getSelectors().selectAll(state)
      const updates = players.map(callbackFn)
      playersAdapter.updateMany(state, updates)
    },

    playersRemove: playersAdapter.removeAll,
  },
})

const { selectAll } = playersAdapter.getSelectors((state: RootState) => state.players)
export const selectAllPlayers = selectAll

export const {
  playersUpdate,
} = playersSlice.actions

export default playersSlice.reducer