import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';


import Navbar from './components/Navbar';
import Home from './components/home';
import Edit_customer from './components/edit_customer';
import View_details from './components/view_details';
import Add_customer from './components/add_customer';
import Sidebar from './components/sidebar';
import Edit_cus_form from './components/edit_cus_form';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/edit' element={<Edit_customer />} />
          <Route path='/view' element={<View_details />} />
          <Route path='/add' element={<Add_customer />} />
          <Route path='/edit_cus_form/:id' element={<Edit_cus_form/>} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
