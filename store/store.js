import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Reducers/userSlice";

export default configureStore({
  reducer: { user: userSlice },
});
