
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authslice';
import sideBarReducer  from './slices/sidebarslice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar:sideBarReducer,
  },
 // Call composeWithDevTools as a function
});

export default store;
