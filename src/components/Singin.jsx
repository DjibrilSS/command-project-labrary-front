import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../feauters/applicationSlice";
import styles from "../components/sign.module.css";

const Singin = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
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
      <button onClick={() => handleClick()}>ВОЙТИ</button>
    </div>
  );
};

export default Singin;
