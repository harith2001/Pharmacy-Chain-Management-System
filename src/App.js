import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';


import Navbar from './pages/Navbar';
import Home from './pages/home';
import Emp_details from './pages/Emp_details';
import Sidebar from './pages/sidebar';
import Insert from './pages/Insert';
import Edit_employee from './pages/View';
import Edit_emp_form from './pages/Edit';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/edit' element={<Edit_employee />} />
          <Route path='/view' element={<Emp_details />} />
          <Route path='/add' element={<Insert />} />
          <Route path='/edit_emp_form/:id' element={<Edit_emp_form/>} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
