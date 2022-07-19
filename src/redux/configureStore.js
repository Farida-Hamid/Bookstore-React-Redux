import { combineReducers } from 'redux';
import {reducer as bookReducer} from './books/books';
import {reducer as catigoriesReducer} from './categories/categories'

export default rootStore = combineReducers({
  book: bookReducer,
  catigory: catigoriesReducer
});
