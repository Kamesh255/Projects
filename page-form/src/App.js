import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import PageOne from './Pages/PageOne';
import PageTwo from './Pages/PageTwo';
import Users from './Pages/Users';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/registration/one' element={<PageOne/>}></Route>
        <Route path='/registration/two' element={<PageTwo/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
