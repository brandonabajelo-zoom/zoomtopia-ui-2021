import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/styles.scss';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import axios from 'axios';

require('dotenv').config();

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.baseURL = 'http://localhost:5000/api';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);