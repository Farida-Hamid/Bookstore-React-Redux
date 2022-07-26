// Action types
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const READ = 'bookstore/books/READ';

const APIURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1fOnn2C5yMKtspS4K1tx/books';

// Action creators
export const add = (book) => ({
  type: ADD,
  payload: book,
});

export const remove = (index) => ({
  type: REMOVE,
  payload: index,
});

export const read = (books) => ({
  type: READ,
  payload: books,
});

// Reducer
const booksReducer = (state = [], action) => {
  console.log('action', action);
  switch (action.type) {
    case READ:
      return action.payload;
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return [...state.filter((item) => item.item_id !== action.payload)];
    default:
      return state;
  }
};

export const recieveBooks = () => async (dispatch) => {
  console.log('recieving');
  await fetch(APIURL)
    .then((res) => res.json())
    .then((books) => {
      console.log('storing');

      let bookList = [];
      Object.keys(books).map(key => {
        bookList.push({
          item_id: key,
          title: books[key][0].title,
          author: books[key][0].author,
          category: books[key][0].category,
        });
      });
        console.log('dispstching',bookList);
        dispatch(read(bookList));
    });
};

export const sendBook = (book) => async (dispatch) => {
  console.log('posting', JSON.stringify(book));
  await fetch(APIURL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => {
      dispatch(add(book));
    });
};

export const removeBook = (id) => async (dispatch) => {
  console.log('deleting', id);
  await fetch(`${APIURL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => {
      dispatch(remove(id));
    });
};

export default booksReducer;
