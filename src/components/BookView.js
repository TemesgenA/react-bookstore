import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Booklist from './Booklist';
import { getbooks } from '../redux/books/books';
import BookForm from './BookForm';

const BookView = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getbooks());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Booklist books={books} />
      <BookForm />
    </>
  );
};
export default BookView;