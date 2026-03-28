import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './slices/taskSlice';
import authReducer from './slices/authSlice';
import uiReducer from './slices/uiSlice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    auth: authReducer,
    ui: uiReducer,
  },
});

export default store;