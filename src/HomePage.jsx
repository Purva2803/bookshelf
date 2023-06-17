
import './App.css'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import { books } from './data/books';
import SearchPage from './SearchPage';


function HomePage() {

  
  const [categories, setCategories] = useState({});

  useEffect(() => {
    // Initialize the categories state with the initial categories of the books
    const initialCategories = books.reduce((prevCategories, book) => {
      prevCategories[book._id] = book.category;
      return prevCategories;
    }, {});
    setCategories(initialCategories);
  }, []);

  const handleCategoryChange = (bookId, category) => {
    setCategories((prevCategories) => ({
      ...prevCategories,
      [bookId]: category,
    }));
  };

  const shelf1 = books.filter((book) => categories[book._id] === 'wanttoread');
  const shelf2 = books.filter(
    (book) => categories[book._id] === 'currentlyreading'
  );
  const shelf3 = books.filter((book) => categories[book._id] === 'read');

  return (
    <>
 
         

      <div className="category">
        <h2>Want to Read</h2>
        {shelf1.map((book) => (
          <div key={book._id}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <select
              value={categories[book._id] || 'none'}
              onChange={(e) => handleCategoryChange(book._id, e.target.value)}
            >
              <option value="none">None</option>
              <option value="read">Read</option>
              <option value="wanttoread">Want to Read</option>
              <option value="currentlyreading">Currently Reading</option>
            </select>
          </div>
        ))}
      </div>

      <div className="category">
        <h2>Currently Reading</h2>
        {shelf2.map((book) => (
          <div key={book._id}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <select
              value={categories[book._id] || 'none'}
              onChange={(e) => handleCategoryChange(book._id, e.target.value)}
            >
              <option value="none">None</option>
              <option value="read">Read</option>
              <option value="wanttoread">Want to Read</option>
              <option value="currentlyreading">Currently Reading</option>
            </select>
          </div>
        ))}
      </div>

      <div className="category">
        <h2>Read</h2>
        {shelf3.map((book) => (
          <div key={book._id}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <select
              value={categories[book._id] || 'none'}
              onChange={(e) => handleCategoryChange(book._id, e.target.value)}
            >
              <option value="none">None</option>
              <option value="read">Read</option>
              <option value="wanttoread">Want to Read</option>
              <option value="currentlyreading">Currently Reading</option>
            </select>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
