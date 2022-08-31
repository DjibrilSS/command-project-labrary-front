import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../components/main.module.css";
import { fetchBooks } from "../feauters/bookSlice";
import { useSelector } from "react-redux/es/exports";
import Book from "./Book";
import Genre from "./Genre";
import { useParams } from "react-router-dom";

const Main = () => {
  let books = useSelector((state) => state.book.books);
  const bookId = useParams();
  console.log(bookId);
  if (bookId.id) {
    books = books.filter((item) => {
      return item.genre._id === bookId.id;
    });
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (books.length === 0) {
    return <div>В этом жанре пока нет книг</div>;
  }

  return (
    <>
      <Genre />
      <div className={styles.main_block}>
        {books.map((item) => {
          return <Book item={item} />;
        })}
      </div>
    </>
  );
};

export default Main;
