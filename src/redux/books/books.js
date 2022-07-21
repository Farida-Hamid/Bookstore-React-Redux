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

const initialState = [{
  id: 1,
  title: 'book1',
  author: 'author1',
},
{
  id: 2,
  title: 'book2',
  author: 'author2',
},
];

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return [...state.filter((item) => item.id !== action.payload)];
    default:
      return state;
  }
};

export default booksReducer;
