import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = (props) => {
  const { books } = props;

  return (
    <ul className="booklist flex">
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          id={book.id}
        />
      ))}
    </ul>

  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.string,
    }),
  ).isRequired,
};

export default BooksList;
