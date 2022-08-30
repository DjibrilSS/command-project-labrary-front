import React from 'react';
import styles from "../components/book.module.css"

const Book = ({item}) => {
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
                    <p>Автор: {item.author}</p>
                    <p>Жанр: {item.genre.nameGenre}</p>
                    <p>Язык книги: Русский</p>
                </div>
                <div className={styles.btn}>
                    <button>Арендовать книгу</button>
                </div>
            </div>
        </div>
    );
};

export default Book;