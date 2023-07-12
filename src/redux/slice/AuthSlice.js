import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  users: [],
};

const AuthSlice = createSlice({
  initialState,
  name: "Auth",
  reducers: {
    setUsername(state, action) {
      return { ...state, username: action.payload };
    },
    updateUserList(state, action) {
      return { ...state, users: [...state.users, action.payload] };
    },

    resetUsers(state) {
      return { ...state, users: [] };
    },
  },
});

export const AuthSliceActions = AuthSlice.actions;
export default AuthSlice.reducer;
