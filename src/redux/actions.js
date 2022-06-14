import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSports = createAsyncThunk('sports/fetchSports', async() => {
  const response = await fetch('http://localhost:8080/sports');
  const sports = await response.json()
  return sports.group.groups;
});
