import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as taskService from '../../services/taskService';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (_, { rejectWithValue }) => {
  try {
    const data = await taskService.getTasks();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const createTask = createAsyncThunk('tasks/createTask', async (taskData, { rejectWithValue }) => {
  try {
    const data = await taskService.addTask(taskData);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default taskSlice.reducer;