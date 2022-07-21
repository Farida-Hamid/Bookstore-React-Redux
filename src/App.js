import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux';
import Library from './components/Library';
import Categories from './components/Categories';
import Header from './components/Header';

function App() {
  const state = useSelector((state) => state);

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
