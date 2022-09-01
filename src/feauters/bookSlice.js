import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
const initialState = {
  books:[],
  bookfilter:[]

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
  reducers: {
    filterBook: (state,action)=>{
      state.bookfilter = state.books.filter((item)=>{
      
        
         return item.name.toLowerCase().includes(action.payload.toLowerCase().toString())
      }
      )
    },
  
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchBooks.fulfilled,(state,action)=>{
      state.books = action.payload
     if(state.bookfilter.length < 1){
      state.bookfilter = action.payload
     }
      
    })
  },
});

export const {filterBook} = bookSlice.actions

export default bookSlice.reducer;
