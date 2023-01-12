import ReactDOM from 'react-dom';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";

//import {AuthContextProvider} from './store/auth-context';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
