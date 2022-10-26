
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Register from './pages/Register'
import Car from './pages/Cars'
import Storage from './pages/Storage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './pages/Search';
import MaterialSearch from './pages/MSearch'
import StorageSearch from './pages/StorageSearch'
//import 'bootstrap/dist/css/bootstrap.min.css'




function App() {
  return (

    
    <Router>
      
      
     
        <Navbar />
        
        <Routes>
        
        <Route path="/Material" element={<Register/>}></Route>
        <Route path="/Cars" element={<Car/>}></Route>
        <Route path="/Storage" element={<Storage/>}></Route>
        <Route path="/carsearch" element= {<Search/>}></Route>
        <Route path="/materialsearch" element= {<MaterialSearch/>}></Route>
        <Route path="/storageSearch" element= {<StorageSearch/>}></Route>
        
        </Routes>
        
      
    </Router>
    
  );
}

export default App;