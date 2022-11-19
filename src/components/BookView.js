import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BooksList from './Books';
import { getbooks } from '../redux/books/books';

const BookView = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getbooks());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <BooksList books={books} />
    </>
  );
};
export default BookView;
