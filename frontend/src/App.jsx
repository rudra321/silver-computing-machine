// src/App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Landing from './pages/Landing';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/homepage' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
