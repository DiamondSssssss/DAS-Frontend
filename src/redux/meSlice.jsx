import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserService } from "services/UserService";

// Async thunk to fetch user profile
export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  // @ts-ignore
  async ({ token }, thunkAPI) => {
    try {
      const res = await UserService.getProfile(token);
      console.log("Profile fetched successfully:", res);
      return res;
    } catch (error) {
      console.error("Error fetching profile:", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Initial state for the profile slice
const initialState = {
  entities: {}, // assuming profile data is an object
  loading: false,
  error: null,
};

// Create a profile slice
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {}, // No additional reducers defined
  extraReducers: (builder) => {
    // Reducer for 'fetchProfile' when it's fulfilled
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      console.log("Profile fetch success");
      state.entities = action.payload;
      state.loading = false;
      state.error = null;
    });

    // Reducer for 'fetchProfile' when it's pending
    builder.addCase(fetchProfile.pending, (state) => {
      console.log("Profile fetch pending");
      state.loading = true;
      state.error = null;
    });

    // Reducer for 'fetchProfile' when it's rejected
    builder.addCase(fetchProfile.rejected, (state, action) => {
      console.log("Profile fetch rejected:", action.error.message);
      state.entities = {}; // Reset profile entities
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

// Export the actions and reducer
export const {} = profileSlice.actions;
export default profileSlice.reducer;
