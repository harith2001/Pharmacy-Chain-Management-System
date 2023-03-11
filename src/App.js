import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbaar from './components/Navbaar';
import Home from './components/Home';
import Insert from './components/Insert';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
    <Navbaar/>
    <Routes>
    <Route path='/' Component={Home}/>
    <Route path='/Insert' Component={Insert}/>
    </Routes>
    </>
  );
}

export default App;
