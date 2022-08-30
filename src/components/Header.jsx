import React from "react";
import { Link } from "react-router-dom";
import logo from "../components/logo_litmir.png";
import styles from "../components/header.module.css";

const Header = () => {

    
  return (
    <div className={styles.header}>
      <div className={styles.header_link}>
        <Link to="/auth">Регистрация</Link>

        <Link to="/auth">Вход</Link>
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
