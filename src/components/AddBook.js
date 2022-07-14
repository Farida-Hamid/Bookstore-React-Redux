import React from 'react';

const AddBook = () => (
  <form>
    <h2>Add a book</h2>
    <input type="text" placeholder="Title" name="title" />
    <input type="text" placeholder="Author" name="author" />
    <button type="submit">Add</button>
  </form>
);

export default AddBook;
