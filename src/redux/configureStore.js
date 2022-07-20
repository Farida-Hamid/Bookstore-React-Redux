import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootStore = configureStore({
  reducer: booksReducer,
  reducer2: categoriesReducer,
});

export default rootStore;
