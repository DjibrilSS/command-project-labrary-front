import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  books:[]
};

export const fetchBooks = createAsyncThunk(
  "fetch/books",
  async (_,thunkAPI)=>{
      try {
          const res = await fetch("http://localhost:4000/books")
          const data = await res.json()
          return data
      } catch (error) {
          return thunkAPI.rejectWithValue(error)
      }
  }
  
)


const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchBooks.fulfilled,(state,action)=>{
      state.books = action.payload
    })
  },
});

export default bookSlice.reducer;
