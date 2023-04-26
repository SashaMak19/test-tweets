import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://641f14d9f228f1a83eb01ddd.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/users');
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateUsers = createAsyncThunk(
  'users/updateUsers',
  async (params, thunkApi) => {
    try {
      const { data } = await axios.put(`/users/${params.id}`, params);
      thunkApi.dispatch(fetchUsers());
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
