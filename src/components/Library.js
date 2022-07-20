import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const Library = () => {
  const bookList = useSelector((state) => state);

  return (
    <div>
      {bookList.map((book) => (
        <>
        <Book key={book.id} title={book.title} author={book.author} id={book.id} />
        </>
      ))}
      <AddBook />
    </div>
  );
};

export default Library;
