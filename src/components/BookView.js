import React from 'react';
import BooksList from './Books';
import BookForm from './BookForm';

const BookView = () => {
  const books = [
    {
      id: 1,
      title: 'Dune',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: 'The Hunger Games',
      author: 'James Roynolds',
    },
    {
      id: 3,
      title: 'Catch me if you can',
      author: 'Leaonardo de Caprio',
    },
  ];

  return (
    <>
      <BooksList books={books} />
      <BookForm />
    </>
  );
};
export default BookView;
