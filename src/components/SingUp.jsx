import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authThunk } from "../feauters/applicationSlice";

const SingUp = () => {
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
    dispatch(authThunk({ login, password }));
  };

  return (
    <div>
      <input
        placeholder="login"
        onChange={(e) => handleChange(e)}
        value={login}
        type="text"
      />
      <input
        placeholder="password"
        onChange={(e) => handleChangePas(e)}
        value={password}
        type="text"
      />
      <button onClick={() => handleClick()}>Sing Up</button>
    </div>
  );
};

export default SingUp;
