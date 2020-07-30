import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import db from "../firebase";

export const getAnime = createAsyncThunk(
  "anime/getAnime",
  async ({ collection, slug }, thunk) => {
    const doc = await db.collection(collection).doc(slug).get();
    return doc.data();
  }
);

const animeSlice = createSlice({
  name: "anime",
  initialState: {
    isFetching: true,
  },
  reducers: {
    clearAnime(state, action) {
      state.anime = {};
      state.isFetching = true;
    },
  },
  extraReducers: {
    [getAnime.fulfilled]: (state, action) => {
      state.anime = action.payload;
      state.isFetching = false;
    },
  },
});

export const { clearAnime } = animeSlice.actions;

export default animeSlice.reducer;
