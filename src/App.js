import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import SignUp from "./components/SingUp"
import SignIn from "./components/Singin";


import { Routes, Route } from "react-router-dom";
import UserPage from "./components/UserPage";

function App() {
  return (
    
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/lk" element={<UserPage/>}/>
          <Route path="/auth" element= {<SignUp/>}/>
          <Route path="/login" element= {<SignIn/>}/>
        </Routes>
      </div>
    
  );
}

export default App;