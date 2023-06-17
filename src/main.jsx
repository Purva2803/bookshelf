import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { CategoryContext } from './CategoryContext';

ReactDOM.render(
  <React.StrictMode>
    
      <Router>
        <App />
      </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);
