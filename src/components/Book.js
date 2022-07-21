/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { remove } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const deleteBook = (e) => {
    e.preventDefault();
    dispatch(remove(id));
  };

  return (
    <div>
      <h2>{title}</h2>
      <h3>{author}</h3>
      id:
      {id}
      <button type="button" onClick={deleteBook} value={id}>Delete</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
