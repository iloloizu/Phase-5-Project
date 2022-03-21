import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSneakers = createAsyncThunk("sneakers/fetchSneakers", () => {
  // return a Promise containing the data we want
  return fetch("/sneakers")
    .then((response) => response.json())
    .then((data) => data);
});

const sneakersSlice = createSlice({
  name: "sneakers",
  initialState: {
    entities: [], // array of sneakers
    status: "idle", // loading state
  },
  reducers: {
    sneakerAdded(state, action) {
      // using createSlice lets us mutate state!
      state.entities.push(action.payload);
    },
    sneakerUpdated(state, action) {
      const sneaker = state.entities.find((sneaker) => sneaker.id === action.payload.id);
      sneaker.url = action.payload.url;
    },
  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchSneakers.pending](state) {
      state.status = "loading";
    },
    [fetchSneakers.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
  },
});

export const { sneakerAdded, sneakerUpdated } = sneakersSlice.actions;

export default sneakersSlice.reducer;