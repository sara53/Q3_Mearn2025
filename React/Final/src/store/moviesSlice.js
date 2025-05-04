import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	moviesList: ["Frozen I"],
};
const movieSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		addMovie: (state, action) => {
			state.moviesList.push(action.payload);
		},
	},
});

export const movieReducer = movieSlice.reducer;
export const movieActions = movieSlice.actions;
