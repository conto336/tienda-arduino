import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "tailwindcss/dist/tailwind.css";
import "@fortawesome/fontawesome-free/js/all";
import "./assets/css/App.css";


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
