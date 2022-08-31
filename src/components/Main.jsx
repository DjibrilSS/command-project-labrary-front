import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from "../components/main.module.css"
import { fetchBooks } from '../feauters/bookSlice';
import { useSelector } from 'react-redux/es/exports';
import Book from './Book';
import Genre from './Genre';






const Main = () => {
   
    

    const books = useSelector((state)=> state.book.books)
    
    const dispatch = useDispatch()
    useEffect(()=>{

        dispatch(fetchBooks())
    
    }, [dispatch])


    return (
        <>
        <Genre/>
        <div className={styles.main_block} >
           {books.map((item)=>{
            return <Book item = {item} />
           })}
        </div>
        </>
    );
};

export default Main;