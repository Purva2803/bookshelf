import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { CategoryContext } from './CategoryContext';
import HomePage from './HomePage';
import SearchPage from './SearchPage';

function App() {
 
  return (
    
        <div>
          <header>Book Shelf</header>
          <nav>
            <NavLink to="/" end>
              
            </NavLink>
            <NavLink to="/search">Search</NavLink>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
      
  );
}

export default App;


