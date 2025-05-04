import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { movieReducer } from "./moviesSlice";
import { productReducer } from "./productSlice";

export const store = configureStore({
	reducer: {
		myCounterSlice: counterReducer,
		movieSlice: movieReducer,
		productSlice: productReducer,
	},
});
