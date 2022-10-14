
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Register from './pages/Register'
import { BrowserRouter as Router, Route } from 'react-router-dom';




function App() {
  return (

    
    <Router>
      
      <Navbar />
      <Register />

       
        
      
    </Router>
  );
}

export default App;