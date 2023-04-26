import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, updateUsers } from 'redux/operations/operations';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
      })
      .addCase(updateUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUsers.fulfilled, (state, { payload }) => {
        const { id, follow } = payload;
        state.users = [...state.users, payload];
        state.users[id] = {
          ...state.users[id],
        };
        console.log(follow, id);
        state.isLoading = false;
      }),
});

export const { updateStatusFollowing } = usersSlice.actions;
