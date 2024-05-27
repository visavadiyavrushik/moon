import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers: [],
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer(state, action) {
      state.customers = action.payload;
    },
  },
});

export const { addCustomer } = customerSlice.actions;
export default customerSlice.reducer;

// const handleAddtoCart = ()=>{
//  dispatch
// }
