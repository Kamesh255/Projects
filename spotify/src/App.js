import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import Dashboard from './Dashboard';


const code = new URLSearchParams(window.location.search).get('code')
function App() {
  return  code ? <Dashboard code={code} /> : <Login/> 
}

export default App;


// fe68573a9897414b9ebcbc75aabe8c1d