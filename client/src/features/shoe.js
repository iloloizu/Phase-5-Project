import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSneakers = createAsyncThunk("sneakers/fetchSneakers", () => {
  // return a Promise containing the data we want
  return fetch("/sneakers")
    .then((response) => response.json())
    .then((data) => data);
});

export const createSneakers = createAsyncThunk(
  "sneakers/createSneakers",
  async (newSneakers) => {
    return fetch(`/sneakers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSneakers),
    }).then((res) => res.json());
  }
);

export const updateNewSneakers = createAsyncThunk(
  "newSneakers/updateNewSneakers",
  async (newSneakers) => {
    return fetch(`/sneakers/${newSneakers.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSneakers),
    }).then((res) => res.json());
  }
);

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
    [createSneakers.fulfilled](state, action) {
      state.entities = [...state.entities, action.payload];
    },
    [updateNewSneakers.fulfilled](state, action) {
      state = state.filter(
        (sneaker) => sneaker.id !== action.payload.id
      );
      state = [...state, action.payload];
    }
  },
});

export const { sneakerAdded, sneakerUpdated } = sneakersSlice.actions;

export default sneakersSlice.reducer;