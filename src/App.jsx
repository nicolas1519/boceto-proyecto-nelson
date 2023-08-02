import { useState } from 'react';
import './App.css';

//importamos rutas
import { Routes, Route } from "react-router-dom";

//pages
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Page404 from './Pages/Page404/Page404';

function App() {

  return (

    <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/*" element={<Page404/>}></Route> //cuando pongan otra url va a ir a este componente
    
    </Routes>

  )

}

export default App;
