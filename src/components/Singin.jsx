import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../feauters/applicationSlice";
import styles from "../components/sign.module.css";
import { TailSpin } from "react-loader-spinner";
import { Alert } from "@mui/material";
import BasicAlerts from "./BasicAlert";

const Singin = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const err = useSelector((state)=> state.application.error)
  const loader = useSelector((state)=> state.application.load)
  const handleChange = (e) => {
    setLogin(e.target.value);
  };
  const handleChangePas = (e) => {
    setPassword(e.target.value);
  };
  const handleClick = (e) => {
    
    setLogin("");
    setPassword("");
    dispatch(loginThunk({ login, password }));
    window.location.reload()
  };

  return (
    <div className={styles.auth_container}>
      <input
        placeholder="ЛОГИН"
        onChange={(e) => handleChange(e)}
        value={login}
        type="text"
      />
      <input
        placeholder="ПАРОЛЬ"
        onChange={(e) => handleChangePas(e)}
        value={password}
        type="text"
      />
      <div className={styles.error}>{err? <BasicAlerts  text = {err.toString()} /> : null}</div>
      <button onClick={() => handleClick()}>
      {loader ? 
                <TailSpin 
                
                height = "20"
                width = "20"
                radius = "9"
                color = 'white'
                ariaLabel = 'three-dots-loading'     
                wrapperStyle
                wrapperClass
              />
            : "Войти"
            }
      </button>
    </div>
  );
};

export default Singin;
