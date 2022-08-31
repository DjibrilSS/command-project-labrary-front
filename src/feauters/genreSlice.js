import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  genre: []
};

export const getGenre = createAsyncThunk('genre/fetch', async (_, thunkAPI)=>{
  try {
      const res = await fetch('http://localhost:4000/genre');
      const genre = await res.json();

      if(genre.error){
          return thunkAPI.rejectWithValue(genre.error);
      }
      return genre
  } catch (e){
      thunkAPI.rejectWithValue(e)
  }
})

const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
    .addCase(getGenre.fulfilled, (state, action)=>{
        state.genre = action.payload;
    })
  },
});

export default genreSlice.reducer;
