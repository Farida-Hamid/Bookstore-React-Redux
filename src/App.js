import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Library from './components/Library';
import Categories from './components/Categories';
import Header from './components/Header';
import { useEffect } from 'react';
import { recieveBooks } from './redux/books/books';

function App() {
  const state = useSelector((state) => state);
  console.log('state at app', state);
  const dispatch = useDispatch();
  useEffect(() => async () => {
    await dispatch(recieveBooks());
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Library bookList={state.books} />} />
          <Route path="/categories" element={<Categories categories={state.categories} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
