import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import history from "./helpers/history"
import { BrowserRouter as Router } from "react-router-dom"

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
