import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

//componentes
import Header from './Shared/Header/Header.jsx';
import Footer from './Shared/Footer/Footer.jsx';

//Para rutas
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>

    <BrowserRouter> 
      {/* Todo componenete que esté dentro de BrowserRouter puede usar las rutas */}
      <Header/>

      <App/>

      <Footer/>

    </BrowserRouter>


  </React.StrictMode>
  
)
