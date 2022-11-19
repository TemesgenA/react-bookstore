import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addbook } from '../redux/books/books';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: nanoid(),
      title,
      author,
      category: '',
    };
    setTitle('');
    setAuthor('');
    dispatch(addbook(book));
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Book title"
          id="title"
          className="book-title-input"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="author"
          value={author}
          placeholder="Book author"
          id="author"
          className="book-title-input"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </>
  );
};

export default BookForm;
