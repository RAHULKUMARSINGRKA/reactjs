import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Header from './componts/Header';
  import Footer from './componts/Footer';
import reportWebVitals from './reportWebVitals';
import Api from './componts/Api';
import Services from './componts/Services';
import About from './componts/About';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <About /> */}
    {/* <Services /> */}
    {/* <Header /> */}
    {/* <Footer /> */}

    {/* <Api /> */}
  

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
