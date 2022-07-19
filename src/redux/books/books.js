// Action types
const ADD = 'ADD';
const REMOVE = 'REMOVE';

// Action creators
export const add = book => ({
  type: ADD,
  payload: book
});

export const remove = (index) => ({
  type: REMOVE,
  payload: index
});
