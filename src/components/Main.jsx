import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../components/main.module.css";
import { fetchBooks } from "../feauters/bookSlice";
import { useSelector } from "react-redux/es/exports";
import Book from "./Book";
import Genre from "./Genre";
import { useParams } from "react-router-dom";
import { filterBook } from "../feauters/bookSlice";
const Main = () => {
  const bookfilter = useSelector((state) => state.book.bookfilter);
  const books = useSelector((state)=> state.book.books)
  const {id} = useParams();
 

 
   const books1 = bookfilter.filter((item) => {
      if(!id){
        return true
      }
      return item.genre._id === id
    });
  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks())
  }, []);

  if (books.length === 0) {
    return (
      <>
        <Genre />
        <br />
        <div>В этом жанре пока нет книг</div>
      </>
    );
  }

  return (
    <>
      <Genre />
      <div className={styles.main_block}>
        {books1.map((item,index) => {
          return <> <Book item={item} /></>
        })}
      </div>
    </>
  );
};

export default Main;
