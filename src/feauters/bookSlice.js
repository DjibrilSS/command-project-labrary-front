import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
const initialState = {
  books:[],
  bookfilter:[],
  loading: false

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
    updatestatus: (state,action)=>{
      state.bookfilter = state.bookfilter.map((item) => {
        if (item._id === action.payload) {
          return {
            ...item,
            status: true
          }
        }
        return item;
      });
    },

    deletestatus: (state,action)=>{
      state.bookfilter = state.bookfilter.map((item) => {
        if (item._id === action.payload) {
          return {
            ...item,
            status: false
          }
        }
        return item;
      });
    }
  
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchBooks.fulfilled,(state,action)=>{
      state.books = action.payload
      state.loading = false
     if(state.bookfilter.length < 1){
      state.bookfilter = action.payload
     }
      
    })
    .addCase(fetchBooks.pending,(state,action)=>{
      state.loading = true
    })
    .addCase(fetchBooks.rejected,(state,action)=>{
      state.loading = false
    })
  },
});

export const {filterBook,updatestatus,deletestatus} = bookSlice.actions

export default bookSlice.reducer;
