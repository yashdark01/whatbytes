import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rank: 1,
  percentile: 30,
  currentScore: 10,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserData: (state, action) => {
      Object.assign(state, action.payload); 
    },
  },
});

export const { updateUserData } = userSlice.actions;
export default userSlice.reducer;