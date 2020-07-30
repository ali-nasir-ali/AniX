import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import db from "../firebase"

export const getRecommendedAnimes = createAsyncThunk('recommended/getRecommendedAnimes', async () => {
	const animes = []
	const snapshot = await db.collection('animes').limit(10).get()
	snapshot.forEach(doc => animes.push(doc.data()))
	return animes;
})

const recommendedSlice = createSlice({
	name: 'recommended',
	initialState: {
		isFetching: true,
		animes: []
	},
	reducers: {},
	extraReducers: {
		[getRecommendedAnimes.fulfilled]: (state, action) => {
			state.animes = action.payload;
			state.isFetching = false;
		}
	}
})

export default recommendedSlice.reducer;

