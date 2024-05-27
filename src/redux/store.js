import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,

  //   middleware: () => new Tuple(additionalMiddleware, logger),
});

export default store;
