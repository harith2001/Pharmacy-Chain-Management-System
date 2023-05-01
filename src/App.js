import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MedicineEdit from "./pages/MedicineEdit";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import View from "./pages/View";
import VNavbaar from "./pages/VNavbaar";
import Hnavbar from "./pages/Hnavbar";
import Search  from "./pages/Search";
import "./App.css"


const App = () => {
  return <>
    <BrowserRouter>
    <VNavbaar/>
    <Hnavbar/>
     <Routes>
         <Route path = "/" element = {<Home/>} />
         <Route path = "/edit/:id" element = {<MedicineEdit/>} />
         <Route path = "/Insert" element = {<Insert/>} />
         <Route path = "/View/:id" element = {<View/>} />
         <Route path = "/search/:id" element = {<Search/>} />
     </Routes>
    </BrowserRouter>
  </>;
};

export default App;
