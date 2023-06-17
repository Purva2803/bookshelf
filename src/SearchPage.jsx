
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';


function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
 

  const handleSearch = (e) => {
    e.preventDefault();
    const results = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleCategoryChange = (bookId, category) => {
    // Update the category of the book in the search results
    const updatedResults = searchResults.map((book) => {
      if (book._id === bookId) {
        return { ...book, category };
      }
      return book;
    });
    setSearchResults(updatedResults);
   // Update the selected category in the context
  };

  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by book title"
        />
        <button type="submit">Search</button>
      </form>

      {searchResults.length > 0 && (
        <div>
          <h2>Search Results</h2>
          <Link to="/">Back</Link>
          <div className="category">
            {searchResults.map((book) => (
              <div key={book._id}>
                <img src={book.image} alt={book.title} />
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <select
                  value={book.category}
                  onChange={(e) => handleCategoryChange(book._id, e.target.value)}
                >
                  <option value="read">Read</option>
                  <option value="wanttoread">Want to Read</option>
                  <option value="currentlyreading">Currently Reading</option>
                </select>
              </div>
            ))}
          </div>
        </div>
      )}

      {searchTerm !== '' && searchResults.length === 0 && (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default SearchPage;
