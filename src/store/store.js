import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartReducer";

const store = configureStore({
  reducer: {cartReducer},
});

store.subscribe(() => {
  console.log('current state: ', store.getState());
})


export default store;
