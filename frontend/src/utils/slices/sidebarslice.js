import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    leftSideVisibility: true,
    darkTheme: false, // Add darkTheme state
  },
  reducers: {
    toggleVisibility: state => {
      state.leftSideVisibility = !state.leftSideVisibility;
    },
    toggleDarkTheme: state => {
      state.darkTheme = !state.darkTheme; // Toggle dark theme state
    },
  },
});

export const { toggleVisibility, toggleDarkTheme } = sidebarSlice.actions;

export const selectLeftSideVisibility = state => state.sidebar.leftSideVisibility;
export const selectDarkTheme = state => state.sidebar.darkTheme; // Add selector for darkTheme

export default sidebarSlice.reducer;
