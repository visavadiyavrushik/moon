import user from "./users";
import productsSlice from "./products";
import customerSlice from "./customers";

export const rootReducer = {
  user,
  products: productsSlice,
  customers: customerSlice,
};
