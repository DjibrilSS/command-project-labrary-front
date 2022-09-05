import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../components/main.module.css";
import { fetchBooks } from "../feauters/bookSlice";
import { useSelector } from "react-redux/es/exports";
import Book from "./Book";
import Genre from "./Genre";
import { useParams } from "react-router-dom";
import { filterBook } from "../feauters/bookSlice";
import { fetchUsersid } from "../feauters/userSlice";
const Main = () => {
  const bookfilter = useSelector((state) => state.book.bookfilter);
  const books = useSelector((state)=> state.book.books)
  const idUser = useSelector((state)=> state.application.id)
  const {id} = useParams();
  const loader = useSelector((state)=> state.book.loading)
 

 
   const books1 = bookfilter.filter((item) => {
      if(!id){
        return true
      }
      return item.genre._id === id
    });
  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks())
    dispatch(fetchUsersid(idUser))
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
          return <> <Book key={index} item={item} /></>
        })}
      </div>
    </>
  );
};

export default Main;
