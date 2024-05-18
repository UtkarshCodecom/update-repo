import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  userId: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.userId = action.payload.userId; // Assuming action.payload includes the user ID
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userId = null;
    },
    register(state, action) {
      state.isAuthenticated = true;
      state.userId = action.payload.userId; // Assuming action.payload includes the user ID
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;
