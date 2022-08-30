import { configureStore } from "@reduxjs/toolkit";
import book from "../feauters/bookSlice";
import user from "../feauters/userSlice";
import genre from "../feauters/genreSlice";
import application from "../feauters/applicationSlice";
export const store = configureStore({
  reducer: {
    application,
    book,
    user,
    genre,
  },
});
