import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import history from "./helpers/history";
import {
  BrowserRouter as Router,
} from "react-router-dom";


ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
reportWebVitals();
