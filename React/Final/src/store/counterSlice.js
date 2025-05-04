import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "count",
	initialState: { count: 0 },
	reducers: {
		increase: (state, action) => {
			state.count += action.payload;
		},
		decrease: (state, action) => {
			console.log(action);
			state.count -= 1;
		},
	},
});

export const counterReducer = counterSlice.reducer;
export const counterActions = counterSlice.actions;
