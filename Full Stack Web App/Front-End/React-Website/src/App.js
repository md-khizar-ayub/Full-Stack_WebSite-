import React from 'react';
import './App.css';

import NavBar from './Components/NavBar.js';
import ReactDOM from 'react-dom';  
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  ;
import { Routes} from 'react-router-dom';
import Home from './Components/pages/Home.js';
import Services from './Components/pages/Services.js';
import  Products from './Components/pages/Products.js';
import ContactUs from './Components/pages/ContactUs';

function App() {
  return (
  <> 
  <Router>
  <NavBar/>

  <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/service" element={<Services/>}/>
  <Route path="/products" element={<Products/>}/>
  <Route path="/sign-Up" element={<ContactUs/>}/>


  </Routes>
  </Router>
  </>
  );
}

export default App;
