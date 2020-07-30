import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import db from "../firebase";

export const getPopularAnimes = createAsyncThunk(
  "recent/getPopularAnimes",
  async () => {
    const animes = [];
    const snapshot = await db.collection("popularanimes").get();
    snapshot.forEach((doc) => animes.push(doc.data()));
    return animes;
  }
);

const popularAnimesSlice = createSlice({
  name: "popularanimes",
  initialState: {
    isFetching: true,
    animes: [],
  },
  reducers: {},
  extraReducers: {
    [getPopularAnimes.fulfilled]: (state, action) => {
      state.animes = action.payload;
      state.isFetching = false;
    },
  },
});

export default popularAnimesSlice.reducer;
