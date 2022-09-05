import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import SignUp from "./components/SingUp";
import SignIn from "./components/Singin";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { Routes, Route, Navigate } from "react-router-dom";
import UserPage from "./components/UserPage";

function App() {
  const token = useSelector((state) => state.application.token);
  if (token) {
    return (
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/lk" element={<UserPage />} />
          <Route path="/auth" element={<Navigate to="/" />} />
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/genre/:id" element={<Main />} />
        </Routes>
      </div>
    );
  }
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/lk" element={<UserPage />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/genre/:id" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
