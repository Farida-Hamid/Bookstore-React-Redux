import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/books/books';

const AddBook = () => {
  const bookList = useSelector((state) => state);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    author: '',
  });

  const read = (e) => {
    const input = e.target;
    setState({
      ...state,
      [input.name]: input.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    if (state.title && state.author) {
      // Calculate the maximum id number in booklist
      let maxID = 0;
      for (let i = 0; i < bookList.books.length; i += 1) {
        if (bookList.books[i].id > maxID) {
          maxID = bookList.books[i].id;
        }
      }

      dispatch(
        add({
          id: maxID + 1,
          title: state.title,
          author: state.author,
        }),
      );
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Add a book</h2>
      <input type="text" placeholder="Title" name="title" value={state.title} onChange={read} />
      <input type="text" placeholder="Author" name="author" value={state.author} onChange={read} />
      <button type="submit">Add</button>
    </form>
  );
};
export default AddBook;
