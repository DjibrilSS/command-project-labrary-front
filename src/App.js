import { Provider } from "react-redux";
import "./App.css";
import Genre from "./components/Genre";
import { store } from "./app/store";

function App() {
  return(
    <Provider store={store}>
      <Genre/>
    </Provider>
  )
}

export default App;
