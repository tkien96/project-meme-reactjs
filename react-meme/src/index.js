// CSS
import './assets/lib/bootstrap/bootstrap.min.css'
import './assets/css/style.css'
// Font
import './assets/fonts/font-awesome/css/font-awesome.css'
import './assets/fonts/emotion/style.css'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
