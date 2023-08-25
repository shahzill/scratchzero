import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react"; 
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { AuthProvider } from "./Pages/auth";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

function App() {
  return (
    
    <AuthProvider>
      <Router> 
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/Projects' element={< Projects />} />
        </Routes>

    </Router>
    
    </AuthProvider>
  );
}

export default App;
