import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../components/logo_litmir.png";
import styles from "../components/header.module.css";
import { filterBook } from "../feauters/bookSlice";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { fetchBooks } from "../feauters/bookSlice";
const Header = () => {
  const dispatch = useDispatch()
  const [value,setValue]=useState("")
  const token = useSelector((state) => state.application.token);
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };

useEffect(()=>{
  dispatch(filterBook(value))
},[value])

  return (
    <div className={styles.header}>
      <div className={styles.header_link}>
        {token ? (
          <>
            {" "}
            <Link onClick={() => handleClick()} to="/">
              Выйти
            </Link>
            <Link to="/lk">Личный кабинет</Link>
          </>
        ) : (
          <>
            {" "}
            <Link to="/auth">Регистрация</Link>
            <Link to="/login">Вход</Link>
          </>
        )}
      </div>
      <div>
        <Link className={styles.logo} to="/">
          <p>BOMBIMBO</p>
          <p className={styles.logo2}>TEKA</p>
        </Link>
      </div>
      <div>
        <form action="">
          <input onChange={(e)=> setValue(e.target.value)} value={value} className={styles.search} type="search" />
          <i className="fa fa-search"></i>
        </form>
      </div>
    </div>
  );
};

export default Header;
