import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from "../components/main.module.css"
import { fetchBooks } from '../feauters/bookSlice';
import { useSelector } from 'react-redux/es/exports';
import Book from './Book';






const Main = () => {
    const status = useSelector((state)=> state.user.status)
    const [text,setText] = useState("")

    const books = useSelector((state)=> state.book.books)
    
    const dispatch = useDispatch()
    useEffect(()=>{

        dispatch(fetchBooks())
        {status ? setText("Книга Арендована") : setText("Арендовать")}
    }, [dispatch,status])


    return (
        <div className={styles.main_block} >
           {books.map((item,status)=>{
            return <Book item = {item} text = {text}/>
           })}
        </div>
    );
};

export default Main;