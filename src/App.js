import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";


import { Routes, Route } from "react-router-dom";
import UserPage from "./components/UserPage";

function App() {
  return (
    
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/lk" element={<UserPage/>}/>
        </Routes>
      </div>
    
  );
}

export default App;
