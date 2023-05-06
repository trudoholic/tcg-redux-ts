import {
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {TPlayer, playersList} from "../scripts";

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
    playerUpdate: playersAdapter.updateOne,
    playersUpdate: playersAdapter.updateMany,
    playersRemove: playersAdapter.removeAll,
  },
})

const { selectAll } = playersAdapter.getSelectors((state: RootState) => state.players)
export const selectAllPlayers = selectAll

export const {
  playerUpdate,
  // playersUpdate,
} = playersSlice.actions

export default playersSlice.reducer