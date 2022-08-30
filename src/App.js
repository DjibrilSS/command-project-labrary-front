import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { Provider } from "react-redux/es/exports";
import {store} from "./app/store"

function App() {
  return(
    
     <Provider store = {store}>
      
    <div className="container">
    <Header/>
      <Main/>
    </div>
      
     </Provider>
    
  )
}

export default App;
