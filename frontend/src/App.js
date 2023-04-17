import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import VNavbaar from "./Components/VNavbar";
import HNavbaar from "./Components/HNavbar";
import Form from "./pages/Form";
import FormTwo from "./pages/FormTwo";
import FinanceHome from "./pages/FinanceHome";
import FormDetails from "./pages/FormDetails";
import FormEdit from "./pages/FormEdit";
import "./App.css";

function App() {
  return (
    <div className="App">
      <VNavbaar />
      <HNavbaar />
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<FinanceHome />} />
            <Route path="/financehome" element={<FinanceHome />} />
            <Route path="/financedetails" element={<FormDetails />} />
            <Route path="/insertfinance" element={<Form />} />
            <Route path="/financedetailsexcel" element={<FormTwo />} />
            <Route path="/financeedit/:id" element={<FormEdit />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
