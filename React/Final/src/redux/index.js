import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/counterReducer";
import { trackReducer } from "./reducers/tracksReducer";

export const store = configureStore({
	reducer: {
		counterSlice: counterReducer,
		trackSlice: trackReducer,
	},
});
