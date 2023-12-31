import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentListing: [
    {
      userName: "Dhvanit",
      email: "Dhvanit@gmail.com",
    },
  ],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserListing: (state, action) => {
      state.currentListing.push(action.payload);
    },
  },
});

export const { setUserListing } = userSlice.actions;
export default userSlice.reducer;
