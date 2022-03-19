import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ShoeService from "../../services/ShoeService";

export const fetchShoes = createAsyncThunk(
  "shoes/fetchData",
  async () => {
    const res = await ShoeService.getAll();
    return res.data;
  }
);

const shoesSlice = createSlice({
  name: "shoes",
  initialState: {
    entities: [],
  },
  extraReducers: {
    [fetchShoes.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

export default shoesSlice.reducer;