import { createSlice } from "@reduxjs/toolkit";
import { Items } from "../utils/dummyData";

const initialState = {
  products: Items,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts(state, action) {
      state.products = [...state.products, action.payload];
    },
  },
});

export const { addProducts } = productsSlice.actions;
export default productsSlice.reducer;
