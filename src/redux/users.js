import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: {},
  cart: { product: [] },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    currentUser(state, action) {
      state.users = action.payload;
    },
    cartItems(state, action) {
      state.cart.product = [...state.cart.product, action.payload];
    },
    qtyAdd(state, action) {
      const data = action.payload;
      console.log("data: ", state, data);
      // state.cart.product = action.payload;
    },
  },
});

export const { currentUser, cartItems, qtyAdd } = userSlice.actions;
export default userSlice.reducer;

// const handleAddtoCart = ()=>{
//  dispatch
// }
