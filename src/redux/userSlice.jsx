import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    userType: "",
    token: "",
  },
  token: null,
  isLogin: true,
};
const userSlice = createSlice( {
  name: "user",
  initialState,
  reducers: {
    setUser: ( state, action ) => {
      const updateState = action.payload;
      return updateState;
    },
  },
} );
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
