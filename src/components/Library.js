import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

const Library = () => {
  const bookList = [];

  return (
    <div>
      {bookList.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <AddBook />
    </div>
  );
};

export default Library;
