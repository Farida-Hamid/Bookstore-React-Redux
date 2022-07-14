import React from "react";
import Book from "./Book";

const Library = () => {
  const bookList = {
    id: 1,
    title: 'book1',
    author: 'author1',
  };

  return (
    <div>
      {bookList.map((book) => {
        <Book key={book.id} title={book.title} author={book.author} />
      })}
    </div>
  );
}

export default Library;
