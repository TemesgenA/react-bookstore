import React from 'react';
import { useSelector } from 'react-redux';
import BooksList from './Books';
import BookForm from './BookForm';

const BookView = () => {
  const books = useSelector((state) => state.book);
  return (
    <>
      <BooksList books={books} />
      <BookForm />
    </>
  );
};
export default BookView;
