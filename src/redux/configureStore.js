import { combineReducers } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootStore = combineReducers({
  book: booksReducer,
  catigory: categoriesReducer,
});

export default rootStore;
