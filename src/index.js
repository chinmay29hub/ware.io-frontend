import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Login from './components/Login/Login';

// import { BrowserRouter } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";


// import reportWebVitals from './reportWebVitals';

// import DisplayTableUi from './components/displayTable/DisplayTableUi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        {/* <App /> */}
        <Login />
  </React.StrictMode>
);

// reportWebVitals();
