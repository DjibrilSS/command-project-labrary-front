import React from "react";
import { Link } from "react-router-dom";
import logo from "../components/logo_litmir.png";
import styles from "../components/header.module.css";
import { useSelector } from "react-redux/es/exports";
const Header = () => {
const token = useSelector((state)=> state.application.token)
    
  return (
    <div className={styles.header}>
      <div className={styles.header_link}>
       {token ?  <Link to="/">Выйти</Link>
        : <> <Link to="/auth">Регистрация</Link>
          <Link to="/login">Вход</Link>
          </>
        }
      </div>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
      
<form action="">
  <input className={styles.search} type="search"/>
  <i className="fa fa-search"></i>
</form>
      </div>
    </div>
  );
};

export default Header;
