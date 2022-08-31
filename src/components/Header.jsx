import React from "react";
import { Link } from "react-router-dom";
import logo from "../components/logo_litmir.png";
import styles from "../components/header.module.css";
import { useSelector } from "react-redux/es/exports";
const Header = () => {
const token = useSelector((state)=> state.application.token)
    const handleClick = ()=>{
      localStorage.clear()
      window.location.reload()

    }
  return (
    <div className={styles.header}>
      <div className={styles.header_link}>
       {token ? <> <Link onClick={()=> handleClick()} to="/">Выйти</Link>
                    <Link to="/lk">Личный кабинет</Link>
       </>

        : <> <Link to="/auth">Регистрация</Link>
          <Link to="/login">Вход</Link>
          </>
        }
      </div>
      <div>
        <Link to="/"><img src={logo} alt="" /></Link>
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
