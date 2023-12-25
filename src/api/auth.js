import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const registration = createAsyncThunk(
  'auth/register',
  async (body, thunkAPI) => {
    try {
      const resp = await axios.post('/users/signup', body);
      console.log(resp);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  try {
    const res = await axios.post('/users/login', body);

    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
