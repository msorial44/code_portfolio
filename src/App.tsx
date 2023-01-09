import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './components/home/Home';
import About from './components/about/About';

function App() {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={
                <Home />
            } />
            <Route path="/home" element={
                <Home />
            } />
            <Route path="/about" element={
                <About />
            } />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;