import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	addNewProduct,
	deleteProduct,
	getAllProducts,
	getProductById,
} from "../API/productAPI";

const initialState = {
	products: [],
	errors: null,
	isLoading: false,
};

export const getAllProductsAction = createAsyncThunk(
	"product/getAllProductsAction",
	async (_, { rejectWithValue }) => {
		try {
			const response = await getAllProducts();
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const getProductByIdAction = createAsyncThunk(
	"product/getProductByIdAction",
	async (id, { rejectWithValue }) => {
		try {
			const response = await getProductById(id);
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
export const addProductAction = createAsyncThunk(
	"product/addProductAction",
	async (product, { rejectWithValue }) => {
		try {
			const response = await addNewProduct(product);
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const deleteProductAction = createAsyncThunk(
	"product/deleteProductAction",
	async (id, { rejectWithValue }) => {
		try {
			const response = await deleteProduct(id);
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

//
const productSlice = createSlice({
	name: "product",
	initialState,
	reducer: {},
	extraReducers: (builder) => {
		builder.addCase(getAllProductsAction.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(getAllProductsAction.fulfilled, (state, action) => {
			state.isLoading = false;
			state.products = action.payload;
		});
		builder.addCase(getAllProductsAction.rejected, (state, action) => {
			state.isLoading = false;
			state.errors = action.payload.name;
		});
		console.log("---------------------");
		builder.addCase(getProductByIdAction.fulfilled, (state, action) => {
			console.log(action);
		});

		builder.addCase(addProductAction.fulfilled, (state, action) => {
			state.products.push(action.payload);
		});
		builder.addCase(deleteProductAction.fulfilled, (state, action) => {
			state.products = state.products.filter(
				(product) => product.id != action.payload.id
			);
		});
	},
});

export const productReducer = productSlice.reducer;
