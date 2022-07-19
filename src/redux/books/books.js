// Action types
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

// Action creators
export const add = (book) => ({
  type: ADD,
  payload: book,
});

export const remove = (index) => ({
  type: REMOVE,
  payload: index,
});

// Reducer
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return [...state.slice(0, action.index),
        ...state.slice(action.index + 1), state.length];
    default:
      return state;
  }
};

export default booksReducer;
