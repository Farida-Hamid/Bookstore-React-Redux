import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootStore = configureStore({
  reducer: booksReducer,
  reducer: categoriesReducer,
});

export default rootStore;
