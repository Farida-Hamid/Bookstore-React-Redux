// Action type
const STATUS_CHECK = 'bookstore/categories/STATUS_CHECK';

// Action creator
export const check = () => ({
  type: STATUS_CHECK,
});

// Reducer
const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case STATUS_CHECK:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoriesReducer;
