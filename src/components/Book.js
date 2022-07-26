/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();

  const deleteBook = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };

  return (
    <div className="book font2">
      <text className="category font1">{category}</text>
      <h2 className="title">{title}</h2>
      <h3 className="author">{author}</h3>
      <button className="delete" type="button" onClick={deleteBook} value={id}>Delete</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
