import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';


import Navbar from './components/Navbar';
import Home from './components/home';
import Edit_distributor from './components/edit_distributor';
import View_details from './components/view_details';
import Add_distributor from './components/add_distributor';
import Sidebar from './components/sidebar';
import Edit_form from './components/edit_form';
import Medicine from  './components/Medicine';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
       <Navbar/>
        <Routes>
        <Route path='/med' element={<Medicine />} />
          <Route path='/' element={<Home />} />
          <Route path='/edit' element={<Edit_distributor />} />
          <Route path='/view' element={<View_details />} />
          <Route path='/add' element={<Add_distributor />} />
          <Route path='/edit_form/:id' element={<Edit_form/>} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
