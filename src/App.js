import './App.css';
import Login from './Component/Login.js';
import MainPage from './Component/MainPage';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
  console.log("App is running")
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login></Login>}/>
          <Route path="/MainPage" element ={<MainPage/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
