import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/books/books';

const AddBook = () => {
  const bookList = useSelector((state) => state);
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const author = e.target.author.value;

    if (title && author) {
      dispatch(
        add({
          id: bookList.length + 1,
          title,
          author,
        }),
      );
    }
  };
  
  return (
  <form onSubmit={submit}>
    <h2>Add a book</h2>
    <input type="text" placeholder="Title" name="title" />
    <input type="text" placeholder="Author" name="author" />
    <button type="submit">Add</button>
  </form>
);
}
export default AddBook;
