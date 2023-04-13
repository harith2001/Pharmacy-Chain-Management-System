import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import VNavbaar from './components/VNavbaar';
import HNavbaar from './components/HNavbaar';
import Home from './components/Home';
import Insert from './components/Insert';
import Edit from './components/Edit';
import Details from './components/Details';
import Search from './components/Search';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
    <div className='app'>
    <VNavbaar/>
    <HNavbaar/>
    <Routes>
    <Route path='/Search' Component={Search}/>
    <Route path='/' Component={Home}/>
    <Route path='/Insert' Component={Insert}/>
    <Route path='/Edit/:id' Component={Edit}/>
    <Route path ='/view/:id' Component={Details}/>
    </Routes>
    </div>
    </>
  );
}

export default App;
