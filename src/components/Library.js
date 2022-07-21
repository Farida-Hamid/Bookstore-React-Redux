import React from 'react';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const Library = (props) => {
  // const bookList = useSelector((state) => state);
  const {bookList} = props;
  console.log('Library recieved:', bookList);

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

Library.propTypes = {
  books: PropTypes.arrayOf(PropTypes.oneOfType(
    [PropTypes.object],
  )),
};

export default Library;
