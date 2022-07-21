/* eslint-disable react/prop-types */
import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

const Library = (props) => {
  const { bookList } = props;

  return (
    <div>
      {bookList.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} id={book.id} />
      ))}
      <AddBook />
    </div>
  );
};

Library.defaultProps = {
  books: [],
};

export default Library;
