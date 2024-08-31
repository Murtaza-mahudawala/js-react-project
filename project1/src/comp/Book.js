import React, { useState } from 'react';

function Book() {
  const [bookDetails, setBookDetails] = useState({
    bookName: '',
    authorName: '',
    category: '',
    issnNumber: '',
    domain: '',
    publicationName: '',
    publicationYear: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({
      ...bookDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Book Details:', bookDetails);
    // Add your form submission logic here
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Book Name:</label>
          <input
            type="text"
            name="bookName"
            value={bookDetails.bookName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Select Author Name:</label>
          <select
            name="authorName"
            value={bookDetails.authorName}
            onChange={handleChange}
          >
            <option value="">Select Author</option>
            <option value="Author 1">JAY HALOL</option>
            <option value="Author 2">Author 2</option>
            <option value="Author 3">Author 3</option>
          </select>
        </div>
        <div>
          <label>Select Category:</label>
          <select
            name="category"
            value={bookDetails.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="Category 1">SUSPENSE THRILLER</option>
            <option value="Category 2">Category 2</option>
            <option value="Category 3">Category 3</option>
          </select>
        </div>
        <div>
          <label>ISSN Number:</label>
          <input
            type="text"
            name="issnNumber"
            value={bookDetails.issnNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Domain:</label>
          <input
            type="text"
            name="domain"
            value={bookDetails.domain}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Publication Name:</label>
          <input
            type="text"
            name="publicationName"
            value={bookDetails.publicationName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Publication Year:</label>
          <input
            type="text"
            name="publicationYear"
            value={bookDetails.publicationYear}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </>
  );
}

export default Book;