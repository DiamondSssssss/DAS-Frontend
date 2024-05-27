import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  breadCrumbItems: ["/"],
  loading: false,
  snackbar: {
    id: "",
    color: "green",
    message: "init message",
  },
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateBreadCrumb: (state, action) => {
      state.breadCrumbItems = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSnackbar: (state, action) => {
      const { payload } = action;
      const id = new Date().toString();
      const updateState = {
        color: payload.color,
        message: payload.message,
        id: id,
      };
      state.snackbar = updateState;
    },
  },
});
export const { updateBreadCrumb,setLoading,setSnackbar } = appSlice.actions;
export default appSlice.reducer;
