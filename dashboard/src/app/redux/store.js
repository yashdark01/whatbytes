import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Adjust path

const store = configureStore({
  reducer: { user: userReducer }, // Must match `useSelector(state => state.user)`
});

export default store;