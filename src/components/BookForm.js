import React from 'react';

const BookForm = () => (
  <form action="#" method="get" className="form">
    <label htmlFor="book-title">
      ADD NEW BOOK
      <input type="text" name="book-title" placeholder="Book title" id="book-title" className="form-input-catag" />
    </label>
    {' '}
    <br />
    <select className="form-input-catag">
      <option value="catagory-1">catagory-1</option>
      <option value="catagory-2">catagory-2</option>
      <option selected value="catagory-3">catagory-3</option>
    </select>
    <input type="submit" value="ADD BOOK" className="btn-input" />
  </form>
);

export default BookForm;
