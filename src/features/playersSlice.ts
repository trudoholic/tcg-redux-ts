import {
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {IPlayer} from "../scripts/script01/players";

const playersAdapter = createEntityAdapter<IPlayer>({
  selectId: it => it.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
})

const { selectAll } = playersAdapter.getSelectors((state: RootState) => state.players)
export const selectAllPlayers = selectAll

export const playersSlice = createSlice({
  name: 'players',
  initialState: playersAdapter.getInitialState(),
  reducers: {
    playersAdd: playersAdapter.addMany,
    playerUpdate: playersAdapter.updateOne,
    playersUpdate: playersAdapter.updateMany,
    playersRemove: playersAdapter.removeAll,
  },
})

export const {
  playersAdd,
  // playerUpdate,
  // playersUpdate,
  playersRemove,
} = playersSlice.actions

export default playersSlice.reducer