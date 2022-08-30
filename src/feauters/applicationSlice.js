import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  error: null,
  load: false,
  token: localStorage.getItem("token"),
};
export const authThunk = createAsyncThunk(
  "fetch/auth",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/users/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const token = await res.json();
      console.log(token);
      return token;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const loginThunk = createAsyncThunk(
  "fetch/login",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const token = await res.json();
      localStorage.setItem("token", token);
      console.log(token);
      return token;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(authThunk.pending, (state, action) => {
        state.load = true;
      })
      .addCase(authThunk.fulfilled, (state, action) => {
        state.load = false;
      })
      .addCase(loginThunk.pending, (state, action) => {
        state.load = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.load = false;
        state.token = action.payload;
      });
  },
});

export default applicationSlice.reducer;
