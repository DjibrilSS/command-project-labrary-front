import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
const initialState = {
  users: [],
  status: false,
  rentbooks:[],
  returnstatus: null,
};


export const fetchUsers = createAsyncThunk(
  "fetch/users",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/users");
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchUsersid = createAsyncThunk(
  "fetch/usersid",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/users/${id}`);
      const data = await res.json();
      return data.rent;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const arendabook = createAsyncThunk(
  "patch/book",
  async ({ id, idbook }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/users/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rent: idbook }),
      });
      const data = await res.json();

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const returnbook = createAsyncThunk(
  "return/book",
  async ({ id, idbook }, thunkAPI) => {
    try {

      const res = await fetch(`http://localhost:4000/users/${id}/remove`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rent: idbook }),
      });
      const data = await res.json();

      return { id, idbook };
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const patchavatar = createAsyncThunk(
  "patch/avatar",
  async ({ id, file }, thunkAPI) => {
    try {
      console.log(file);
      const res = await fetch(`http://localhost:4000/users/avatar/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ avatar: file }),
      });
      const data = await res.json();

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addbooks: (state,action)=>{
      state.users = state.users.map((item) => {
          if (item._id === action.payload.id) {
            return {
              ...item,
              rent: item.rent.filter((book) => {
                  return book._id !== action.payload.idbook
              })
            }
          }
          return item;
        });
    },
    deletebooks: (state,action)=>{
      state.rentbooks.pop(action.payload)
    }
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(arendabook.fulfilled, (state, action) => {
        state.status = true;
        state.rentbooks.unshift(action.payload)
      })

      .addCase(fetchUsersid.fulfilled,(state,action)=>{
        state.rentbooks = action.payload
      })

      .addCase(returnbook.fulfilled,(state,action)=>{
        state.users = state.users.map((item) => {
          if (item._id === action.payload.id) {
            return {
              ...item,
              rent: item.rent.filter((book) => {
                  return book._id !== action.payload.idbook
              })
            }
          }
          return item;
        });
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      });
  },
});


export const {addbooks,deletebooks} = userSlice.actions

export default userSlice.reducer;
