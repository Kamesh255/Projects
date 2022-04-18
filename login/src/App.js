import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home"
import LogIn  from './components/LogIn';
import SignUp from './components/SignUp';
function App() {
  return (
    <div className="App"> 

      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/login' element={<LogIn/>}>LogIn</Route>
        <Route path='/signup' element={<SignUp/>}>SignUp</Route>
      </Routes>
    </div>
  );
}

export default App;
