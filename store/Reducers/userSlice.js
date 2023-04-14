import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: null },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state = null;
    },
    setUser: (state, action) => {
      console.log("setting user", action);
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logout, setUser } = userSlice.actions;

export default userSlice.reducer;
