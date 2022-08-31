import React, { useEffect, useState } from 'react';
import styles from "../components/book.module.css"
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { arendabook, fetchUsers } from '../feauters/userSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { fetchBooks } from '../feauters/bookSlice';



const Book = ({item}) => {
    const id = useSelector((state)=> state.application.id)
    const [text,setText] = useState(item.status ? "Книга арендована": "Арендавать книгу")
    
    
   useEffect(()=>{
    dispatch(fetchBooks())
   },[item.status])
    
    

    const dispatch = useDispatch()

    const handleClick = (idbook,status)=>{
        dispatch(arendabook({id,idbook}))
        setText("Книга Арендована") 
        
       
        
      
        
    }
  

    return (
        <div className={styles.bookCard}>
            <div className={styles.title_img}>
                <img src={`http://localhost:4000/images/${item.img}`} alt="" />
            </div>
            <div className={styles.text_block}>
                <div className={styles.text_title}>
                    <h3>{item.name}</h3>
                </div>
                <div className={styles.text_inner} >
                    <p><span>Автор</span>: {item.author}</p>
                    <p><span>Жанр</span>: {item.genre.nameGenre}</p>
                    <p><span>Язык книги</span>: Русский</p>
                </div>
                <div className={styles.btn}>
                    <button onClick={()=> handleClick(item._id,item.status)}>{text}</button>
                </div>
            </div>
        </div>
    );
};

export default Book;