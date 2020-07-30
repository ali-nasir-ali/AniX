import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import db from "../firebase";

export const getTopAnimes = createAsyncThunk(
  "topanimes/getTopAnimes",
  async () => {
    const animes = [];
    const snapshot = await db
      .collection("topanimes")
      .orderBy("meanScore", "desc")
      .limit(60)
      .get();
    snapshot.forEach((doc) => animes.push(doc.data()));
    return animes;
  }
);

const topAnimesSlice = createSlice({
  name: "topanimes",
  initialState: {
    isFetching: true,
    animes: [],
  },
  reducers: {},
  extraReducers: {
    [getTopAnimes.fulfilled]: (state, action) => {
      state.animes = action.payload;
      state.isFetching = false;
    },
  },
});

export default topAnimesSlice.reducer;
