import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

const Library = () => {
  const bookList = [{
    id: 1,
    title: 'book1',
    author: 'author1',
  },
  {
    id: 2,
    title: 'book2',
    author: 'author2',
  },
  ];

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
