import './App.css';
import Login from './Component/Login.js';
import MainPage from './Component/MainPage';
import History from './Component/History.js'
import { BrowserRouter,Router,Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
  console.log("App is running")
function App() {
  return (
    
     <MainPage/>

  );
}

export default App;
