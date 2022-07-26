import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    author: '',
    category: '',
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
    const id = Math.floor(Math.random() * 10000);

    if (state.title && state.author && state.category) {
      const book = {
        item_id: id,
        title: state.title,
        author: state.author,
        category: state.category,
      };
      dispatch(
        sendBook(book),
      );
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Add a book</h2>
      <input type="text" placeholder="Title" name="title" value={state.title} onChange={read} />
      <input type="text" placeholder="Author" name="author" value={state.author} onChange={read} />
      <input type="text" placeholder="Category" name="category" value={state.category} onChange={read} />
      <button type="submit">Add</button>
    </form>
  );
};
export default AddBook;
