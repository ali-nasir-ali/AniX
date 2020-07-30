import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import db from "../firebase"

export const getRecentAnimes = createAsyncThunk('recent/getRecentAnimes', async () => {
	const animes = []
	const snapshot = await db.collection('recentanimes').get()
	snapshot.forEach(doc => animes.push(doc.data()))
	return animes;
})

const recentAnimesSlice = createSlice({
	name: 'recentanimes',
	initialState: {
		isFetching: true,
		animes: []
	},
	reducers: {},
	extraReducers: {
		[getRecentAnimes.fulfilled]: (state, action) => {
			state.animes = action.payload;
			state.isFetching = false;
		}
	}
})

export default recentAnimesSlice.reducer;
